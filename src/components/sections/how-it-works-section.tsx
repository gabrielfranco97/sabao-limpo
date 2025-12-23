import { Section } from "@/components/layout/section";
import { Calendar, Package, Home } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Agende",
    description: "Escolha o melhor horário para coleta através do nosso site ou WhatsApp.",
  },
  {
    icon: Package,
    number: "02",
    title: "Coletamos",
    description: "Buscamos suas roupas na sua porta no horário agendado. Sem complicação.",
  },
  {
    icon: Home,
    number: "03",
    title: "Entregamos",
    description: "Suas roupas voltam limpas, perfumadas e dobradas em até 48h.",
  },
];

export const HowItWorksSection = () => {
  return (
    <Section id="como-funciona">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading font-bold mb-4">
          Como Funciona
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Praticidade em 3 passos simples. Economize tempo e deixe a lavanderia com a gente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        {/* Connection Lines (Desktop) */}
        <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />

        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Number Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg">
              {step.number}
            </div>

            {/* Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 text-center shadow-card hover:shadow-card-hover transition-shadow pt-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-teal-500" />
                </div>
              </div>

              <h3 className="font-heading font-semibold text-xl mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="inline-flex items-center gap-2 bg-coral-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-coral-600 transition-colors text-lg">
          Começar Agora
        </button>
      </div>
    </Section>
  );
};
