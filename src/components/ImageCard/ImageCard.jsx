import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={onClick} className={css.card} style={{ cursor: "pointer" }}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={css.cardImage}
        sizes="400px"
      />
    </div>
  );
}
