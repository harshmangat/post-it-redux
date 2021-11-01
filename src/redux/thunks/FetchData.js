import axiosInstance from "../../apis/axiosInstance";

import { FETCH_POSTS } from "../slices/post-slice";

/*<====FETCH DATA FROM API====> */
export const fetchData = () => async (dispatch) => {
  let response = await axiosInstance.get("/Post/?order=-createdAt");

  // console.log(response.data.results)
  // response = response.data;
  return dispatch(FETCH_POSTS(response.data.results));
};
