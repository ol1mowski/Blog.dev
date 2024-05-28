import Image from "next/image";
import s from "./Newsletter.module.scss";

import newsletterImage from "@/assets/newsletter_image.svg";
import arrowIcon from "@/assets/arrow.png";
import Description from "@/components/UI/Description/Description.component";
import { saveClientEmail } from "@/actions/SaveClientEmail";

function Newsletter() {
  return (
    <section id="newsletter" className={s.container}>
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
        <Description
          value="Znajdziesz tu konkretne informacje o pracy w branży IT,
          najnowocześniejsze rozwiązania w branży, praktyczne porady i wiele
          więcej."
        />
        <form
          className={s.container__contentSection__form}
          action={saveClientEmail}
          method="POST"
        >
          <input
            className={s.container__contentSection__form__inp}
            type="text"
            name="email"
            placeholder="Twój email"
          />
          <button className={s.container__contentSection__form__btn}>
            <Image src={arrowIcon} alt="arrow icon" width={25} height={25} />
          </button>
        </form>
      </section>
    </section>
  );
}

export default Newsletter;
