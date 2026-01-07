import Hero from "../section/products/hero";
import EkhayaQualitySection from "../section/products/content";
import FarmSplitSection from "../section/products/content2";
import FarmTwoSection from "../section/products/content3";
import AnimatedGallery from "../section/products/content4";
export default function ProductsPage() {
  return (
    <main className="w-full">
      <Hero />
      <EkhayaQualitySection />
      <FarmSplitSection />
      <AnimatedGallery />
      <FarmTwoSection />
    </main>
  );
}


