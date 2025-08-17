import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
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
