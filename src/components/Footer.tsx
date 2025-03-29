
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/09c0a864-ea0a-4708-aa4f-56f75d33826b.png" 
                alt="MYTIENDACR Logo" 
                className="h-12"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-logo.png";
                  e.currentTarget.onerror = null;
                }}
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Tu tienda de tecnología en Costa Rica. Ofrecemos smartwatches, accesorios y gadgets de la más alta calidad.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/mytiendacr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/mytiendacr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@mytiendacr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="/politicas" className="text-gray-400 hover:text-white transition-colors">Políticas de Privacidad</Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>
          
          {/* Categorías */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/smartwatches" className="text-gray-400 hover:text-white transition-colors">Smartwatches</Link>
              </li>
              <li>
                <Link to="/categoria/accesorios" className="text-gray-400 hover:text-white transition-colors">Accesorios</Link>
              </li>
              <li>
                <Link to="/categoria/gadgets" className="text-gray-400 hover:text-white transition-colors">Gadgets</Link>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400">8358-4993</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <a href="mailto:info@mytiendacr.com" className="text-gray-400 hover:text-white transition-colors">
                  info@mytiendacr.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">
                  San José, Costa Rica <br />
                  Local 123, Centro Comercial
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MYTIENDACR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
