import css from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({ isOpen, onRequestClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      contentLabel="Image details"
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.modalImage}
      />
      {image.alt_description && (
        <p className={css.imageDescription}>{image.alt_description}</p>
      )}
      {image.user && (
        <p className={css.imageAuthor}>Author: {image.user.name}</p>
      )}
      <button onClick={onRequestClose} className={css.closeButton}>
        X
      </button>
    </Modal>
  );
}
