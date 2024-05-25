import Footer from "@/components/UI/Footer/Footer.component.page";
import Header from "@/components/UI/Header/Header.component.page";
import logo from "@/assets/logo_black.svg";

function page() {
  return (
    <>
      <Header logo={logo} />

      <Footer />
    </>
  );
}

export default page;
