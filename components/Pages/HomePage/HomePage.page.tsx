import Header from "../Header/Header.page";
import s from "./HomePage.page.module.scss";

function HomePage() {
  return (
    <section className={s.container}>
      <Header />
      <section className={s.container__content}>
        <section className={s.container__contentSection}>
          <span className={s.container__contentSection__category}>React</span>
          <h1 className={s.container__contentSection__title}>
            Jak zacząć się uczyć React w 2024 roku ?
          </h1>
          <p className={s.container__contentSection__description}>
            Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o tematyce
            tworzenia stron internetowych. Koniecznie musisz je znać
          </p>
          <button className={s.container__contentSection__btn}>Czytaj</button>
        </section>
      </section>
    </section>
  );
}

export default HomePage;
