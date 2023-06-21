import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosInstance = axios.create({
  baseURL: "http://localhost:3443/api",
  withCredentials: true,
});

console.log(process.env.API);

export default axiosInstance;
