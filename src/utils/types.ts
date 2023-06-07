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

type PlaylistItem = {
  name: string;
  id: string;
  images: { url: string }[];
};

export type PlaylistData = {
  href: string;
  items: PlaylistItem[];
};
