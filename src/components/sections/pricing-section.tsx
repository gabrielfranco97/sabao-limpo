import { Section } from "@/components/layout/section";
import { PricingCard } from "@/components/ui/card";

const plans = [
  {
    plan: "Básico",
    price: "R$ 15/kg",
    features: [
      "Lavagem completa",
      "Secagem profissional",
      "Dobra das peças",
      "Entrega em até 48h",
      "Coleta grátis",
    ],
    ctaText: "Escolher Básico",
  },
  {
    plan: "Completo",
    price: "R$ 25/kg",
    features: [
      "Tudo do Básico",
      "Passadoria inclusa",
      "Embalagem premium",
      "Entrega em até 36h",
      "Suporte prioritário",
      "Tratamento anti-manchas",
    ],
    featured: true,
    ctaText: "Escolher Completo",
  },
  {
    plan: "Premium",
    price: "R$ 40/kg",
    features: [
      "Tudo do Completo",
      "Express 24h",
      "Coleta e entrega agendada",
      "Lavagem ecológica",
      "Produtos importados",
      "Garantia estendida",
    ],
    ctaText: "Escolher Premium",
  },
];

export const PricingSection = () => {
  return (
    <Section variant="gray" id="precos">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading font-bold mb-4">
          Planos e Preços
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Escolha o plano ideal para suas necessidades. Sem mensalidade, pague apenas pelo que usar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            featured={plan.featured}
            ctaText={plan.ctaText}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-600">
          Tem dúvidas sobre qual plano escolher?{" "}
          <a href="#" className="text-teal-500 hover:text-teal-600 font-semibold">
            Fale com a gente
          </a>
        </p>
      </div>
    </Section>
  );
};
