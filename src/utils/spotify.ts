import { type TrackData } from "./types";

// Fetch Spotify token from Clerk API
export const fetchSpotifyToken = async (url: string) => {
  const res = await fetch(url);
  const data = (await res.json()) as { token: string };

  return data.token;
};

export const getSpotifyAccessToken = async (userId: string) => {
  try {
    const response = await fetch(
      `https://api.clerk.com/v1/users/${userId}/oauth_access_tokens/oauth_spotify`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY as string}`,
        },
      }
    );

    const data = (await response.json()) as Array<{ token: string }>;
    const token = data?.[0]?.token as string;

    return { token };
  } catch (error: unknown) {
    console.error(
      "Exception occurred while fetching Spotify Access Token",
      error
    );
    return null;
  }
};

export const fetchTracks = async (url: string, token: string) => {
  const res = await fetch(`${url}?token=${token}`);
  const data = (await res.json()) as TrackData[];

  if (data.length <= 0) {
    console.error("No tracks found in your Spotify history.");
    return [];
  }

  return data;
};
