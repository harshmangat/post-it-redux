import { AddToFav, ShowFav } from "../slices/post-slice";

export const ShowFavourite = (show) => (dispatch) => {
  
  console.log(show)
  return dispatch(ShowFav())
};


export const addToFav = () => (dispatch) =>{
  
  return dispatch(AddToFav())
}