import s from "./Header.component.module.scss";

import hamburger from "@/assets/hamburger.svg";

import Image, { type StaticImageData } from "next/image";

import { ITEMS } from "./StaticData";
import Button from "../Button/Button.component";
import Item from "./Item/Item.component";

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
          <ul className={s.headerWrapper__menuList__linksWrapper__links}>
            {ITEMS.map((item) => (
              <Item
                key={item.id}
                value={item.value}
                href={item.href}
                type={item.type}
              />
            ))}
          </ul>
        </section>
        <section className={s.headerWrapper__menuList__findJob}>
          <Button type="normal" value="Oferty Pracy" />
        </section>
      </section>
    </header>
  );
}

export default Header;
