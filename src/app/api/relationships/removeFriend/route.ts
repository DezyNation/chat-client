// pages/api/user/deleteFriendRequest.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      // Get the request ID from the query parameters
      const id = req.query.id as string;

      // Send a DELETE request using the userAxiosInstance to delete the friend request
      const response = await userAxiosInstance.delete(`/users/${id}/friend`);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not DELETE
    res.status(405).end();
  }
};
