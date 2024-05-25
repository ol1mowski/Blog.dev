import Caption from "@/components/UI/Caption/Caption.component";
import Header from "../../UI/Header/Header.component.page";
import s from "./HomePage.page.module.scss";

import logo from "@/assets/logo.svg";
import Description from "@/components/UI/Description/Description.component";

function HomePage() {
  return (
    <section className={s.container}>
      <Header logo={logo} />
      <section className={s.container__content}>
        <section className={s.container__contentSection}>
          <span className={s.container__contentSection__category}>React</span>
          <Caption
            type="main"
            value="Jak zacząć się uczyć React w 2024 roku ?"
          />
          <Description
            value="Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o tematyce
      tworzenia stron internetowych. Koniecznie musisz je znać"
          />
          <button className={s.container__contentSection__btn}>Czytaj</button>
        </section>
      </section>
    </section>
  );
}

export default HomePage;
