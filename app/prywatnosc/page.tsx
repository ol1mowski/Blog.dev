import Header from "@/components/UI/Header/Header.component.page";
import logo from "@/assets/logo_black.svg";
import Privacy from "@/components/Pages/Privacy/Privacy.page";
import hamburger from '@/assets/hamburger_black.svg';
import HamburgerMenu from "@/components/UI/Header/HamburgerMenu/HamburgerMenu.contextWrapper";

function page() {
  return (
    <>
      <Header logo={logo} hamburger={hamburger}/>
      <HamburgerMenu />
      <Privacy />
    </>
  );
}

export default page;
