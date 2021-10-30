import { ADD_POST } from "../slices/post-slice";

import axiosInstance from "../../apis/axiosInstance";

/*<====POST DATA In API====> */
export const postData = (data) => async (dispatch) => {
  let response = await axiosInstance.post("/Post", data);

  const newPostId = response.data.objectId;
  const fetchNewPost = await axiosInstance.get(`/Post/${newPostId}`);

  return dispatch(ADD_POST(fetchNewPost.data));
};
