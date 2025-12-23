import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const CtaSection = () => {
  return (
    <Section variant="teal">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-heading font-bold mb-6 text-white">
          Pronto para Simplificar sua Vida?
        </h2>

        <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed">
          Junte-se a centenas de clientes satisfeitos. Agende sua primeira coleta hoje
          e ganhe 10% de desconto!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="cta"
            size="lg"
            className="bg-white text-teal-500 hover:bg-teal-50 shadow-lg"
          >
            Agendar Primeira Coleta
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="text-white border-2 border-white hover:bg-teal-600"
          >
            <Phone className="w-5 h-5" />
            (11) 9 9999-9999
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-teal-100">Satisfação Garantida</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">48h</div>
              <div className="text-teal-100">Entrega Rápida</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">R$0</div>
              <div className="text-teal-100">Taxa de Coleta</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
