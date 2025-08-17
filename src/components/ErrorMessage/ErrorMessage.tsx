import css from "./ErrorMessage.module.css";

type ErorProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErorProps) {
  return (
    <div className={css.errorMessage}>
      <p>Сталася помилка: {message || "Щось пішло не так..."}</p>
      <p>
        Будь ласка, спробуйте ще раз пізніше або перевірте ваше
        інтернет-з'єднання.
      </p>
    </div>
  );
}
