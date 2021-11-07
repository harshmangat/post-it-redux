import "./App.css";
import "./components/PostIt.css";

import PostForm from "./components/PostForm";
import PostCard from "./components/PostCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchData } from "./redux/thunks/FetchData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const posts = useSelector((state) => state.list.posts);
  const show = useSelector((state) => state.list.fav);
  const isLoading = useSelector((state) => state.list.isLoading);

  return (
    <>
      <PostForm />

      {isLoading && <h4 className="loading">Loading New Post..</h4>}

      {posts.length <= 0 && (
        <div className="no-post">
          <h1>no post yet!</h1>
        </div>
      )}

      {show
        ? posts.map((post) => (
            <PostCard
              key={post.objectId}
              title={post.title}
              text={post.description}
              url={post.image}
              category={post.category}
              favourite={post.favourite}
              id={post.objectId}
              delete={post.delete}
            />
          ))
        : posts
            .filter((item) => item.favourite === true)
            .map((post) => (
              <PostCard
                key={post.objectId}
                title={post.title}
                text={post.description}
                url={post.image}
                category={post.category}
                favourite={post.favourite}
                id={post.objectId}
                delete={post.delete}
              />
            ))}
    </>
  );
}

export default App;
