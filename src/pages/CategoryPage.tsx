
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

// Mapeo de IDs de categoría a nombres de visualización
const categoryNames: Record<string, string> = {
  "relojes-caballeros": "Relojes para caballeros",
  "relojes-dama": "Relojes de dama",
  "audifonos-inalambricos": "Audífonos inalámbricos",
  "carros-coleccion": "Carros de colección",
  "motos-coleccion": "Motos de colección",
  "cargadores-inalambricos": "Cargadores inalámbricos",
  "smartwatches-hombres": "Relojes inteligentes hombres",
  "smartwatches-dama": "Relojes inteligentes Dama"
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryName = categoryId ? categoryNames[categoryId] || categoryId : "Categoría";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explora nuestra colección de {categoryName.toLowerCase()} de alta calidad.
              Ofrecemos los mejores precios y garantía en todos nuestros productos.
            </p>
          </div>
        </div>
        
        <ProductGrid 
          title={`Todos nuestros ${categoryName}`} 
          category={categoryName}
        />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default CategoryPage;
