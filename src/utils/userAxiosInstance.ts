// utils/userAxiosInstance.ts

import { API_BASE_URL } from "@/constants";
import axios from "axios";

// Create a new Axios instance
const userAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

export default userAxiosInstance;
