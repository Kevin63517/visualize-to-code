
import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una aplicación real, aquí enviarías el email a una API
    console.log("Email suscrito:", email);
    setIsSubscribed(true);
    setEmail("");
    
    // Reiniciar el estado después de un tiempo
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };
  
  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
          <p className="text-gray-300 mb-8">
            Suscríbete a nuestro boletín para recibir las últimas novedades, ofertas exclusivas y más.
          </p>
          
          {isSubscribed ? (
            <div className="bg-green-600 text-white p-4 rounded-lg mb-8">
              ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none w-full sm:w-auto"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
