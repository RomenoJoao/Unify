import axiosInstance from "./axiosinstance";

async function getAllContent() {
  const response = await axiosInstance.get("/conteudo/");
  return response;
}

async function uploadFiles(files) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));
  const response = await axiosInstance.post("/file", formData);
  return response.data;
}

async function createContent(data) {
  await axiosInstance.post("/conteudo", data);
}

export default {
  getAllContent,
  uploadFiles,
  createContent,
};
