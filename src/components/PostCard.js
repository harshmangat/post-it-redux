import { useDispatch } from "react-redux";
import { addToFav } from "../redux/thunks/Favourite";
import "./PostIt.css";

const PostCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="post">
      <img className="img" src={props.url} alt="books" />
      <h1 className="imgTitle">{props.title}</h1>
      <div className="para">
        <p className="text">{props.text}</p>
      </div>
      <button className="category">{props.category}</button>
      <button className="favIcon" onClick={() => dispatch(addToFav())}>
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default PostCard;
