import Image from "next/image";
import s from "./HomePage.page.module.scss";

import logo from "@/assets/logo.svg";
import hamburger from '@/assets/hamburger.svg';

function HomePage() {
  return (
    <section className={s.container}>
      <header className={s.container__headerWrapper}>
        <section className={s.container__headerWrapper__logoSection}>
          <Image className={s.container__headerWrapper__logoSection__img} src={logo} alt="Blog's logo" width={150} height={150} />
        </section>

        <section className={s.container__headerWrapper__hamburgerMenu}>
            <Image src={hamburger} alt="Hamburger menu icon" width={30} height={30}/>
        </section>

        <section className={s.container__headerWrapper__menuList}>
          <section className={s.container__headerWrapper__menuList__linksWrapper}>
            <ul className={s.container__headerWrapper__menuList__linksWrapper__links}>
              <li className={s.container__headerWrapper__menuList__linksWrapper__links__link}>
                Home
              </li>
              <li className={s.container__headerWrapper__menuList__linksWrapper__links__link}>
                Posty
              </li>
              <li className={s.container__headerWrapper__menuList__linksWrapper__links__link}>
                Portfolio
              </li>
              <li className={s.container__headerWrapper__menuList__linksWrapper__links__link}>
                Newsletter
              </li>
            </ul>
          </section>
          <section className={s.container__headerWrapper__menuList__findJob}>
            <button className={s.container__headerWrapper__menuList__findJob__btn}>
              Oferty Pracy
            </button>
          </section>
        </section>
      </header>

      <section className={s.container__contentSection}>
        <div className={s.container__contentSection__item}>
          <span className={s.container__contentSection__item__category}>
            React
          </span>
        </div>
        <div className={s.container__contentSection__item}>
          <h1 className={s.container__contentSection__item__title}>
            Jak zacząć się uczyć React w 2024 roku ?
          </h1>
        </div>
        <div className={s.container__contentSection__item}>
          <p className={s.container__contentSection__item__dscription}>
            Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o tematyce
            tworzenia stron internetowych. Koniecznie musisz je znać
          </p>
        </div>
        <div className={s.container__contentSection__item}>
          <button className={s.container__contentSection__item__btn}>
            Czytaj
          </button>
        </div>
      </section>
    </section>
  );
}

export default HomePage;
