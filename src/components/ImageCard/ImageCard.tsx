import css from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  return (
    <div style={{ cursor: "pointer" }}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        sizes="400px"
        onClick={() => onImageClick(image)}
      />
    </div>
  );
}
