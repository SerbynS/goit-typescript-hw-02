import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <>
      <div className={css.buttonContainer}>
        {}
        <button className={css.loadMoreButton} type="button" onClick={onClick}>
          Load more
        </button>
      </div>
    </>
  );
}
