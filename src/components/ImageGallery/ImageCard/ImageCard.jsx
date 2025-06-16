import css from "./ImageCard.module.css";

export default function ImageCard({ item: { urls, description } }) {
  return (
    <div>
      <img src={urls.small} alt={description} sizes="400px" />
    </div>
  );
}
