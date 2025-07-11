import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import fetchData from "../../API";

import { useState, useEffect } from "react";

import css from "./App.module.css";

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageModal, setImageModal] = useState({});

  function openModal(photo) {
    setImageModal(photo);
    setIsOpen(true);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!search) {
      return;
    }
    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await fetchData(search, page);
        if (response.data.total === 0) {
          toast("There is no matches by your query!");
          return;
        }
        setPhotos((prev) => [...prev, ...response.data.results]);
        setHasMorePhotos(page < response.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPhotos();
  }, [search, page]);

  const handleSubmit = (query) => {
    setSearch(query);
    setPage(1);
    setPhotos([]);
    setError(null);
    setHasMorePhotos(false);
  };

  console.log(photos);
  return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      <ImageGallery onImageClick={openModal} images={photos} />
      {loading && <Loader />}
      {error && (
        <ErrorMessage message={`Something went wrong! ${error.message}`} />
      )}
      {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        image={imageModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
}
