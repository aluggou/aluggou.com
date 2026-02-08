import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email("Email inválido").max(255);

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email: email.trim(),
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Email já cadastrado",
            description: "Este email já está em nossa lista.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscrição confirmada!",
          description: "Você receberá nossas novidades em breve.",
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Erro ao inscrever",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary" size={24} />
            <h3 className="text-xl font-semibold text-foreground">
              Receba dicas e novidades
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Assine nossa newsletter e fique por dentro das melhores práticas para gestão de aluguéis.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : "Inscrever"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
