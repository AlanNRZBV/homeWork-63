import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import AddPost from '../AddPost/AddPost.tsx';
import AboutMe from '../AboutMe/AboutMe.tsx';
import Contacts from '../Contacts/Contacts.tsx';
import Home from '../Home/Home.tsx';
import { useEffect, useState } from 'react';
import { IPostsItem } from '../../types';
import axiosApi from '../../axiosApi.ts';

const App = () => {
  const [posts, setPosts] = useState<IPostsItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editId, setEditId] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      axiosApi.get('/posts.json').then((response) => {
        if (response.data !== null) {
          const newPosts = Object.keys(response.data).map((id) => ({ id, ...response.data[id] }));
          setPosts(newPosts);
        }
      });
    }
    setEditId('');
    setIsLoaded(true);
  }, [isLoaded]);

  const toggleIsLoaded = () => {
    if (isLoaded) {
      setIsLoaded((prevState) => !prevState);
    }
  };

  const deletePost = async (key: string) => {
    const id = `/posts/${key}.json`;
    try {
      await axiosApi.delete(id);
      setPosts((prevPosts) => {
        const newPosts = [...prevPosts];
        return newPosts.filter((post) => post.id !== key);
      });
      navigate('/');
    } catch (error) {
      console.log(`Deleting post with id:${id} cause and error:${error}`);
    }
  };

  const editPost = (key: string) => {
    setEditId(key);
  };
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">MyBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="add-post">
                  Add post
                </NavLink>
                <NavLink className="nav-link" to="about-me">
                  About me
                </NavLink>
                <NavLink className="nav-link" to="contacts">
                  Contacts
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="pt-3">
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/:id" element={<Home posts={posts} onDelete={deletePost} onEdit={editPost} />} />
            <Route path="/add-post" element={<AddPost loadNewPost={toggleIsLoaded} editId={editId} />} />
            <Route path="/:id/edit" element={<AddPost loadNewPost={toggleIsLoaded} editId={editId} />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
