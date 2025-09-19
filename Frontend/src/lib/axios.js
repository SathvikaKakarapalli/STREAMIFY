import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  // baseURL: "https://streamify-backend-ebon.vercel.app/api",
  withCredentials: true,
});


//test
//test
//test