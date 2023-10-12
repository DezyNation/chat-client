// pages/api/user/acceptFriendRequest.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      // Get the request ID from the query parameters
      const id = req.query.id as string;

      // Send a PUT request using the userAxiosInstance to accept the friend request
      const response = await userAxiosInstance.put(`/users/${id}/friend`);

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
