import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import PricingSection from "@/components/Home/price/PricingSection";
import { Reviews } from "@/components/Home/Review";

export default function Home() {
  return (
    <div>
      <Hero />
      <PricingSection/>
      <Reviews />
      <Footer />
    </div>
  );
}
