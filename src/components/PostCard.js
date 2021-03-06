import { useDispatch } from "react-redux";
import { ToggleFav, delete_Post } from "../redux/slices/post-slice";

import { updateFav } from "../redux/thunks/updateFav";
import { deletePost } from "../redux/thunks/delete-action";

import "./PostIt.css";
import toast, { Toaster } from 'react-hot-toast';

const PostCard = (props) => {
  const dispatch = useDispatch();
  const notify = () => toast(props.favourite ?  ('You Uniked It'): ('You Liked It!'));


  return (
    <div className="post">
      <img className="img" src={props.url} alt="books" />
      <h1 className="imgTitle">{props.title}</h1>
      <div className="para">
        <p className="text">{props.text}</p>
      </div>
      <button className="category">{props.category}</button>

      <button
        className="favIcon"
        onClick={() => {
          dispatch(ToggleFav(props.id),notify());
          dispatch(updateFav({ id: props.id, favourite: props.favourite }));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={props.favourite ? "red" : "gray"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <button
        className="delete"
        onClick={() => {
          dispatch(delete_Post(props.id));
          dispatch(deletePost({ id: props.id }));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
      <Toaster />
    </div>
  );
};

export default PostCard;
