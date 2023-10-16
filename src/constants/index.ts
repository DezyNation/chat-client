export const AUTH_RANDOM_STRING = "sgrdtfhjykmdt";
export const API_BASE_URL =
  "https://revolt.krishnaconsciousnesssociety.com/api";
export const CLIENT_URL =
  process.env.NODE_ENV == "production"
    ? "https://chat-client.vercel.app"
    : "http://localhost:3000";
export const JWT_SECRET = process.env.JWT_SECRET;
export const MAX_AGE = 60 * 60 * 24 * 30;
export const ACTIVE_VERSION = "v1";
