import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const leadSchema = z.object({
    name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
    company: z.string().trim().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100),
    whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
    email: z.string().trim().email("Email inválido").max(255),
    message: z.string().trim().max(1000).optional(),
});

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        whatsapp: "",
        email: "",
        message: "",
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
            // Enviar para webhook via JSON
            const webhookUrl = "https://webhook.aluggou.com/webhook/lead-site-aluggou-popup-contato"; // Substituir pela URL do webhook real
            // const webhookUrl = "https://editor.aluggou.com/webhook-test/lead-site-aluggou-popup-contato";//
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    company: formData.company.trim(),
                    whatsapp: formData.whatsapp.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim() || null,
                    source: "site_contact_popup",
                    timestamp: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar formulário");
            }

            toast({
                title: "Mensagem enviada!",
                description: "Entraremos em contato em breve.",
            });

            setFormData({ name: "", company: "", whatsapp: "", email: "", message: "" });
            onClose();
        } catch (error) {
            toast({
                title: "Erro ao enviar",
                description: "Tente novamente em alguns instantes.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-primary to-blue-dark rounded-3xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10"
                    aria-label="Fechar"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                            Fale com um especialista
                        </h2>
                        <p className="text-primary-foreground/80 text-sm md:text-base">
                            Preencha o formulário abaixo e entraremos em contato para ajudar sua empresa a crescer.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="bg-primary-foreground/10 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/[0.80] focus:text-primary focus:placeholder:text-primary/60 h-12 rounded-xl px-4 transition-all duration-200 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="bg-primary-foreground/10 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/[0.80] focus:text-primary focus:placeholder:text-primary/60 h-12 rounded-xl px-4 transition-all duration-200 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nome da sua empresa"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                required
                                className="bg-primary-foreground/10 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/[0.80] focus:text-primary focus:placeholder:text-primary/60 h-12 rounded-xl px-4 transition-all duration-200 outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="WhatsApp"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                required
                                className="bg-primary-foreground/10 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/[0.80] focus:text-primary focus:placeholder:text-primary/60 h-12 rounded-xl px-4 transition-all duration-200 outline-none"
                            />
                        </div>

                        <textarea
                            placeholder="Mensagem (opcional)"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={3}
                            className="w-full bg-primary-foreground/10 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/[0.80] focus:text-primary focus:placeholder:text-primary/60 rounded-xl px-4 py-3 transition-all duration-200 outline-none resize-none"
                        />

                        <div className="pt-2 flex justify-center">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-3 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={20} />
                                        Enviando...
                                    </span>
                                ) : (
                                    "Enviar"
                                )}
                            </button>
                        </div>

                        <p className="text-center text-primary-foreground/60 text-xs mt-4">
                            Seus dados estão seguros conosco. Não compartilhamos suas informações.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;
