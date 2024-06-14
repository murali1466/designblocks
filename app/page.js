import FooterContent from "@/src/components/Footer/page";
import HeadercContent from "@/src/components/Header/page";
import HeroContent from "@/src/content/HeroSection/page";
import OurProcessContent from "@/src/content/OurProcess/page";
import OurValues from "@/src/content/OurValues/page";
import ProductsContent from "@/src/content/Products/page";
import WelcomeContent from "@/src/content/WelcomeContent/page";

export default function Home() {
  return (
    <>
      <HeadercContent />
      <HeroContent />
      <WelcomeContent />
      <ProductsContent />
      <OurValues />
      <OurProcessContent />
      <FooterContent />
    </>
  );
}
