import { AddToFav, ShowFav } from "../slices/post-slice";

export const ShowFavourite = (show) => (dispatch) => {
  
  console.log(show)
  return dispatch(ShowFav())
};


export const addToFav = (data) => (dispatch) =>{
  data = true
  console.log(data)
  return dispatch(AddToFav())
}