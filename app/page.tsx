import HomePage from "@/components/Pages/HomePage/HomePage.page";
import Newsletter from "@/components/Pages/Newsletter/Newsletter.page";
import Posts from "@/components/Pages/Posts/Posts.page";
import YTSection from "@/components/Pages/YTSection/YTSection.page";
import HamburgerMenu from "@/components/UI/Header/HamburgerMenu/HamburgerMenu.contextWrapper";

export default function Home() {
  return (
    <>
      <HomePage />
      <HamburgerMenu />
      <YTSection />
      <Posts />
      <Newsletter />
    </>
  );
}
