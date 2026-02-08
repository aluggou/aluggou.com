import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <img
                src="/brand/logotipo-aluggou.svg"
                alt="Aluggou"
                className="h-15 mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-card/70 mb-6">
              A plataforma completa para gestão de aluguéis. Simplifique seu negócio de locação.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-card mb-4">Produto</h4>
            <ul className="space-y-3">
              <li>
                <a href="#funcionalidades" className="text-card/70 hover:text-card transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="text-card/70 hover:text-card transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="text-card/70 hover:text-card transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-card mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-card/70 hover:text-card transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-card/70 hover:text-card transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-card/70 hover:text-card transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-card/70 hover:text-card transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-card/70">
                <Mail size={18} />
                <span>contato@aluggou.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-card/70">
                <Phone size={18} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-card/70">
                <MapPin size={18} />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 mt-12 pt-8 text-center text-card/60">
          <p>&copy; {currentYear} Aluggou. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
