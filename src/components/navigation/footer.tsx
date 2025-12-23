import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  about: {
    title: "Sobre",
    links: [
      { label: "Nossa História", href: "#" },
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Blog", href: "#" },
    ],
  },
  services: {
    title: "Serviços",
    links: [
      { label: "Lavagem Completa", href: "#servicos" },
      { label: "Passadoria", href: "#servicos" },
      { label: "Delivery", href: "#servicos" },
      { label: "Express 24h", href: "#servicos" },
    ],
  },
  support: {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-padding mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Sabão Limpo"
                width={32}
                height={32}
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="text-xl font-heading font-bold text-white">
                Sabão Limpo
              </span>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Lavanderia profissional com coleta e entrega. Cuidamos das suas roupas com dedicação.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {footerLinks.about.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {footerLinks.services.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>(11) 9 9999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>contato@sabaolimpo.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-padding mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 Sabão Limpo. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
