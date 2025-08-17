export type Image = {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
};

export type OpenModalType = (imageUrl: string, alt: string | null) => void;
