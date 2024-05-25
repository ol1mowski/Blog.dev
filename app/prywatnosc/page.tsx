import Footer from "@/components/UI/Footer/Footer.page";
import Header from "@/components/UI/Header/Header.page";
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
