import Footer from "@/components/UI/Footer/Footer.component.page";
import HomePage from "@/components/Pages/HomePage/HomePage.page";
import Newsletter from "@/components/Pages/Newsletter/Newsletter.page";
import Posts from "@/components/Pages/Posts/Posts.page";
import YTSection from "@/components/Pages/YTSection/YTSection.page";

export default function Home() {
  return (
    <>
      <HomePage />
      <YTSection />
      <Posts />
      <Newsletter />
    </>
  );
}
