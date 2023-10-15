// pages/api/auth/account/passwordResetRequest.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Parse the request body to get email and captcha
      const { email, captcha } = req.body;

      // Send a POST request to the backend API to request a password reset link
      const response = await axiosInstance.post('/auth/account/reset_password', {
        email,
        captcha,
      });

      // If the password reset request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle password reset request errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
