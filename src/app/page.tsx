import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Experience from "@/components/Experience";
import MenuPreview from "@/components/MenuPreview";
import SignatureDishes from "@/components/SignatureDishes";
import Ambience from "@/components/Ambience";
import Occasions from "@/components/Occasions";
import SocialGallery from "@/components/SocialGallery";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <Experience />
        <MenuPreview />
        <SignatureDishes />
        <Ambience />
        <Occasions />
        <SocialGallery />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}