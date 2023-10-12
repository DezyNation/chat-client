// pages/api/user/blockUser.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      // Get the user ID from the query parameters
      const userId = req.query.id as string;

      // Send a DELETE request using the userAxiosInstance to block the user
      const response = await userAxiosInstance.delete(`/users/${userId}/block`);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not PUT
    res.status(405).end();
  }
};
