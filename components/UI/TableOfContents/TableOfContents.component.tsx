'use client'

import { useEffect, useRef, useState } from "react";
import s from "./TableOfContents.component.module.scss";

function TableOfContents() {
  const header = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const handleScroll = () => {
    if (header.current) {
      if (scrollY > 610 && scrollY < 1800) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={header}
      className={` ${isSticky ? s.tableOfContents_sticky : s.tableOfContents}`}
    >
      <h3 className={s.tableOfContents__caption}>Spis Treści</h3>
      <ul className={s.tableOfContents__listItems}>
        <li
          className={`${s.tableOfContents__listItems__item} ${s.tableOfContents__listItems__item_active}`}
        >
          Co to jest React ?
        </li>
        <li className={s.tableOfContents__listItems__item}>
          Czy warto go używać ?
        </li>
        <li className={s.tableOfContents__listItems__item}>
          Najważniejsze Informacje
        </li>
      </ul>
    </section>
  );
}

export default TableOfContents;
