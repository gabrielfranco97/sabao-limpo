import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "gray" | "teal";
}

export const Section = ({ children, variant = "default", className, ...props }: SectionProps) => {
  const bgClasses = {
    default: "bg-white",
    gray: "bg-slate-50",
    teal: "bg-teal-500 text-white",
  };

  return (
    <section
      className={cn(
        "section-spacing",
        bgClasses[variant],
        className
      )}
      {...props}
    >
      <div className="container-padding mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};
