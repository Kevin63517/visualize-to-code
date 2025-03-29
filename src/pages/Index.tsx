
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import CategoryBanner from "@/components/CategoryBanner";
import ProductGrid from "@/components/ProductGrid";
import FeaturesBanner from "@/components/FeaturesBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <CategoryBanner />
        <ProductGrid title="Productos Destacados" limit={8} />
        <FeaturesBanner />
        <Newsletter />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
