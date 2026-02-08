import { Building2, MousePointer, FileSignature, TruckIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Building2,
      number: "01",
      title: "Cadastre sua empresa e itens",
      description:
        "Configure seu catálogo de produtos e serviços em poucos minutos. Adicione preços, fotos e descrições.",
    },
    {
      icon: MousePointer,
      number: "02",
      title: "Crie pedidos em poucos cliques",
      description:
        "Monte pedidos rapidamente com cálculo automático de valores, datas e condições de locação.",
    },
    {
      icon: FileSignature,
      number: "03",
      title: "Gere e assine contratos digitalmente",
      description:
        "Contratos em PDF prontos para assinatura digital. Sem papel, sem complicação, com validade jurídica.",
    },
    {
      icon: TruckIcon,
      number: "04",
      title: "Controle entregas e faturamento",
      description:
        "Gerencie toda a logística de entregas, retiradas e faturamento em um calendário visual integrado.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples de começar, fácil de usar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos você organiza todo o seu negócio de locação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-background rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="text-primary" size={28} />
                  </div>
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
