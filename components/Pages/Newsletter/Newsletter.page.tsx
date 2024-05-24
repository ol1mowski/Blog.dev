import Image from "next/image";
import s from "./Newsletter.module.scss";

import newsletterImage from "@/assets/newsletter_image.svg";
import arrowIcon from '@/assets/arrow.png';

function Newsletter() {
  return (
    <section className={s.container}>
      <section className={s.container__imageSection}>
        <Image
          className={s.container__imageSection__img}
          src={newsletterImage}
          alt="Newsletter image"
          width={300}
          height={300}
        />
      </section>
      <section className={s.container__contentSection}>
        <h1 className={s.container__contentSection__title}>
          Zapisz się na nasz
          <span className={s.container__contentSection__newsletterSpan}>
            {" "}
            Newsletter
          </span>
        </h1>
        <p className={s.container__contentSection__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
        <form className={s.container__contentSection__form} action="">
          <input
            className={s.container__contentSection__form__inp}
            type="text"
            name="email"
            placeholder="Twój email"
          />
          <button className={s.container__contentSection__form__btn}><Image src={arrowIcon} alt="arrow icon" width={25} height={25} /></button>
        </form>
      </section>
    </section>
  );
}

export default Newsletter;
