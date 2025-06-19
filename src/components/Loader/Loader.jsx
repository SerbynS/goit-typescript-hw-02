import css from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <>
      <div className={css.loaderContainer}>
        <ClipLoader color="#36d7b7" /> {}
      </div>
    </>
  );
}
