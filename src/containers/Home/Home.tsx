import Posts from '../../components/Posts/Posts.tsx';
import { FC } from 'react';
import { IHome } from '../../types';
import PostsItem from '../../components/Posts/PostsItem.tsx';

const Home: FC<IHome> = ({ posts, onDelete, onEdit }) => {
  return (
    <>
      <Posts>
        {posts.map((item) => (
          <PostsItem
            key={item.id}
            date={item.date}
            title={item.title}
            text={item.text}
            id={item.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </Posts>
    </>
  );
};

export default Home;
