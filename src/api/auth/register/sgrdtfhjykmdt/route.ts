// pages/api/auth/account/create.ts

import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import axiosInstance from "@/utils/axiosInstance";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // Parse the request body to get user registration data
      const { username, password, email } = req.body;

      // Send a POST request to the backend API with type annotations
      const response = await axiosInstance.post<{ user: any }>("auth/account/create", {
        username,
        password,
        email,
      });

      // If the registration is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle registration errors
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
