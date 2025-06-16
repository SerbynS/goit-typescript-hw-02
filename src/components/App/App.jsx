import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { fetchArticlesWithTopic } from "../../test.js";

import { useState, useEffect } from "react";

import css from "./App.module.css";

export default function App() {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (photo) => {
    try {
      // setLoading(true);
      const data = await fetchArticlesWithTopic(photo);
      setArticles(data);
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      {" "}
      <SearchBar onSearch={handleSearch} />
      {articles.length > 0 && <ImageGallery items={articles} />}
    </>
  );
}
