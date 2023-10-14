"use client";

import { useState } from "react";
import userAxiosInstance from "@/utils/userAxiosInstance";
import useApiHandler from "./useApiHandler";
import axios from "axios";

const useChannel = () => {
  const [channel, setChannel] = useState(null);
  const { handleError } = useApiHandler();

  const createChannel = async (channelData: any) => {
    try {
      const response = await userAxiosInstance.post(
        "/channels/create",
        channelData
      );
      setChannel(response.data);
    } catch (error) {
      handleError(error, "Failed to create a channel");
    }
  };

  const addMembers = async (channelId: string, memberId: string[]) => {
    try {
      await userAxiosInstance.put(
        `/channels/${channelId}/recipients/${memberId}`
      );
    } catch (error) {
      handleError(error, "Failed to add a member");
    }
  };

  const fetchMembers = async (channelId: string) => {
    try {
      await userAxiosInstance.delete(
        `/channels/${channelId}/recipients`
      );
    } catch (error) {
      handleError(error, "Failed to fetch members");
    }
  };

  const removeMember = async (channelId: string, memberId: string) => {
    try {
      await userAxiosInstance.delete(
        `/channels/${channelId}/recipients/${memberId}`
      );
    } catch (error) {
      handleError(error, "Failed to remove a member");
    }
  };

  return { channel, createChannel, addMembers, removeMember, fetchMembers };
};

export default useChannel;
