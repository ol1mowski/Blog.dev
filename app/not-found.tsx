import hamburger from "@/assets/hamburger_black.svg";
import headerLogo from "@/assets/logo_black.svg";
import NotFound from "@/components/Pages/NotFound/NotFound.page";
import Footer from "@/components/UI/Footer/Footer.component.page";
import Header from "@/components/UI/Header/Header.component.page";

function notFound() {
  return (
    <>
      <Header logo={headerLogo} hamburger={hamburger} />
      <NotFound />
      <Footer />
    </>
  );
}

export default notFound;
