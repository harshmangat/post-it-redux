import "./App.css";
import "./components/PostIt.css";

import PostForm from "./components/PostForm";
import PostCard from "./components/PostCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchData } from "./redux/thunks/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const posts = useSelector((state) => state.list.posts);

  return (
    <>
      <PostForm />
      {posts.length <= 0 ? (
        <h4 className="loading">Loading...</h4>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.objectId}
            title={post.title}
            text={post.description}
            url={post.image}
            category={post.category}
          />
        ))
      )}
    </>
  );
}

export default App;
