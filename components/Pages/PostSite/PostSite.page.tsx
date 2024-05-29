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
import TableOfContents from "@/components/UI/TableOfContents/TableOfContents.component";
import PostArticle from "@/components/UI/PostArticle/PostArticle.component";
import { POSTS_CONTENT } from "./PostContent.data";

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
        <TableOfContents />
        { POSTS_CONTENT.map(item => <PostArticle key={item.id} slug={item.slug} title={item.title} description={item.description} />) }
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
    </section>
  );
}

export default PostSite;
