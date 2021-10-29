import axiosInstance from "../../apis/axiosInstance";

import { FETCH_POSTS, ADD_POST } from "../slices/post-slice";

/*<====FETCH DATA====> */
export const fetchData = () => async (dispatch) => {
  let response = await axiosInstance.get("/Post/?order=-createdAt");

  // response = response.data;
  return dispatch(FETCH_POSTS(response.data.results));
};

/*<====POST DATA====> */
export const postData = (data) => async (dispatch) => {
  let response = await axiosInstance.post("/Post", data);

  const newPostId = response.data.objectId;
  const fetchNewPost = await axiosInstance.get(`/Post/${newPostId}`);

  return dispatch(ADD_POST(fetchNewPost.data));
};
