// utils/userAxiosInstance.ts

import { API_BASE_URL } from "@/constants";
import axios from "axios";

// Create a new Axios instance
const localAxiosInstance = axios.create({
  withCredentials: true
});

export default localAxiosInstance;
