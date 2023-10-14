"use client";

import { useState } from "react";
import userAxiosInstance from "@/utils/userAxiosInstance";
import useApiHandler from "./useApiHandler";
import axios from "axios";

const useMessage = () => {
  const [messages, setMessages] = useState([]);
  const { handleError } = useApiHandler();

  const sendMessage = async (channelId: string, messageContent: any) => {
    try {
      const response = await userAxiosInstance.post(
        `/channels/${channelId}/messages`,
        { content: messageContent }
      );
      setMessages([...messages, response.data]);
    } catch (error) {
      handleError(error, "Failed to send the message");
    }
  };

  const fetchChannelMessages = async (channelId: string) => {
    try {
      const response = await userAxiosInstance.get(
        `/channels/${channelId}/messages`
      );
      setMessages(response.data);
    } catch (error) {
      handleError(error, "Failed to fetch channel messages");
    }
  };

  const searchMessages = async (channelId: string) => {
    try {
      const response = await userAxiosInstance.get(
        `/channels/${channelId}/messages/search?query=${query}`
      );
      setMessages(response.data);
    } catch (error) {
      handleError(error, "Failed to search for messages");
    }
  };

  const acknowledgeMessage = async (channelId: string, messageId: string) => {
    try {
      await userAxiosInstance.put(
        `/channels/${channelId}/ack/${messageId}`
      );
    } catch (error) {
      handleError(error, "Failed to acknowledge the message");
    }
  };

  const deleteSingleMessage = async (channelId: string, messageId: string) => {
    try {
      await userAxiosInstance.delete(
        `/channels/${channelId}/messages/${messageId}`
      );
      // Remove the deleted message from the local state
      setMessages(messages.filter((message) => message?.id !== messageId));
    } catch (error) {
      handleError(error, "Failed to delete the message");
    }
  };

  const deleteBulkMessages = async (
    channelId: string,
    messageIds: string[]
  ) => {
    try {
      await userAxiosInstance.delete(
        `/channels/${channelId}/messages/bulk`,
        { data: { ids: messageIds } }
      );
      // Remove the deleted messages from the local state
      setMessages(
        messages.filter((message) => !messageIds.includes(message.id))
      );
    } catch (error) {
      handleError(error, "Failed to delete multiple messages");
    }
  };

  return {
    messages,
    sendMessage,
    fetchChannelMessages,
    searchMessages,
    acknowledgeMessage,
    deleteSingleMessage,
    deleteBulkMessages,
  };
};

export default useMessage;
