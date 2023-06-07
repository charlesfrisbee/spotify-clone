import { clerkClient } from "@clerk/nextjs";
import { type RequestLike } from "@clerk/nextjs/dist/types/server/types";
import { getAuth } from "@clerk/nextjs/server";
import { type NextApiRequest } from "next";

export const getUser = async (req: NextApiRequest) => {
  const { userId } = getAuth(req as RequestLike);
  const user = userId ? await clerkClient.users.getUser(userId) : null;

  return user;
};
