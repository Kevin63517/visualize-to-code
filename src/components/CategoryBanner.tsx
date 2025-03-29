
import { Link } from "react-router-dom";

const categories = [
  {
    id: "smartwatches",
    name: "Smartwatches",
    image: "/category-smartwatch.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1617043786394-ae5c9b8d0b7b?q=80&w=1470&auto=format&fit=crop",
    description: "Relojes inteligentes de última generación"
  },
  {
    id: "accesorios",
    name: "Accesorios",
    image: "/category-accessories.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1581467655410-0321260f29b7?q=80&w=1470&auto=format&fit=crop",
    description: "Complementa tus dispositivos electrónicos"
  },
  {
    id: "gadgets",
    name: "Gadgets",
    image: "/category-gadgets.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1501&auto=format&fit=crop",
    description: "Dispositivos innovadores para el día a día"
  }
];

const CategoryBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Categorías</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/categoria/${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-lg h-64"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = category.fallbackImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="opacity-80 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
