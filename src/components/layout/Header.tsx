import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactPopup from "@/components/ui/ContactPopup";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#planos", label: "Planos" },
    { href: "#sobre", label: "Sobre Nós" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/brand/logotipo-aluggou.svg"
            alt="Aluggou"
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="text-foreground/80 hover:text-primary font-medium transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://app.aluggou.com" target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="https://app.aluggou.com/signup?source=site" target="_blank" rel="noopener noreferrer">
              Testar Grátis
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="text-foreground/80 hover:text-primary font-medium py-2 text-left"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactPopupOpen(true);
              }}
            >
              Contato
            </button>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full" asChild>
                <a href="https://app.aluggou.com" target="_blank" rel="noopener noreferrer">
                  Entrar
                </a>
              </Button>
              <Button variant="default" className="w-full" asChild>
                <a href="https://app.aluggou.com/signup?source=site" target="_blank" rel="noopener noreferrer">
                  Testar Grátis
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </header>
  );
};

export default Header;
