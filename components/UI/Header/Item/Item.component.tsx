import Link from "next/link";
import s from "./Item.component.module.scss";

function Item({
  href,
  value,
  type,
}: {
  href: string;
  value: string;
  type: "outpage" | "onpage";
}) {
  return (
    <>
      {type === "onpage" ? (
        <a href={href}>
          <li className={s.item}>{value}</li>
        </a>
      ) : (
        <Link href={href}>
          <li className={s.item}>{value}</li>
        </Link>
      )}
    </>
  );
}

export default Item;
