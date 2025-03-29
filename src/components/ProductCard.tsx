
import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  fallbackImage: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, fallbackImage, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image,
      fallbackImage
    });
  };
  
  return (
    <div 
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link to={`/producto/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
              e.currentTarget.onerror = null;
            }}
          />
        </Link>
        
        {/* Etiqueta de categoría */}
        <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
        
        {/* Botones de acción */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-2 px-2 flex justify-center space-x-3 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <button 
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
            aria-label="Agregar al carrito"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
          </button>
          <Link 
            to={`/producto/${id}`}
            className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
            aria-label="Ver detalles"
          >
            <Eye size={16} />
          </Link>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/producto/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2 hover:text-gray-700">{name}</h3>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold">₡{price.toLocaleString()}</span>
          <button 
            className="bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition-colors"
            aria-label="Comprar ahora"
            onClick={handleAddToCart}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
