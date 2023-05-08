interface Thumbnail {
  path: string;
  extension: string;
};

export interface Agent {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
};
