import css from "./ImageCard.module.css";
import { OpenModalType } from "../App/App.types";

type ImageCardProps = {
  image: ImageProps;
  onImageClick: OpenModalType;
};

type ImageProps = {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
};

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  const { urls, alt_description } = image;
  return (
    <div style={{ cursor: "pointer" }}>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        sizes="400px"
        onClick={() => onImageClick(urls.regular, alt_description)}
      />
    </div>
  );
}
