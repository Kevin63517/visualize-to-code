
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronRight, ShoppingCart, Heart, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

// Datos de productos (en una aplicación real vendrían de una API o base de datos)
const products = [
  {
    id: "1",
    name: "Smartwatch Serie X Pro",
    price: 48000,
    images: [
      "/smartwatch1.jpg",
      "/smartwatch1-2.jpg",
      "/smartwatch1-3.jpg"
    ],
    fallbackImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop",
    category: "Smartwatch",
    description: "El Smartwatch Serie X Pro es un reloj inteligente avanzado que combina estilo y funcionalidad. Con una pantalla táctil de alta resolución, monitoreo de frecuencia cardíaca, seguimiento de actividad física y notificaciones inteligentes, este reloj es perfecto para quienes buscan mantenerse conectados y monitorear su salud en todo momento.",
    features: [
      "Pantalla táctil AMOLED de 1.3 pulgadas",
      "Resistente al agua (5 ATM)",
      "Monitoreo de frecuencia cardíaca 24/7",
      "Seguimiento de pasos, calorías y sueño",
      "Batería de larga duración (hasta 7 días)",
      "Compatible con iOS y Android"
    ],
    stock: 15,
    colors: ["Negro", "Plata", "Oro"]
  },
  {
    id: "2",
    name: "Reloj Inteligente Deportivo",
    price: 35000,
    images: [
      "/smartwatch2.jpg",
      "/smartwatch2-2.jpg",
      "/smartwatch2-3.jpg"
    ],
    fallbackImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop",
    category: "Smartwatch",
    description: "El Reloj Inteligente Deportivo está diseñado para atletas y entusiastas del fitness. Con GPS integrado, monitores avanzados de salud y más de 20 modos deportivos, este reloj te ayudará a llevar tu entrenamiento al siguiente nivel.",
    features: [
      "GPS integrado",
      "Más de 20 modos deportivos",
      "Monitoreo de oxígeno en sangre (SpO2)",
      "Resistente al agua (10 ATM)",
      "Pantalla táctil de alta resolución",
      "Batería de hasta 14 días"
    ],
    stock: 10,
    colors: ["Negro", "Azul", "Verde"]
  }
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  
  // Buscar el producto por ID
  const product = products.find(p => p.id === productId);
  
  // Si el producto no existe, mostrar mensaje
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p className="mb-8">Lo sentimos, el producto que estás buscando no existe o ha sido eliminado.</p>
          <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Volver a la tienda
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  // Función para incrementar la cantidad
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // Función para decrementar la cantidad
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center text-sm">
              <a href="/" className="text-gray-600 hover:text-black">Inicio</a>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <a href={`/categoria/${product.category.toLowerCase()}`} className="text-gray-600 hover:text-black">{product.category}</a>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>
        
        {/* Producto detalle */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Galería de imágenes */}
              <div>
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = product.fallbackImage;
                      e.currentTarget.onerror = null;
                    }}
                  />
                </div>
                
                {/* Miniaturas */}
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`rounded overflow-hidden border-2 ${
                        selectedImage === index ? "border-black" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image}
                        alt={`${product.name} - vista ${index + 1}`}
                        className="w-full h-20 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = product.fallbackImage;
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Información del producto */}
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-3xl font-bold mb-6">₡{product.price.toLocaleString()}</p>
                
                <div className="mb-6">
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                {/* Selección de color */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Color</h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-4 py-2 border rounded-lg ${
                          selectedColor === color 
                            ? "border-black bg-black text-white" 
                            : "border-gray-300 hover:border-gray-500"
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Selector de cantidad */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Cantidad</h3>
                  <div className="flex items-center">
                    <button 
                      className="px-3 py-1 border border-gray-300 rounded-l-lg"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val > 0 && val <= product.stock) {
                          setQuantity(val);
                        }
                      }}
                      className="w-16 px-3 py-1 border-t border-b border-gray-300 text-center"
                      min="1"
                      max={product.stock}
                    />
                    <button 
                      className="px-3 py-1 border border-gray-300 rounded-r-lg"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Disponible: {product.stock} unidades</p>
                </div>
                
                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="flex-1 bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <ShoppingCart size={20} className="mr-2" />
                    Añadir al Carrito
                  </button>
                  <button className="flex items-center justify-center border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="flex items-center justify-center border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
                
                {/* Características */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold mb-4">Características</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Productos relacionados */}
        <ProductGrid title="Productos Relacionados" category={product.category} limit={4} />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default ProductDetail;
