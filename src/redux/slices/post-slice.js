import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fav: true,
  addFav: false,
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
      state.addFav = false;
      state.fav = [action.payload.objectId, ...state.fav]
     
    },

    ShowFav(state, action) {
      state.fav = !state.fav
      state.fav= action.payload
    },
  },
});

export const { FETCH_POSTS, ADD_POST, AddToFav, ShowFav } = postSlice.actions;

export default postSlice.reducer;
