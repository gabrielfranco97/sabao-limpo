import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <Section className="pt-8 md:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Coleta e entrega grátis</span>
          </div>

          <h1 className="font-heading font-bold leading-tight">
            Roupas Limpas, <br />
            Vida Mais Leve
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            Lavanderia profissional com coleta e entrega. Deixe a gente cuidar das suas roupas
            enquanto você cuida do que importa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="cta" size="lg">
              Agende sua Coleta
            </Button>
            <Button variant="secondary" size="lg">
              Como Funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-teal-500">500+</div>
              <div className="text-sm text-slate-600">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500">10k+</div>
              <div className="text-sm text-slate-600">Peças Lavadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500">4.9★</div>
              <div className="text-sm text-slate-600">Avaliação</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-teal-100 to-coral-100 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🧺</div>
              <p className="text-lg font-medium text-slate-700">Sua roupa limpa em 48h</p>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-white shadow-card rounded-lg p-4 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Online agora</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white shadow-card rounded-lg p-4 hidden md:block">
            <div className="text-sm">
              <div className="font-bold text-coral-500">Express 24h</div>
              <div className="text-slate-600">Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
