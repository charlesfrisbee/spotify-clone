import { getAuth } from "@clerk/nextjs/server";
import { users } from "@clerk/clerk-sdk-node";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getSpotifyAccessToken } from "~/utils/spotify";
import { type PlaylistData, TrackData } from "~/utils/types";

export const spotifyRouter = createTRPCRouter({
  playlists: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input, ctx }) => {
      // console.log(ctx.user);

      const token = await getSpotifyAccessToken(ctx.user?.id as string);

      // const user = await users.getUser(userId as string);

      // console.log(user);

      const response = await fetch(
        `https://api.spotify.com/v1/users/bnazlizeynep/playlists`,
        {
          headers: {
            Authorization: `Bearer ${token?.token as string}`,
          },
        }
      );

      const data = (await response.json()) as PlaylistData;

      // console.log(data);

      return data;
    }),
});
