// pages/api/channels/createGroup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for group-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Parse the request body to get group data including name, description, and users
      const { name, description, users } = req.body;

      // Create an object to hold the group data
      const groupData = {
        name,
        description,
        users,
      };

      // Send a POST request using the userAxiosInstance to create the group
      const response = await userAxiosInstance.post('/channels/create', groupData);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
