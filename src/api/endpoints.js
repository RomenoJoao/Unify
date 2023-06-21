import axiosInstance from "./axiosinstance";

async function getAllContent() {
  const response = await axiosInstance.get("/conteudo/");
  return response;
}

export default {
  getAllContent,
};
