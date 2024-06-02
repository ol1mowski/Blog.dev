import PostSite from "@/components/Pages/PostSite/PostSite.logic";
import HamburgerMenu from "@/components/UI/Header/HamburgerMenu/HamburgerMenu.contextWrapper";

function page() {
  return (
    <>
      <PostSite />
      <HamburgerMenu />
    </>
  );
}

export default page;
