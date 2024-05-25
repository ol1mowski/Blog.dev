import Footer from "@/components/Pages/Footer/Footer.page";
import Header from "@/components/Pages/Header/Header.page";
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
