import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/price/Pricing";
import { Reviews } from "@/components/Home/Review";

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
