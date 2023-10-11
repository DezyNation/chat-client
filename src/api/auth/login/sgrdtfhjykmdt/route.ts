// pages/api/auth/session/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Parse the request body to get user login data
      const { username, password } = req.body;

      // Send a POST request to the backend API for user login using the Axios instance
      const response = await axiosInstance.post('/auth/session/login', {
        username,
        password,
      });

      // If the login is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle login errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
