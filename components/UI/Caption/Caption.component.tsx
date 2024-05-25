import s from "./Caption.component.module.scss";

function CaptionMain({ value, type }: { value: string; type: "main" | "sub" }) {
  return (
    <>
      {type === "main" ? (
        <h1 className={s.title}>{value}</h1>
      ) : (
        <h2 className={s.title}>{value}</h2>
      )}
    </>
  );
}

export default CaptionMain;
