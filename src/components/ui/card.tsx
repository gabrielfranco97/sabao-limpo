import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-white shadow-card transition-shadow hover:shadow-card-hover",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-heading text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Specialized Cards
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <Card className="p-6 text-center">
    <div className="flex justify-center mb-4">
      <div className="rounded-full bg-teal-100 p-4">
        <Icon className="w-8 h-8 text-teal-500" />
      </div>
    </div>
    <CardTitle className="mb-2">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </Card>
);

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  onCtaClick?: () => void;
}

const PricingCard = ({
  plan,
  price,
  features,
  featured = false,
  ctaText,
  onCtaClick
}: PricingCardProps) => (
  <Card className={cn(
    "p-6 flex flex-col",
    featured && "border-teal-500 border-2 relative"
  )}>
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Mais Popular
      </div>
    )}
    <CardHeader className="p-0 mb-4">
      <CardTitle className="mb-2">{plan}</CardTitle>
      <div className="text-4xl font-bold text-teal-500">{price}</div>
    </CardHeader>
    <CardContent className="p-0 flex-1">
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-teal-500 mt-0.5">✓</span>
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-0 pt-6">
      <button
        onClick={onCtaClick}
        className={cn(
          "w-full py-3 rounded-md font-semibold transition-colors",
          featured
            ? "bg-teal-500 text-white hover:bg-teal-600"
            : "border-2 border-teal-500 text-teal-500 hover:bg-teal-50"
        )}
      >
        {ctaText}
      </button>
    </CardFooter>
  </Card>
);

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => (
  <Card className="p-6">
    <CardContent className="p-0">
      <div className="text-4xl text-teal-500 mb-4">&ldquo;</div>
      <p className="text-slate-700 mb-6 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
          <span className="text-lg font-semibold text-slate-600">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{location}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ServiceCard,
  PricingCard,
  TestimonialCard
};
