import {
  Users,
  Package,
  Calculator,
  FileText,
  Calendar,
  Truck,
  BarChart3,
  Bell,
  Shield,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestão de Clientes",
      description:
        "Cadastro completo de clientes com auto-cadastro online. Histórico de locações e documentos em um só lugar.",
    },
    {
      icon: Package,
      title: "Catálogo de Produtos",
      description:
        "Organize seus equipamentos e serviços com fotos, preços por período e controle de disponibilidade.",
    },
    {
      icon: Calculator,
      title: "Pedidos Automáticos",
      description:
        "Cálculo automático de valores, períodos e condições. Crie pedidos complexos em poucos cliques.",
    },
    {
      icon: FileText,
      title: "Contratos Digitais",
      description:
        "Gere contratos em PDF personalizados com assinatura digital. Validade jurídica garantida.",
    },
    {
      icon: Calendar,
      title: "Calendário de Locações",
      description:
        "Visualize todas as locações, entregas e retiradas em um calendário intuitivo e fácil de gerenciar.",
    },
    {
      icon: Truck,
      title: "Logística Integrada",
      description:
        "Controle entregas e retiradas com rotas, horários e status em tempo real para sua equipe.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Completos",
      description:
        "Acompanhe faturamento, inadimplência, itens mais locados e performance do seu negócio.",
    },
    {
      icon: Bell,
      title: "Notificações Automáticas",
      description:
        "Alertas por e-mail para clientes e equipe sobre vencimentos, entregas e pendências.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Dados protegidos, backup automático e controle de acesso por usuário para sua tranquilidade.",
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa para gerenciar seus aluguéis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas poderosas e fáceis de usar para organizar, automatizar e crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
