import s from "./Header.component.module.scss";

import hamburger from "@/assets/hamburger.svg";
import Image, { type StaticImageData } from "next/image";
import Button from "../Button/Button.component";

function Header({ logo }: { logo: StaticImageData }) {
  return (
    <header className={s.headerWrapper}>
      <section className={s.headerWrapper__logoSection}>
        <Image
          className={s.headerWrapper__logoSection__img}
          src={logo}
          alt="Blog's logo"
          width={150}
          height={150}
        />
      </section>

      <section className={s.headerWrapper__hamburgerMenu}>
        <Image
          src={hamburger}
          alt="Hamburger menu icon"
          width={30}
          height={30}
        />
      </section>

      <section className={s.headerWrapper__menuList}>
        <section className={s.headerWrapper__menuList__linksWrapper}>
          <ul
            className={
              s.headerWrapper__menuList__linksWrapper__links
            }
          >
            <li
              className={
                s.headerWrapper__menuList__linksWrapper__links__link
              }
            >
              Home
            </li>
            <li
              className={
                s.headerWrapper__menuList__linksWrapper__links__link
              }
            >
              Posty
            </li>
            <li
              className={
                s.headerWrapper__menuList__linksWrapper__links__link
              }
            >
              Portfolio
            </li>
            <li
              className={
                s.headerWrapper__menuList__linksWrapper__links__link
              }
            >
              Newsletter
            </li>
          </ul>
        </section>
        <section className={s.headerWrapper__menuList__findJob}>
          <Button type="normal" />
        </section>
      </section>
    </header>
  );
}

export default Header;
