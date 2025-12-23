import { Section } from "@/components/layout/section";
import { TestimonialCard } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Serviço impecável! As roupas voltam sempre limpas e cheirosas. O melhor é não precisar sair de casa. Super recomendo!",
    name: "Maria Silva",
    location: "São Paulo, SP",
  },
  {
    quote: "Uso o serviço express toda semana. Sempre pontuais e as roupas ficam perfeitas. Atendimento nota 10!",
    name: "João Santos",
    location: "Campinas, SP",
  },
  {
    quote: "Economizo tanto tempo! A qualidade da lavagem é excelente e o preço é justo. Virei cliente fiel.",
    name: "Ana Costa",
    location: "Santos, SP",
  },
];

export const TestimonialsSection = () => {
  return (
    <Section id="depoimentos">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading font-bold mb-4">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Mais de 500 clientes confiam no Sabão Limpo para cuidar das suas roupas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            location={testimonial.location}
          />
        ))}
      </div>

      {/* Rating Summary */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-6 py-3 rounded-full">
          <span className="text-2xl font-bold">4.9</span>
          <div className="text-left">
            <div className="text-yellow-500">★★★★★</div>
            <div className="text-sm">Baseado em 200+ avaliações</div>
          </div>
        </div>
      </div>
    </Section>
  );
};
