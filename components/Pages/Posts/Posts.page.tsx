import PostCardComponent from "./PostCardComponent/PostCardComponent.component";
import s from "./Posts.page.module.scss";

function Posts() {
  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <h2 className={s.container__header__content}>Ostatnie Posty</h2>
      </section>

      <section className={s.container__postsWrapper}>
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
        <PostCardComponent />
      </section>
      <section className={s.container__button}>
        <button className={s.container__button__btn}>Więcej</button>
      </section>
    </section>
  );
}

export default Posts;
