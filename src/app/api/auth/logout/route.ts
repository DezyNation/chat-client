// pages/api/auth/session/logout.ts

import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosError } from "axios";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Send a POST request to the backend API for user logout using the Axios instance
    const response = await axiosInstance.post("/auth/session/logout");

    // If the logout is successful, send back the response from the backend
    return new Response(JSON.stringify(response?.data), { status: response?.status });
  } catch (e) {
    // Handle logout errors and throw them as AxiosError
    const error = e as AxiosError;
    return new Response(JSON.stringify(error?.response?.data), { status: error?.response?.status || 500 });
  }
}
