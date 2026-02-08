import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppFloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // TODO: Substituir pela URL do seu webhook
    const WEBHOOK_URL = 'https://webhook.aluggou.com/webhook/forms-whatsapp';

    // Número do WhatsApp para redirecionamento (com código do país)
    const WHATSAPP_NUMBER = '5511959186474';

    const formatPhoneNumber = (value: string) => {
        // Remove tudo que não é número
        const numbers = value.replace(/\D/g, '');

        // Aplica a máscara (00) 00000-0000
        if (numbers.length <= 2) {
            return `(${numbers}`;
        } else if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        } else if (numbers.length <= 11) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
        }
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setPhone(formatted);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Envia para o webhook
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.trim(),
                    phone: phone.replace(/\D/g, ''),
                    timestamp: new Date().toISOString(),
                }),
            });
        } catch (error) {
            console.error('Erro ao enviar para webhook:', error);
        }

        // Abre o WhatsApp em nova aba
        const cleanPhone = phone.replace(/\D/g, '');
        const message = encodeURIComponent(`Olá! Meu nome é ${name}.`);
        window.open(`https://wa.me/55${cleanPhone}?text=${message}`, '_blank');

        // Reseta o formulário e fecha o popup
        setName('');
        setPhone('');
        setIsOpen(false);
        setIsSubmitting(false);
    };

    return (
        <>
            {/* Overlay escuro quando popup está aberto */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Popup do formulário */}
            <div
                className={`fixed bottom-24 right-4 z-50 w-80 bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ease-out origin-bottom-right ${isOpen
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                {/* Header do popup */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Fale Conosco</h3>
                                <p className="text-xs text-white/80">Resposta em minutos</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <p className="text-sm text-gray-600">
                        Preencha seus dados para iniciar uma conversa no WhatsApp.
                    </p>

                    <div className="space-y-3">
                        <div>
                            <label htmlFor="whatsapp-name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome
                            </label>
                            <input
                                id="whatsapp-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="whatsapp-phone" className="block text-sm font-medium text-gray-700 mb-1">
                                WhatsApp
                            </label>
                            <input
                                id="whatsapp-phone"
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="(00) 00000-0000"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || !name.trim() || !phone.trim()}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                Iniciar Conversa
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Botão flutuante do WhatsApp */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-4 right-4 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/50 ${isOpen ? 'rotate-90' : ''
                    }`}
                aria-label="Abrir chat do WhatsApp"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 fill-current"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}
            </button>

            {/* Pulse animation no botão */}
            {!isOpen && (
                <div className="fixed bottom-4 right-4 z-40 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-30 pointer-events-none" />
            )}
        </>
    );
};

export default WhatsAppFloatingButton;
