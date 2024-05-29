import s from "./PostArticle.component.module.scss";
import Caption from "../Caption/Caption.component";

function PostArticle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className={s.postContentSection}>
      <Caption type="sub" value={title} />
      <p className={s.postContentSection__text}>{description}</p>
    </section>
  );
}

export default PostArticle;
