import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import AddPost from '../AddPost/AddPost.tsx';
import AboutMe from '../AboutMe/AboutMe.tsx';
import Contacts from '../Contacts/Contacts.tsx';
import Home from "../Home/Home.tsx";

function App() {
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
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
