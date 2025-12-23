import { Section } from "@/components/layout/section";
import { Accordion, AccordionItemProps } from "@/components/ui/accordion";

const faqItems: AccordionItemProps[] = [
  {
    question: "Como funciona o serviço de coleta e entrega?",
    answer: "Você agenda um horário pelo site ou WhatsApp, nós coletamos suas roupas na sua casa, lavamos com todo cuidado e devolvemos limpas e dobradas em até 48h. Tudo sem você sair de casa!",
  },
  {
    question: "Qual é a área de cobertura do serviço?",
    answer: "Atualmente atendemos toda a região metropolitana de São Paulo. Se você não tem certeza se atendemos sua área, entre em contato conosco pelo WhatsApp que verificaremos para você.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito, débito, PIX e dinheiro. O pagamento pode ser feito online no momento do agendamento ou na entrega das roupas limpas.",
  },
  {
    question: "E se minha roupa for danificada durante a lavagem?",
    answer: "Temos seguro completo para todas as peças. No caso improvável de dano, você será reembolsado pelo valor da peça. Tratamos cada roupa com máximo cuidado e atenção.",
  },
  {
    question: "Posso agendar coletas recorrentes?",
    answer: "Sim! Oferecemos serviço de assinatura para coletas semanais ou quinzenais. É ideal para quem quer praticidade e não se preocupar com lavanderia.",
  },
  {
    question: "Como funciona o serviço Express 24h?",
    answer: "No plano Premium, garantimos entrega em até 24 horas. Basta agendar até às 10h da manhã que entregamos no dia seguinte no mesmo horário. Perfeito para emergências!",
  },
];

export const FaqSection = () => {
  return (
    <Section variant="gray" id="faq">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading font-bold mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços. Não encontrou o que procura? Entre em contato!
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion items={faqItems} />
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-600 mb-4">
          Ainda tem dúvidas?
        </p>
        <button className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-semibold">
          Entre em contato conosco →
        </button>
      </div>
    </Section>
  );
};
