import s from "./HamburgerMenu.module.scss";

import close from "@/assets/close.svg";

import Image from "next/image";

import blogImage from "@/assets/logo_black.svg";
import ScrollLink from "@/components/utils/ScrollLink.component";

type HamburgerMenuProps = {
  closeMenuHandler: () => void;
};

function HamburgerMenuComponent({ closeMenuHandler }: HamburgerMenuProps) {
  return (
    <menu className={s.hamburgerMenu}>
      <section className={s.hamburgerMenu__close}>
        <Image
          onClick={closeMenuHandler}
          className={s.hamburgerMenu__close__icon}
          width="30"
          height="30"
          src={close}
          alt="delete-sign"
        />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <ul className={s.hamburgerMenu__nav__items}>
          <ScrollLink link={"/"}>
            <li onClick={closeMenuHandler} className={s.hamburgerMenu__nav__items__item}>Home</li>
          </ScrollLink>{" "}
          <ScrollLink link={"#posts"}>
            <li onClick={closeMenuHandler} className={s.hamburgerMenu__nav__items__item}>Posty</li>
          </ScrollLink>{" "}
          <ScrollLink link={"https://oliwiermarkiewicz.netlify.app/"}>
            <li onClick={closeMenuHandler} className={s.hamburgerMenu__nav__items__item}>Portfolio</li>
          </ScrollLink>{" "}
          <ScrollLink link={"#newsletter"}>
            <li onClick={closeMenuHandler} className={s.hamburgerMenu__nav__items__item}>Newsletter</li>
          </ScrollLink>
        </ul>
      </nav>
      <section className={s.hamburgerMenu__logo}>
        <Image width={200} height={70} src={blogImage} alt="blog-image" />
      </section>
    </menu>
  );
}

export default HamburgerMenuComponent;
