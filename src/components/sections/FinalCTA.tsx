import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  company: z.string().trim().max(100).optional(),
});

const FinalCTA = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = leadSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Erro de validação",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        plan_interest: "teste_gratis",
        source: "website_cta",
      });

      if (error) throw error;

      toast({
        title: "Cadastro realizado!",
        description: "Em breve você receberá o acesso ao seu teste gratuito.",
      });

      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      toast({
        title: "Erro ao cadastrar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-blue-dark rounded-3xl p-8 md:p-12 text-primary-foreground text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece a organizar seus aluguéis hoje
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já simplificaram sua gestão de locações.
              Teste grátis por 14 dias, sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 h-12"
                />
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 h-12"
                />
              </div>
              <Input
                type="text"
                placeholder="Nome da sua empresa (opcional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 h-12"
              />
              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Cadastrando...
                  </>
                ) : (
                  <>
                    Começar Teste Gratuito
                    <ArrowRight />
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-primary-foreground/60 mt-6">
              Não pedimos cartão de crédito. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
