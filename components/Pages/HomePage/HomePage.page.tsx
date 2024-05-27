import Caption from "@/components/UI/Caption/Caption.component";
import Header from "../../UI/Header/Header.component.page";
import s from "./HomePage.page.module.scss";

import logo from "@/assets/logo.svg";
import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";
import hamburger from "@/assets/hamburger.svg";

function HomePage() {
  return (
    <section className={s.container}>
      <Header logo={logo} hamburger={hamburger}/>
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
          <Button type="normal" value={'Czytaj'}/>
        </section>
      </section>
    </section>
  );
}

export default HomePage;
