import React from "react";
import "./PostIt.css";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import { postData } from "../redux/thunks/PostData";
import { ShowFavourite } from "../redux/thunks/Favourite";

const PostForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  return (
    <header id="header">
      <h1 className="heading">POST IT</h1>
      <form
        id="form"
        onSubmit={handleSubmit((data) =>
          dispatch(
            postData({
              title: data.title,
              description: data.description,
              image: data.image,
              category: data.category,
              favourite: data.favourite,
            }), reset()
            )
            )}
            
      >
        <input id="title" placeholder="Title" {...register("title")} /> <br />
        <textarea
          id="paragraph"
          cols="20"
          rows="3"
          placeholder="Enter Your Text"
          max="180"
          {...register("description")}
        ></textarea>{" "}
        <br />
        <input
          type="url"
          id="url"
          placeholder="Enter Image URL"
          {...register("image")}
        />
        <input
          type="text"
          id="category"
          placeholder="Category"
          {...register("category")}
        />{" "}
        <br />
        <button id="post" type="submit">
          Post It
        </button>
      </form>
      <button id="favourite" onClick={() => dispatch(ShowFavourite())}>Favourite</button>
    </header>
  );
};

export default PostForm;
