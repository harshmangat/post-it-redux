import axiosInstance from "../../apis/axiosInstance";

import { AddToFav, ShowFav } from "../slices/post-slice";

/*<====FETCH FAV LIST ====>*/
export const ShowFavourite = () => async (dispatch) => {
  let response = await axiosInstance.get("/Post");

  return dispatch(ShowFav(response.data.results.favourite));
};

/*<=== UPDATE FAV LIST====> */
export const addToFav = () => async (dispatch) => {
  const updatedPostId = await axiosInstance.put("/Post/QmU57qsYEb", {
    favourite: true,
  });

  const newPostId = updatedPostId.data.objectId;
  const fetchNewPost = await axiosInstance.get(`/Post/${newPostId}`);

  return dispatch(AddToFav(fetchNewPost));
};
