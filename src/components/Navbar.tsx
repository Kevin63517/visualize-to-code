
import { useState } from "react";
import { Menu, ShoppingCart, Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo y menú hamburguesa */}
        <div className="flex items-center">
          <button 
            className="lg:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <Menu size={28} />
          </button>
          <Link to="/" className="text-2xl md:text-3xl font-bold tracking-widest">
            <img 
              src="/lovable-uploads/09c0a864-ea0a-4708-aa4f-56f75d33826b.png" 
              alt="MYTIENDACR Logo" 
              className="h-10 md:h-12 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-logo.png";
                e.currentTarget.onerror = null;
              }}
            />
          </Link>
        </div>
        
        {/* Menú de navegación - versión escritorio */}
        <div className="hidden lg:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors">Inicio</Link>
          <div className="relative group">
            <button className="flex items-center hover:text-gray-300 transition-colors">
              Productos <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <div className="py-1">
                <Link to="/categoria/smartwatches" className="block px-4 py-2 hover:bg-gray-100">Smartwatches</Link>
                <Link to="/categoria/accesorios" className="block px-4 py-2 hover:bg-gray-100">Accesorios</Link>
                <Link to="/categoria/gadgets" className="block px-4 py-2 hover:bg-gray-100">Gadgets</Link>
              </div>
            </div>
          </div>
          <Link to="/nosotros" className="hover:text-gray-300 transition-colors">Nosotros</Link>
          <Link to="/contacto" className="hover:text-gray-300 transition-colors">Contacto</Link>
        </div>
        
        {/* Redes sociales y WhatsApp */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a href="https://facebook.com/mytiendacr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/mytiendacr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com/@mytiendacr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="TikTok">
              <Twitter size={20} />
            </a>
          </div>
          <div className="flex items-center text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-sm font-medium">8358-4993</span>
          </div>
          <Link to="/carrito" className="ml-4">
            <ShoppingCart size={24} />
          </Link>
        </div>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 lg:hidden">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
                aria-label="Cerrar menú"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <Link to="/" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link to="/categoria/smartwatches" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Smartwatches</Link>
              <Link to="/categoria/accesorios" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Accesorios</Link>
              <Link to="/categoria/gadgets" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Gadgets</Link>
              <Link to="/nosotros" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
              <Link to="/contacto" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
              <Link to="/carrito" className="py-3 text-xl hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Carrito</Link>
              
              <div className="flex space-x-6 mt-8">
                <a href="https://facebook.com/mytiendacr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors" aria-label="Facebook">
                  <Facebook size={28} />
                </a>
                <a href="https://instagram.com/mytiendacr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors" aria-label="Instagram">
                  <Instagram size={28} />
                </a>
                <a href="https://tiktok.com/@mytiendacr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="TikTok">
                  <Twitter size={28} />
                </a>
              </div>
              
              <div className="flex items-center mt-6 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-lg font-medium">8358-4993</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
