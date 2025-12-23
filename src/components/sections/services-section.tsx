import { Section } from "@/components/layout/section";
import { ServiceCard } from "@/components/ui/card";
import { Waves, Shirt, Truck, Zap } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Lavagem Completa",
    description: "Lavagem, secagem e dobra profissional das suas roupas com produtos de qualidade.",
  },
  {
    icon: Shirt,
    title: "Passadoria",
    description: "Passagem profissional para deixar suas roupas impecáveis e prontas para usar.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Coleta e entrega grátis na sua casa. Agende pelo app e relaxe.",
  },
  {
    icon: Zap,
    title: "Express",
    description: "Precisa com urgência? Entregamos suas roupas limpas em até 24 horas.",
  },
];

export const ServicesSection = () => {
  return (
    <Section variant="gray" id="servicos">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading font-bold mb-4">
          Nossos Serviços
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Oferecemos soluções completas para cuidar das suas roupas com praticidade e qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
};
