import Image from "next/image";
import s from "./YTSection.module.scss";

import ytImage from '@/assets/yt.svg';

function YTSection() {
  return (
    <section className={s.container}>
      <section className={s.container__contentSection}>
        <h1 className={s.container__contentSection__title}>
          Odwiedź mój kanał na 
          <span className={s.container__contentSection__ytSpan}> YouTube</span>
        </h1>
        <p className={s.container__contentSection__description}>
          Znajdziesz tu konkretne informacje o pracy w branży IT,
          najnowocześniejsze rozwiązania w branży, praktyczne porady i wiele
          więcej.
        </p>
        <button className={s.container__contentSection__btn}>Odwiedź</button>
      </section>
      <section className={s.container__imageSection}>
        <Image className={s.container__imageSection__img} src={ytImage} alt="" width={300} height={300} />
      </section>
    </section>
  );
}

export default YTSection;
