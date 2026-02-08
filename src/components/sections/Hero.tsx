import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const benefits = [
    "Sem instalação necessária",
    "Teste grátis por 14 dias",
    "Suporte dedicado",
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
              Gestão de Aluguéis Simplificada
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Controle total dos seus{" "}
              <span className="text-primary">aluguéis</span> em um só lugar
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Simplifique a gestão da sua empresa de locação com pedidos, contratos,
              entregas e faturamento em uma única plataforma fácil de usar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="default" size="xl" className="group" asChild>
                <a href="https://app.aluggou.com/signup?source=site" target="_blank" rel="noopener noreferrer">
                  Testar Grátis
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#planos">
                  Ver Planos
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="text-primary" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Browser bar mockup */}
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-light" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded px-3 py-1 text-sm text-muted-foreground">
                    app.aluggou.com.br
                  </div>
                </div>
              </div>

              {/* Dashboard placeholder */}
              <div className="p-6 bg-background min-h-[400px]">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Pedidos Ativos", value: "24", color: "bg-primary" },
                    { label: "Entregas Hoje", value: "8", color: "bg-secondary" },
                    { label: "Faturamento", value: "R$ 12.450", color: "bg-accent" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-card p-2 md:p-4 rounded-lg border border-border overflow-hidden">
                      <div className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} rounded-lg mb-2 md:mb-3 opacity-20`} />
                      <p className="text-base md:text-2xl font-bold text-foreground truncate">{stat.value}</p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-card rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Últimos Pedidos</h4>
                    <span className="text-primary text-sm">Ver todos</span>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Cliente {i}</p>
                          <p className="text-xs text-muted-foreground">Pedido #{1000 + i}</p>
                        </div>
                      </div>
                      <span className="text-sm text-primary font-medium">R$ {i * 150},00</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-12 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-500" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Contrato Assinado</p>
                  <p className="text-xs text-muted-foreground">Há 2 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
