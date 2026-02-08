import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, X } from "lucide-react";

type BillingCycle = "mensal" | "anual";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  slug: "essencial" | "profissional" | "enterprise";
  description: string;
  monthlyPrice: number;
  annualPrice: number; // preço mensal equivalente quando pago anualmente
  highlight: boolean;
  features: Feature[];
}

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("mensal");

  const plans: Plan[] = [
    {
      name: "Essencial",
      slug: "essencial",
      description: "Para quem está começando e quer sair da planilha",
      monthlyPrice: 67.97,
      annualPrice: 54.37,
      highlight: false,
      features: [
        { text: "Até 40 itens", included: true },
        { text: "Até 40 pedidos/mês", included: true },
        { text: "Até 3 usuários", included: true },
        { text: "Logística de entrega e retirada", included: true },
        { text: "Contratos + Assinatura digital", included: false },
        { text: "Controle financeiro", included: false },
        { text: "Catálogo digital para clientes", included: false },
        { text: "Relatórios avançados", included: false },
      ],
    },
    {
      name: "Profissional",
      slug: "profissional",
      description: "Para quem quer operar de forma profissional",
      monthlyPrice: 127.97,
      annualPrice: 102.37,
      highlight: true,
      features: [
        { text: "Até 80 itens", included: true },
        { text: "Até 80 pedidos/mês", included: true },
        { text: "Até 80 contratos", included: true },
        { text: "Até 13 usuários", included: true },
        { text: "Logística de entrega e retirada", included: true },
        { text: "Contratos + Assinatura digital", included: true },
        { text: "Controle financeiro", included: true },
        { text: "Catálogo digital para clientes", included: true },
      ],
    },
    {
      name: "Enterprise",
      slug: "enterprise",
      description: "Para quem precisa de escala e zero limites",
      monthlyPrice: 197.97,
      annualPrice: 158.37,
      highlight: false,
      features: [
        { text: "Itens ilimitados", included: true },
        { text: "Pedidos ilimitados", included: true },
        { text: "Contratos ilimitados", included: true },
        { text: "Usuários ilimitados", included: true },
        { text: "Logística de entrega e retirada", included: true },
        { text: "Contratos + Assinatura digital", included: true },
        { text: "Controle financeiro", included: true },
        { text: "Catálogo digital para clientes", included: true },
      ],
    },
  ];

  const getPrice = (plan: Plan) => {
    return billingCycle === "mensal" ? plan.monthlyPrice : plan.annualPrice;
  };

  const getDiscount = (plan: Plan) => {
    const discount = Math.round(
      ((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100
    );
    return discount;
  };

  const getCheckoutUrl = (planSlug: string) => {
    return `https://app.aluggou.com/checkout?plano=${planSlug}&ciclo=${billingCycle}`;
  };

  const trialUrl = "https://app.aluggou.com/signup?source=site";

  return (
    <section id="planos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-500/10 text-emerald-600 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comece com trial grátis de 14 dias. Cancele quando quiser.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium transition-colors ${billingCycle === "mensal"
                  ? "text-foreground"
                  : "text-muted-foreground"
                  }`}
              >
                Mensal
              </span>
              <button
                onClick={() =>
                  setBillingCycle(billingCycle === "mensal" ? "anual" : "mensal")
                }
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${billingCycle === "anual" ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                aria-label="Alternar entre cobrança mensal e anual"
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${billingCycle === "anual" ? "translate-x-7" : "translate-x-0"
                    }`}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${billingCycle === "anual"
                  ? "text-foreground"
                  : "text-muted-foreground"
                  }`}
              >
                Anual
              </span>
            </div>
            {billingCycle === "anual" && (
              <span className="bg-emerald-500/10 text-emerald-600 text-xs font-semibold px-3 py-1.5 rounded-full animate-fade-in">
                Economize até 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.slug}
              className={`relative rounded-2xl p-6 animate-fade-in flex flex-col ${plan.highlight
                ? "bg-primary text-primary-foreground border-2 border-primary shadow-glow scale-105 z-10"
                : "bg-background border border-border hover:border-primary/30"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${plan.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${plan.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                    }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${plan.highlight ? "text-primary-foreground" : "text-foreground"
                      }`}
                  >
                    R$ {getPrice(plan)}
                  </span>
                  <span
                    className={`${plan.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                      }`}
                  >
                    /mês
                  </span>
                </div>
                {billingCycle === "anual" && (
                  <div className="mt-1">
                    <span
                      className={`text-xs ${plan.highlight
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                        }`}
                    >
                      Cobrado anualmente (R$ {plan.annualPrice * 12}/ano)
                    </span>
                    <span className="ml-2 bg-emerald-500/20 text-emerald-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                      -{getDiscount(plan)}%
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-primary"
                          }`}
                      />
                    ) : (
                      <X
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-muted-foreground/50"
                      />
                    )}
                    <span
                      className={`text-sm ${!feature.included
                        ? "text-muted-foreground/50 line-through"
                        : plan.highlight
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                        }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 mt-auto">
                <Button
                  variant={plan.highlight ? "outline-light" : "cta"}
                  className="w-full"
                  asChild
                >
                  <a
                    href={getCheckoutUrl(plan.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assinar agora
                  </a>
                </Button>
                <Button
                  variant={plan.highlight ? "ghost" : "outline"}
                  className={`w-full ${plan.highlight
                    ? "text-primary-foreground hover:bg-primary-foreground/10"
                    : ""
                    }`}
                  asChild
                >
                  <a
                    href={trialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Começar trial grátis
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
