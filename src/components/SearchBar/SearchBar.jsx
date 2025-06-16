import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const photo = form.elements.photo.value;

    if (form.elements.photo.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    onSearch(photo);
    form.reset();
  };

  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="photo"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
}
