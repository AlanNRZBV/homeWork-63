import { IPostsItem } from '../../types';
import { FC, useState } from "react";

const PostsItem: FC<IPostsItem> = ({ title, text, date, onUnwrap, id, onDelete }) => {
  const [fullPost, setFullPost]=useState(false)

  const postUnwrapper = () => {
    if (onUnwrap) {
      onUnwrap(id);
      setFullPost(prevState => !prevState)
    }
  };

  const deleteHandler =()=>{
    if (onDelete){
      onDelete(id);
    }
  }

  const confirm = ()=>{
    setFullPost(prevState => !prevState)
  }

  return (
    <div className="border border-1 rounded-3 py-3 px-3 mb-3 shadow-sm">
      <div className="d-flex border-bottom border-1 pb-2 mb-3">
        <span className="me-3 text-primary">{title}</span>
        <span className="text-secondary me-auto">{date}</span>
        {fullPost ? (
          <div>
            <button className="btn btn-outline-warning me-3" type="button">
              Edit
            </button>
            <button onClick={deleteHandler} className="btn btn-outline-danger" type="button">
              Delete
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      {fullPost ? (<div>
        <p>{text}</p>
          <button onClick={confirm} className="btn btn-outline-success" type="button">Confirm</button>
        </div>
      ) : (
        <button onClick={postUnwrapper} className="btn btn-outline-secondary" type="button">
          Read more
        </button>
      )}
    </div>
  );
};

export default PostsItem;
