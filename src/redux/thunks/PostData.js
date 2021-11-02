import { ADD_POST, set_loading } from "../slices/post-slice";

import axiosInstance from "../../apis/axiosInstance";

/*<====POST DATA In API====> */
export const postData = (data) => async (dispatch) => {
  
    dispatch(set_loading(true))
    let response = await axiosInstance.post("/Post", data);
 
    const newPostId = response.data.objectId;
    const fetchNewPost = await axiosInstance.get(`/Post/${newPostId}`);
    
    dispatch(set_loading(false))
    return dispatch(ADD_POST(fetchNewPost.data));
  
};
