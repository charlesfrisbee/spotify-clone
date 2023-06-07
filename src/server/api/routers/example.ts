import { getAuth } from "@clerk/nextjs/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getSpotifyAccessToken } from "~/utils/spotify";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input, ctx }) => {
      const { userId } = getAuth(ctx.req);

      const token = await getSpotifyAccessToken(userId as string);

      const response = await fetch(
        "https://api.spotify.com/v1/users/bnazlizeynep/playlists",
        {
          headers: {
            Authorization: `Bearer ${token?.token as string}`,
          },
        }
      );

      const data: unknown = await response.json();

      console.log(data);

      return {
        greeting: `Hello ${userId as string}`,
      };
    }),
});
