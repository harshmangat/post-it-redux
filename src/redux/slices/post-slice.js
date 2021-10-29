import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fav: false,
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

    AddToFav(state, action) {
       state.fav = action.payload;
      
    },

    ShowFav(state, action) {
      if (state.fav === true) {
      return  state.fav = [action.payload, ...state.posts];
      }
    },
  },
});

export const { FETCH_POSTS, ADD_POST, AddToFav, ShowFav } = postSlice.actions;

export default postSlice.reducer;
