// pages/api/channels/fetchGroupMembers.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for group-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Get the target group ID from the query parameters
      const targetGroupId = req.query.target as string;

      // Send a GET request using the userAxiosInstance to fetch the members of the group
      const response = await userAxiosInstance.get(`/channels/${targetGroupId}/members`);

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
