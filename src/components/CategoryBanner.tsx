
import { Link } from "react-router-dom";

const categories = [
  {
    id: "relojes-caballeros",
    name: "Relojes para caballeros",
    image: "/category-smartwatch.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1617043786394-ae5c9b8d0b7b?q=80&w=1470&auto=format&fit=crop",
    description: "Elegantes relojes para el hombre moderno"
  },
  {
    id: "relojes-dama",
    name: "Relojes de dama",
    image: "/category-accessories.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1581467655410-0321260f29b7?q=80&w=1470&auto=format&fit=crop",
    description: "Sofisticados diseños para la mujer actual"
  },
  {
    id: "audifonos-inalambricos",
    name: "Audífonos inalámbricos",
    image: "/category-gadgets.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1501&auto=format&fit=crop",
    description: "Experiencia de sonido sin cables"
  },
  {
    id: "carros-coleccion",
    name: "Carros de colección",
    image: "/category-gadgets.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1000&auto=format&fit=crop",
    description: "Modelos a escala de gran detalle"
  },
  {
    id: "motos-coleccion",
    name: "Motos de colección",
    image: "/category-gadgets.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1558981403-c5f9c76492be?q=80&w=1000&auto=format&fit=crop",
    description: "Réplicas de motocicletas legendarias"
  },
  {
    id: "cargadores-inalambricos",
    name: "Cargadores inalámbricos",
    image: "/category-gadgets.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1603539444875-76e7684265f6?q=80&w=1000&auto=format&fit=crop",
    description: "Carga tus dispositivos sin cables"
  },
  {
    id: "smartwatches-hombres",
    name: "Relojes inteligentes hombres",
    image: "/category-smartwatch.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
    description: "Tecnología avanzada para tu muñeca"
  },
  {
    id: "smartwatches-dama",
    name: "Relojes inteligentes Dama",
    image: "/category-smartwatch.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
    description: "Estilo y funcionalidad en cada momento"
  }
];

const CategoryBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Categorías</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
