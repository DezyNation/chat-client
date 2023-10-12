// pages/api/user/fetchMutualFriendsAndServers.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Get the user ID from the query parameters
      const userId = req.query.id as string;

      // Send a GET request using the userAxiosInstance to fetch mutual friends and servers
      const response = await userAxiosInstance.get(`/users/${userId}/mutual`);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not GET
    res.status(405).end();
  }
};
