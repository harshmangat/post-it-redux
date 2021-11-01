import axiosInstance from "../../apis/axiosInstance";


export const updateFav = (data) => async (dispatch) => {

 const {id, favourite} = data
 

 const postData = {
   favourite: !favourite}

  let res = await axiosInstance.put(`/Post/${id}`,postData);
  
  
  console.log(res)


};
