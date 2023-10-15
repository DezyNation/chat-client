// pages/api/channels/modifyDefaultRolePermissions.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for group-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      // Get the target group ID from the query parameters
      const targetGroupId = req.query.target as string;

      // Get the permissions object from the request body
      const permissions = req.body;

      // Send a PUT request using the userAxiosInstance to modify the default role's permissions
      const response = await userAxiosInstance.put(`/channels/${targetGroupId}/permissions/default`, permissions);

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
