import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import fetchData from "../../API";
import { Toaster } from "react-hot-toast";

import { useState, useEffect } from "react";
import type { Image, OpenModalType } from "./App.types";

import css from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        // setError(false);
        const data = await fetchData(query, page);
        const { results, total_pages, total } = data;
        setTotal(total_pages);

        if (total === 0) {
          setError(
            "No images found for this query. Please try a different one."
          );
        }

        setImages((prev: Image[]) => [...prev, ...results]);
      } catch {
        setError("There was an error fetching the images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
    setTotal(0);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal: OpenModalType = (src, alt) => {
    setModalImage({ src, alt: alt ?? "No description" });
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const isLastPage = page === total;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleOpenModal} />
      )}
      {images.length > 0 && !isLastPage && <LoadMoreBtn onClick={handleMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        src={modalImage?.src ?? ""}
        alt={modalImage?.alt ?? ""}
      />
    </>
  );
}

//  return (
//    <div>
//      <SearchBar onSearch={handleSubmit} />
//      <ImageGallery onImageClick={openModal} images={photos} />
//      {loading && <Loader />}
//      {error && (
//        <ErrorMessage message={`Something went wrong! ${error.message}`} />
//      )}
//      {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
//      <ImageModal
//        src={imageModal?.src ?? ""}
//        alt={imageModal?.alt ?? ""}
//        isOpen={modalIsOpen}
//        onRequestClose={closeModal}
//      />
//    </div>
//  );
