
import { Shield, Truck, CreditCard, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: <Truck size={36} className="mb-4" />,
    title: "Envío a Todo el País",
    description: "Entregamos tus compras en cualquier parte de Costa Rica"
  },
  {
    icon: <Shield size={36} className="mb-4" />,
    title: "Garantía de Calidad",
    description: "Todos nuestros productos cuentan con garantía"
  },
  {
    icon: <CreditCard size={36} className="mb-4" />,
    title: "Pagos Seguros",
    description: "Múltiples métodos de pago 100% seguros"
  },
  {
    icon: <LifeBuoy size={36} className="mb-4" />,
    title: "Soporte Técnico",
    description: "Asesoramiento personalizado antes y después de tu compra"
  }
];

const FeaturesBanner = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-2">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
