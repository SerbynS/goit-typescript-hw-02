import css from "./SearchBar.module.css";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Будь ласка, введіть текст для пошуку зображень.");
      return;
    }
    onSearch(input.trim());
    setInput("");
  };

  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
}
