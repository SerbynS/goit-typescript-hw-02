import ImageCard from "../ImageCard/ImageCard";
import { Image, OpenModalType } from "../App/App.types";

import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Image[];
  onImageClick: OpenModalType;
};

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
