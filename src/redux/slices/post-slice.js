import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fav: true,
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
      
     console.log(action.payload)
    let postIndex =  state.posts.indexOf((item)=> item.id === action.payload.id )
     
      state.posts[postIndex].favourite = true;
      
      
  
    },

    ShowFav(state) {
      state.fav = !state.fav
      
    },
  },
});

export const { FETCH_POSTS, ADD_POST, AddToFav, ShowFav } = postSlice.actions;

export default postSlice.reducer;
