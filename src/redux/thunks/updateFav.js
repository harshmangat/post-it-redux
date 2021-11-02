import axiosInstance from "../../apis/axiosInstance";

export const updateFav = (data) => async (dispatch) => {
  const { id, favourite } = data;

  const postData = {
    favourite: !favourite,
  };

  await axiosInstance.put(`/Post/${id}`, postData);
};
