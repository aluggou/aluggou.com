import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso instalar algo no meu computador?",
      answer:
        "Não! O Aluggou é 100% online. Você acessa pelo navegador de qualquer dispositivo com internet. Não precisa instalar nada, basta criar sua conta e começar a usar.",
    },
    {
      question: "O teste é realmente gratuito?",
      answer:
        "Sim, você tem 14 dias para testar todas as funcionalidades do Aluggou sem pagar nada e sem precisar informar cartão de crédito. Após o período de teste, você escolhe o plano que melhor atende seu negócio.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Claro! Não há fidelidade ou multa por cancelamento. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel. Seu acesso continua até o fim do período já pago.",
    },
    {
      question: "Meus clientes precisam criar conta no sistema?",
      answer:
        "Não é obrigatório, mas oferecemos a opção de auto-cadastro para seus clientes. Assim eles podem preencher seus próprios dados, visualizar pedidos e assinar contratos digitalmente, facilitando seu trabalho.",
    },
    {
      question: "Os contratos digitais têm validade jurídica?",
      answer:
        "Sim! Os contratos gerados pelo Aluggou seguem as normas da MP 2.200-2/2001 e Lei 14.063/2020, tendo validade jurídica para acordos eletrônicos com assinatura digital rastreável.",
    },
    {
      question: "Consigo migrar meus dados de outro sistema?",
      answer:
        "Sim, oferecemos suporte para importação de dados de planilhas e outros sistemas. Entre em contato com nosso time para te ajudarmos na migração.",
    },
    {
      question: "O sistema funciona no celular?",
      answer:
        "Sim! O Aluggou é totalmente responsivo e funciona em celulares e tablets. Você pode gerenciar seus aluguéis de qualquer lugar.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas que você pode ter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se não encontrar sua resposta, entre em contato conosco
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
