import s from "./PostSite.page.module.scss";

import Image from "next/image";

import Header from "@/components/UI/Header/Header.component.page";
import Caption from "@/components/UI/Caption/Caption.component";
import PostCardComponent from "@/components/Pages/Posts/PostCardComponent/PostCardComponent.component";
import Footer from "@/components/UI/Footer/Footer.component.page";

import headerLogo from "@/assets/logo_black.svg";
import authorImage from "@/assets/background_image.jpg";
import postImage from "@/assets/post_image.jpg";
import categoryIcon from "@/assets/category.svg";
import calenderIcon from "@/assets/calendar.svg";
import readingTimeIcon from "@/assets/time.svg";
import hamburger from "@/assets/hamburger_black.svg";

function PostSite() {
  return (
    <section className={s.container}>
      <Header logo={headerLogo} hamburger={hamburger} />
      <section className={s.container__imageSection}>
        <Image
          className={s.container__imageSection__img}
          src={postImage}
          alt="post image"
          height={450}
          width={800}
        />
      </section>
      <article className={s.container__content}>
        <section className={s.container__headerSection}>
          <div className={s.container__headerSection__header}>
            <Caption type="sub" value={"Jak Technologia zmienia branże IT ?"} />
          </div>
          <div className={s.container__headerSection__postInfo}>
            <Image
              src={authorImage}
              alt="author's avatar"
              width={40}
              height={40}
              className={s.container__headerSection__postInfo__avatar}
            />
            <span className={s.container__headerSection__postInfo__info}>
              Oliwier Markiewicz
            </span>
            <Image src={calenderIcon} alt="date icon" width={25} height={25} />

            <span className={s.container__headerSection__postInfo__info}>
              20 Maj 2024
            </span>
            <Image
              src={categoryIcon}
              alt="category icon"
              width={25}
              height={25}
            />

            <span className={s.container__headerSection__postInfo__info}>
              React
            </span>
            <Image
              src={readingTimeIcon}
              alt="reading time icon"
              width={25}
              height={25}
            />

            <span className={s.container__headerSection__postInfo__info}>
              5 min.
            </span>
          </div>
        </section>
        <section className={s.container__tableOfContents}>
          <h3 className={s.container__tableOfContents__caption}>Spis Treści</h3>
          <ul className={s.container__tableOfContents__listItems}>
            <li
              className={`${s.container__tableOfContents__listItems__item} ${s.container__tableOfContents__listItems__item_active}`}
            >
              Co to jest React ?
            </li>
            <li className={s.container__tableOfContents__listItems__item}>
              Czy warto go używać ?
            </li>
            <li className={s.container__tableOfContents__listItems__item}>
              Najważniejsze Informacje
            </li>
          </ul>
        </section>
        <section className={s.container__postContentSection}>
          <Caption type="sub" value={"Jak React zmienił branże IT ?"} />
          <p className={s.container__postContentSection__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            facilisis nibh sit amet lectus maximus, ac sollicitudin massa
            fermentum. Vestibulum tempus eros sed pretium convallis. Fusce eget
            pretium tortor. Nulla consectetur ligula eget felis mattis, vel
            consectetur metus venenatis. Suspendisse potenti. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque in ante eleifend mauris congue accumsan.
            Sed in ipsum malesuada, feugiat nisl nec, sagittis diam. Sed
            pulvinar tincidunt interdum. Donec blandit velit ac ante luctus,
            eget pellentesque nisl cursus. Duis convallis sollicitudin nisi, vel
            cursus nunc elementum quis. Phasellus pharetra aliquet bibendum.
            Vivamus cursus libero non consectetur ultricies.
          </p>
          <br />{" "}
          <p className={s.container__postContentSection__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            facilisis nibh sit amet lectus maximus, ac sollicitudin massa
            fermentum. Vestibulum tempus eros sed pretium convallis. Fusce eget
            pretium tortor. Nulla consectetur ligula eget felis mattis, vel
            consectetur metus venenatis. Suspendisse potenti. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque in ante eleifend mauris congue accumsan.
            Sed in ipsum malesuada, feugiat nisl nec, sagittis diam. Sed
            pulvinar tincidunt interdum. Donec blandit velit ac ante luctus,
            eget pellentesque nisl cursus. Duis convallis sollicitudin nisi, vel
            cursus nunc elementum quis. Phasellus pharetra aliquet bibendum.
            Vivamus cursus libero non consectetur ultricies.
          </p>
          <br />
          <p className={s.container__postContentSection__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            facilisis nibh sit amet lectus maximus, ac sollicitudin massa
            fermentum. Vestibulum tempus eros sed pretium convallis. Fusce eget
            pretium tortor. Nulla consectetur ligula eget felis mattis, vel
            consectetur metus venenatis. Suspendisse potenti. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Pellentesque in ante eleifend mauris congue accumsan.
            Sed in ipsum malesuada, feugiat nisl nec, sagittis diam. Sed
            pulvinar tincidunt interdum. Donec blandit velit ac ante luctus,
            eget pellentesque nisl cursus. Duis convallis sollicitudin nisi, vel
            cursus nunc elementum quis. Phasellus pharetra aliquet bibendum.
            Vivamus cursus libero non consectetur ultricies.
          </p>
        </section>
        <section className={s.container__similarPosts}>
          <Caption type="sub" value={"Podobne Posty"} />
          <div className={s.container__similarPosts__posts}>
            <PostCardComponent
              title={"Jak Technologia zmienia branże IT ?"}
              slug="jak-technologia-zmienia-branze-it"
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
              }
              author={"Oliwier Markiewicz"}
              postImage={postImage}
              authorImage={authorImage}
              date={"20 Maj 2024"}
            />
            <PostCardComponent
              title={"Jak Technologia zmienia branże IT ?"}
              slug="jak-technologia-zmienia-branze-it"
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
              }
              author={"Oliwier Markiewicz"}
              postImage={postImage}
              authorImage={authorImage}
              date={"20 Maj 2024"}
            />
            <PostCardComponent
              title={"Jak Technologia zmienia branże IT ?"}
              slug="jak-technologia-zmienia-branze-it"
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
              }
              author={"Oliwier Markiewicz"}
              postImage={postImage}
              authorImage={authorImage}
              date={"20 Maj 2024"}
            />{" "}
            <PostCardComponent
              title={"Jak Technologia zmienia branże IT ?"}
              slug="jak-technologia-zmienia-branze-it"
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
              }
              author={"Oliwier Markiewicz"}
              postImage={postImage}
              authorImage={authorImage}
              date={"20 Maj 2024"}
            />
          </div>
        </section>
      </article>

      <Footer />
    </section>
  );
}

export default PostSite;
