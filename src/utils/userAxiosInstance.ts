// utils/userAxiosInstance.ts

import { API_BASE_URL } from "@/constants";
import axios from "axios";
import {parseCookies} from "nookies"

// Create a new Axios instance
const userAxiosInstance = axios.create({
  baseURL: API_BASE_URL
});

export default userAxiosInstance;
