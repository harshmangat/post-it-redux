import axiosInstance from "../../apis/axiosInstance";

export const deletePost = (data) => async () => {
  const { id } = data;

  await axiosInstance.delete(`/Post/${id}`);
};
