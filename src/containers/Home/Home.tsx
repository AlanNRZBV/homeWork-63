import Posts from '../../components/Posts/Posts.tsx';
import { FC} from "react";
import { IHome } from "../../types";
import PostsItem from '../../components/Posts/PostsItem.tsx';

const Home: FC<IHome> =({posts, onUnwrap,onDelete}) => {

  return (
    <>
      <Posts>
        {posts.map((item) => (
          <PostsItem key={item.id} date={item.date} title={item.title} text={item.text} id={item.id} onUnwrap={onUnwrap} onDelete={onDelete}/>
        ))}
      </Posts>
    </>
  );
};

export default Home;
