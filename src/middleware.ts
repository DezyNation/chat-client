import { ACTIVE_VERSION, CLIENT_URL, JWT_SECRET } from "@/constants";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "./utils/verifyToken";
import userAxiosInstance from "./utils/userAxiosInstance";

// Middleware function to verify the access token
export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const sessionToken = req.cookies.get("sessionToken")?.value;

  const isVerified =
    accessToken &&
    sessionToken &&
    (await verifyJwtToken(accessToken).catch((err) => {
      console.log(err);
    }));

  userAxiosInstance.defaults.headers.common["x-session-token"] = sessionToken;

  if (
    isVerified &&
    (req.url?.includes("/login") || req.url?.includes("/register"))
  ) {
    return NextResponse.redirect(`${CLIENT_URL}/v1/app`);
  }

  if (!isVerified && req.url?.includes(`/${ACTIVE_VERSION}/app`)) {
    return NextResponse.redirect(`${CLIENT_URL}/login`);
  }
}

export const config = {
  matcher: ["/login", "/register", "/v1/app"],
};
