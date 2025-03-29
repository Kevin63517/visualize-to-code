
import ProductCard from "./ProductCard";

// Datos de productos (en una aplicación real vendrían de una API o base de datos)
const products = [
  {
    id: "1",
    name: "Smartwatch Serie X Pro",
    price: 48000,
    image: "/smartwatch1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
    category: "Smartwatch"
  },
  {
    id: "2",
    name: "Reloj Inteligente Deportivo",
    price: 35000,
    image: "/smartwatch2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop",
    category: "Smartwatch"
  },
  {
    id: "3",
    name: "Auriculares Bluetooth Pro",
    price: 25000,
    image: "/earbuds.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?q=80&w=1470&auto=format&fit=crop",
    category: "Accesorios"
  },
  {
    id: "4",
    name: "Smartwatch Fitness Tracker",
    price: 42000,
    image: "/smartwatch3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544117519-cc0d9181e953?q=80&w=1374&auto=format&fit=crop",
    category: "Smartwatch"
  },
  {
    id: "5",
    name: "Cargador Inalámbrico Rápido",
    price: 12000,
    image: "/charger.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1621331938577-3e42f5cc26e3?q=80&w=1470&auto=format&fit=crop",
    category: "Accesorios"
  },
  {
    id: "6",
    name: "Smartwatch Ultra Sport",
    price: 55000,
    image: "/smartwatch4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1617043786394-ae5c9b8d0b7b?q=80&w=1470&auto=format&fit=crop",
    category: "Smartwatch"
  },
  {
    id: "7",
    name: "Drone Mini Plegable",
    price: 120000,
    image: "/drone.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=1470&auto=format&fit=crop",
    category: "Gadgets"
  },
  {
    id: "8",
    name: "Parlante Bluetooth Portátil",
    price: 28000,
    image: "/speaker.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1547930275-405fd0fcc8f8?q=80&w=1470&auto=format&fit=crop",
    category: "Accesorios"
  },
];

interface ProductGridProps {
  title: string;
  category?: string;
  limit?: number;
}

const ProductGrid = ({ title, category, limit = 8 }: ProductGridProps) => {
  // Filtrar productos por categoría si es necesario
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;
  
  // Limitar la cantidad de productos mostrados
  const displayedProducts = filteredProducts.slice(0, limit);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              fallbackImage={product.fallbackImage}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
