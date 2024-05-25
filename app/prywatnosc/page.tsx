import Footer from "@/components/UI/Footer/Footer.component.page";
import Header from "@/components/UI/Header/Header.component.page";
import logo from "@/assets/logo_black.svg";
import Privacy from "@/components/Pages/Privacy/Privacy.page";

function page() {
  return (
    <>
      <Header logo={logo} />
      <Privacy />
      <Footer />
    </>
  );
}

export default page;
