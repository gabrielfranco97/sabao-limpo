# Sabão Limpo - Landing Page

> Landing page para serviço de lavanderia brasileiro com coleta e entrega.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS v4
- **Componentes**: shadcn/ui patterns
- **Ícones**: Lucide React

## Início Rápido

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start
```

O servidor de desenvolvimento inicia em http://localhost:3000

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx      # Layout raiz com SEO
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais
├── components/
│   ├── ui/             # Componentes reutilizáveis
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── accordion.tsx
│   ├── navigation/     # Header e Footer
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── layout/         # Containers de layout
│   │   └── section.tsx
│   └── sections/       # Seções da página
│       ├── hero-section.tsx
│       ├── services-section.tsx
│       ├── how-it-works-section.tsx
│       ├── pricing-section.tsx
│       ├── testimonials-section.tsx
│       ├── faq-section.tsx
│       └── cta-section.tsx
└── lib/
    └── utils.ts        # Utilitários (cn)
```

## Design System

### Cores
- **Primária (Teal)**: `#00A8E8`
- **Destaque (Coral)**: `#FF7A59`
- **Neutros**: Slate 100-900

### Tipografia
- **Títulos**: Outfit (600-700)
- **Corpo**: DM Sans (400-500)

### Breakpoints
- Mobile: < 768px
- Tablet: 768-1023px
- Desktop: ≥ 1024px

## Seções da Página

1. **Header** - Navegação sticky com menu mobile
2. **Hero** - CTA principal "Agende sua Coleta"
3. **Serviços** - Lavagem, Passadoria, Delivery, Express
4. **Como Funciona** - 3 etapas do processo
5. **Preços** - Básico, Completo, Premium
6. **Depoimentos** - 3 avaliações de clientes
7. **FAQ** - 6 perguntas frequentes
8. **CTA Final** - Chamada para conversão
9. **Footer** - Links e contato

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Iniciar produção |
| `npm run lint` | Verificar código |

## Deploy

Pronto para deploy na Vercel:

```bash
vercel --prod
```

## Documentação

- Design Guidelines: `/docs/design-guidelines.md`
- Plano de Implementação: `/plans/251223-1053-sabao-limpo-landing/`

## Licença

Privado - Todos os direitos reservados.
