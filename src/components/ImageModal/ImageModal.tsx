// import css from "./ImageModal.module.css";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

// type UnsplashImage = {
//   urls?: {
//     regular?: string;
//   };
//   alt_description?: string | null;
//   user?: {
//     name?: string;
//   };
// };

// type ImageModalProps = {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   image: UnsplashImage | null;
// };

// export default function ImageModal({
//   isOpen,
//   onRequestClose,
//   image,
// }: ImageModalProps) {
//   console.log(image);

//   if (!image) return null;
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className={css.modalContent}
//       overlayClassName={css.modalOverlay}
//       contentLabel="Image details"
//     >
//       {image.urls?.regular && (
//         <img
//           src={image.urls.regular}
//           alt={image.alt_description ?? ""}
//           className={css.modalImage}
//         />
//       )}

//       {image.alt_description && (
//         <p className={css.imageDescription}>{image.alt_description}</p>
//       )}

//       {image.user?.name && (
//         <p className={css.imageAuthor}>Author: {image.user.name}</p>
//       )}

//       <button onClick={onRequestClose} className={css.closeButton}>
//         X
//       </button>
//     </Modal>
//   );
// }

import Modal from "react-modal";

const customStyles: {
  overlay: React.CSSProperties;
  content: React.CSSProperties;
} = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999999",
    backgroundColor: "rgba(45, 45, 45, 0.3)",
    backdropFilter: "blur(5px)",
  },
  content: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0",
    padding: 0,
    width: "800px",
    height: "fit-content",
    opacity: 1,
    backgroundColor: "black",
    color: "white",
    inset: 0,
  },
};

Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  src: string;
  alt: string;
};

const ImageModal = ({ isOpen, onRequestClose, src, alt }: ImageModalProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={src} alt={alt} />
      </Modal>
    </div>
  );
};

export default ImageModal;
