import Image from "next/image";
import s from "./PostCardComponent.component.module.scss";

import postImage from "@/assets/background_image.jpg";
import authorImage from "@/assets/background_image.jpg";

function PostCardComponent() {
  return (
    <div className={s.postCard}>
      <div className={s.postCard__imageSection}>
        <Image
          className={s.postCard__imageSection__img}
          src={postImage}
          alt="post image"
          width={300}
          height={200}
        />
      </div>
      <div className={s.postCard__contentSection}>
        <h3
          className={s.postCard__contentSection__title}
        >
          Jak Technologia zmienia branże IT ?
        </h3>
        <p
          className={
            s.postCard__contentSection__description
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>

      <div className={s.postCard__authorSection}>
        <Image
          className={s.postCard__authorSection__avatar}
          src={authorImage}
          alt="author photo"
          width={45}
          height={45}
        />
        <span
          className={s.postCard__authorSection__name}
        >
          Oliwier Markieiwcz
        </span>
        <div
          className={s.postCard__authorSection__dot}
        ></div>
        <span
          className={s.postCard__authorSection__date}
        >
          20 Maj 2024
        </span>
      </div>
    </div>
  );
}

export default PostCardComponent;
