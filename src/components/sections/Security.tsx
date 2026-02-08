import { Shield, Lock, FileCheck, Monitor } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Plataforma Web Segura",
      description: "Acesse de qualquer lugar com conexão criptografada SSL/TLS.",
    },
    {
      icon: Lock,
      title: "Dados Protegidos",
      description: "Seus dados são armazenados com segurança e backup automático diário.",
    },
    {
      icon: FileCheck,
      title: "Contratos com Validade Jurídica",
      description: "Assinatura digital com certificação e rastreabilidade completa.",
    },
    {
      icon: Monitor,
      title: "Sistema Responsivo",
      description: "Funciona perfeitamente em desktop, tablet e celular.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-foreground/20 text-primary-foreground font-medium px-4 py-2 rounded-full text-sm mb-4">
            Segurança e Confiança
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua empresa em boas mãos
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Tecnologia de ponta para garantir a segurança dos seus dados e operações
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
