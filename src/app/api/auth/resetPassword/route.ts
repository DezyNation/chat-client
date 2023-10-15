// pages/api/auth/account/resetPassword.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      // Parse the request body to get the token, password, and remove_sessions
      const { token, password, remove_sessions = false } = req.body;

      // Send a PATCH request to the backend API to reset the password
      const response = await axiosInstance.patch('/auth/account/reset_password', {
        token,
        password,
        remove_sessions,
      });

      // If the password reset is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle password reset errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not PATCH
    res.status(405).end();
  }
};
