// pages/api/channels/addMembersToGroup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      // Get the target group ID from the query parameters
      const targetGroupId = req.query.target as string;

      // Get the array of member IDs from the request body
      const memberIds = req.body.members as string[];

      // Create an array to store the responses for each member added
      const responses = [];

      // Loop through the array of member IDs and send a PUT request for each member
      for (const memberUserId of memberIds) {
        const response = await userAxiosInstance.put(`/channels/${targetGroupId}/recipients/${memberUserId}`);
        responses.push(response);
      }

      // If the requests are successful, send back the responses from the backend
      res.status(200).json(responses);
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
