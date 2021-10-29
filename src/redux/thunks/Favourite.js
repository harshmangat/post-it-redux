import { AddToFav, ShowFav } from "../slices/post-slice";

export const ShowFavourite = () => (dispatch) => {
  let show = false;
  return dispatch(ShowFav(show))
};


export const addToFav = () => (dispatch) =>{

   let addToList = false
  return dispatch(AddToFav(addToList))
}