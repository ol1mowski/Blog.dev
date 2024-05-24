import s from "./Footer.page.module.scss";

import Image from "next/image";

import blogLogo from "@/assets/logo.svg";

function Footer() {
  return (
    <footer>
      <section>
        <Image src={blogLogo} alt="Blog's logo" />
      </section>
      <section>
        <section>
          <div></div>
          <div></div>
        </section>
        <section>
          <div></div>
          <div></div>
        </section>
        <section>
          <div></div>
          <div></div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
