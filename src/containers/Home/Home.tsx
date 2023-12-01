import Posts from '../../components/Posts/Posts.tsx';
import { useEffect, useRef, useState } from "react";
import { IPostsItem } from '../../types';
import PostsItem from '../../components/Posts/PostsItem.tsx';
import axiosApi from '../../axiosApi.ts';

const Home = () => {
  const [posts, setPosts] = useState<IPostsItem[]>([]);
  const isLoaded = useRef(false)

  useEffect(() => {
    if (isLoaded.current){
    axiosApi
      .get('/posts.json')
      .then((response) => {
        const newPosts = Object.keys(response.data).map((id)=>({id, ...response.data[id]}))
        setPosts(prevState => [...prevState, ...newPosts])
      });
    }
    isLoaded.current=true
  }, []);

  return (
    <>
      <Posts>
        {posts.map((item) => (
          <PostsItem key={item.id} date={item.date} title={item.title} text={item.text} id={item.id} />
        ))}
      </Posts>
    </>
  );
};

export default Home;
