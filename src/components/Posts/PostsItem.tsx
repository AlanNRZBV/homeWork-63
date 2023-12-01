import { IPostsItem } from '../../types';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const PostsItem: FC<IPostsItem> = ({ title, text, date, id, onDelete, onEdit }) => {
  const [fullPost, setFullPost] = useState(false);

  const unwrapHandler = () => {
    setFullPost((prevState) => !prevState);
  };

  const deleteHandler = () => {
    if (onDelete) {
      if (id) {
        onDelete(id);
      }
    }
  };

  const editHandler = () => {
    if (onEdit) {
      if (id) {
        onEdit(id);
      }
    }
  };

  const confirm = () => {
    setFullPost((prevState) => !prevState);
  };

  return (
    <div className="border border-1 rounded-3 py-3 px-3 mb-3 shadow-sm">
      <div className="d-flex border-bottom border-1 pb-2 mb-3">
        <span className="me-3 text-primary">{title}</span>
        <span className="text-secondary me-auto">{date}</span>
        {fullPost ? (
          <div>
            <Link onClick={editHandler} to={'/' + id + '/edit'} className="btn btn-outline-warning me-3">
              Edit
            </Link>
            <button onClick={deleteHandler} className="btn btn-outline-danger" type="button">
              Delete
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      {fullPost ? (
        <div>
          <p>{text}</p>
          <Link onClick={confirm} to={'/'} className="btn btn-outline-secondary">
            Close
          </Link>
        </div>
      ) : (
        <Link onClick={unwrapHandler} to={'/' + id}>
          Read more
        </Link>
      )}
    </div>
  );
};

export default PostsItem;
