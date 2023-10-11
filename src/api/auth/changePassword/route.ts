// pages/api/auth/changePassword.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      // Parse the request body to get current_password and password
      const { current_password, password } = req.body;

      // Send a PATCH request to the backend API to change the password
      const response = await axiosInstance.patch('/auth/account/change-password', {
        current_password,
        password,
      });

      // If the password change is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle password change errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not PATCH
    res.status(405).end();
  }
};
