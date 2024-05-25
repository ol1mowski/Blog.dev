import s from "./Button.component.module.scss";

function Button({ type }: { type: 'normal' | 'yt' }) {
  return (
    <button className={type === 'yt' ? s.btn_yt : s.btn}>
      Oferty Pracy
    </button>
  );
}

export default Button;
