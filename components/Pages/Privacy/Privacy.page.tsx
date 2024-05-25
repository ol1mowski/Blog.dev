import Caption from "@/components/UI/Caption/Caption.component";
import s from "./Privacy.page.module.scss";
import Description from "@/components/UI/Description/Description.component";

function Privacy() {
  return (
    <section className={s.container}>
      <Caption type="sub" value="Polityka Prywatności" />
      <Description value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam maxime praesentium temporibus laboriosam debitis ab non delectus voluptatibus dicta fugiat magnam sunt, possimus sapiente deserunt fugit, cupiditate laudantium? Debitis?" />
    </section>
  );
}

export default Privacy;
