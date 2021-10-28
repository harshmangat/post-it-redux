import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    FETCH_POSTS(state, action) {
      state.posts = action.payload;
    },

    ADD_POST(state, action) {
      state.posts = [action.payload, ...state.posts];
    },

    SHOW_FAV(state, action) {
      if (action.type === "SHOW") {
        return [...state.posts, action.payload];
      }
    },
  },
});

export const { FETCH_POSTS, ADD_POST, SHOW_FAV } = postSlice.actions;

export default postSlice.reducer;
