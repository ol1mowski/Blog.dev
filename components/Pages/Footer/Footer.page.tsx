import s from "./Footer.page.module.scss";

import Image from "next/image";

import blogLogo from "@/assets/logo.svg";

import ytIcon from "@/assets/yt_icon.svg";
import linkedinIcon from "@/assets/linkedin_icon.svg";
import githubIcon from "@/assets/github_icon.svg";

function Footer() {
  return (
    <footer className={s.container}>
      <section className={s.container__logoSection}>
        <Image
          className={s.container__logoSection__img}
          src={blogLogo}
          alt="Blog's logo"
        />
      </section>
      <section className={s.container__linksSection}>
        <section className={s.container__linksSection__linksWrapper}>
          <div
            className={s.container__linksSection__linksWrapper__sectionHeader}
          >
            <h3
              className={
                s.container__linksSection__linksWrapper__sectionHeader__header
              }
            >
              Linki
            </h3>
          </div>
          <div
            className={
              s.container__linksSection__linksWrapper__sectionElementsWrapper
            }
          >
            <ul
              className={
                s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems
              }
            >
              <li
                className={
                  s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                }
              >
                Oferty Pracy
              </li>
              <li
                className={
                  s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                }
              >
                Kursy IT
              </li>
              <li
                className={
                  s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                }
              >
                Ksiązki IT
              </li>
            </ul>
          </div>
        </section>
        <section className={s.container__linksSection__linksWrapper}>
          <div
            className={s.container__linksSection__linksWrapper__sectionHeader}
          >
            <h3
              className={
                s.container__linksSection__linksWrapper__sectionHeader__header
              }
            >
              Prywatność
            </h3>
          </div>
          <div
            className={
              s.container__linksSection__linksWrapper__sectionElementsWrapper
            }
          >
            <ul
              className={
                s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems
              }
            >
              <li
                className={
                  s.container__linksSection__linksWrapper__sectionElementsWrapper__listItems__item
                }
              >
                Polityka Prywatności
              </li>
            </ul>
          </div>
        </section>
        <section className={s.container__linksSection__linksWrapper}>
          <div
            className={s.container__linksSection__linksWrapper__sectionHeader}
          >
            <h3
              className={
                s.container__linksSection__linksWrapper__sectionHeader__header
              }
            >
              Znajdź Mnie
            </h3>
          </div>
          <div
            className={
              s.container__linksSection__linksWrapper__sectionElementsWrapper
            }
          >
            <Image
              className={s.container__logoSection__img}
              src={ytIcon}
              alt="YouTube Icon"
              width={50}
              height={50}
            />
            <Image
              className={s.container__logoSection__img}
              src={linkedinIcon}
              alt="LinkedIn Icon"
              width={50}
              height={50}
            />
            <Image
              className={s.container__logoSection__img}
              src={githubIcon}
              alt="GitHub icon"
              width={50}
              height={50}
            />
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
