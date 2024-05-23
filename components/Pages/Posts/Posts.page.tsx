import Image from "next/image";
import s from "./Posts.page.module.scss";

import postImage from '@/assets/background_image.jpg';
import authorImage from '@/assets/background_image.jpg';

function Posts() {
  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <h2 className={s.container__header__content}>Ostatnie Posty</h2>
      </section>
      
      <section className={s.container__postsWrapper}>
        <div className={s.container__postsWrapper__postCard}>
          <div className={s.container__postsWrapper__postCard__imageSection}>
            <Image
              className={s.container__postsWrapper__postCard__imageSection__img}
              src={postImage}
              alt="post image"
              width={300}
              height={200}
            />
          </div>
          <div className={s.container__postsWrapper__postCard__contentSection}>
            <h3 className={s.container__postsWrapper__postCard__contentSection__title}>Jak Technologia zmienia branże IT ? </h3>
            <p className={s.container__postsWrapper__postCard__contentSection__description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div className={s.container__postsWrapper__postCard__authorSection}>
            <Image className={s.container__postsWrapper__postCard__authorSection__avatar} src={authorImage} alt="author photo" width={45} height={45} />
            <span className={s.container__postsWrapper__postCard__authorSection__name}>Oliwier Markieiwcz</span>
            <div className={s.container__postsWrapper__postCard__authorSection__dot}></div>
            <span className={s.container__postsWrapper__postCard__authorSection__date}>20 Maj 2024</span>
          </div>
        </div>
      </section>
      <section className={s.container__button}>
        <button className={s.container__button__btn}>Więcej</button>
      </section>
    </section>
  );
}

export default Posts;
