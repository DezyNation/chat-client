// pages/api/channels/removeMemberFromGroup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for group-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      // Get the target group ID and member ID from the query parameters
      const targetGroupId = req.query.target as string;
      const memberUserId = req.query.member as string;

      // Send a DELETE request using the userAxiosInstance to remove the member from the group
      const response = await userAxiosInstance.delete(`/channels/${targetGroupId}/recipients/${memberUserId}`);

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
