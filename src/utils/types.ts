export type TrackData = {
  items: {
    track: {
      name: string;
      artists: { name: string }[];
      id: string;
      album: {
        name: string;
        images: { url: string }[];
      };
    };
  }[];
};
