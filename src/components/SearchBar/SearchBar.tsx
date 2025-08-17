import css from "./SearchBar.module.css";
import { FormEvent } from "react";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      e.currentTarget.elements.namedItem("search") as HTMLInputElement
    ).value.trim();

    if (value === "") {
      return toast.error("Write the request");
    }

    onSearch(value);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
}
