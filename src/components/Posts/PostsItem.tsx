import { IPostsItem } from "../../types";
import { FC } from "react";

const PostsItem: FC<IPostsItem> = ({title,text,date}) => {
  return (
    <div>
      <div className="d-flex">
        <span className="me-auto">{title}</span>
        <span>{date}</span>
      </div>
      <p>
        {text}
      </p>
    </div>
  );
};

export default PostsItem;