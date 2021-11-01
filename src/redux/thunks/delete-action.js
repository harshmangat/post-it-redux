import axiosInstance from "../../apis/axiosInstance";

export const deletePost = (data) => async (dispatch) => {
  const { id } = data;
  

  const postData = {
    objectId: id,
  };

  let res = await axiosInstance.delete(`/Post/${id}`, postData);
  console.log(res)
};
