import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                        Política de Privacidade
                    </h1>

                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                        <p className="text-sm text-muted-foreground">
                            Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">1. Introdução</h2>
                            <p>
                                A Aluggou ("nós", "nosso" ou "Aluggou") está comprometida em proteger sua privacidade.
                                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos
                                suas informações quando você utiliza nossa plataforma de gestão de aluguéis.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">2. Informações que Coletamos</h2>
                            <p>Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Informações de Cadastro:</strong> Nome, e-mail, telefone, CNPJ/CPF, endereço comercial.</li>
                                <li><strong>Dados de Uso:</strong> Informações sobre como você interage com nossa plataforma.</li>
                                <li><strong>Dados de Clientes:</strong> Informações dos seus clientes que você cadastra na plataforma para gestão de aluguéis.</li>
                                <li><strong>Dados Financeiros:</strong> Informações de pagamento processadas por nossos parceiros de pagamento.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">3. Como Usamos suas Informações</h2>
                            <p>Utilizamos as informações coletadas para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fornecer, manter e melhorar nossa plataforma</li>
                                <li>Processar transações e enviar notificações relacionadas</li>
                                <li>Responder a solicitações de suporte</li>
                                <li>Enviar comunicações sobre atualizações e novidades (com seu consentimento)</li>
                                <li>Garantir a segurança da plataforma</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">4. Compartilhamento de Informações</h2>
                            <p>Não vendemos suas informações pessoais. Podemos compartilhar dados apenas com:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Prestadores de serviços que nos auxiliam na operação da plataforma</li>
                                <li>Parceiros de pagamento para processamento de transações</li>
                                <li>Autoridades legais, quando exigido por lei</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">5. Segurança dos Dados</h2>
                            <p>
                                Implementamos medidas de segurança técnicas e organizacionais para proteger suas
                                informações, incluindo criptografia de dados, controles de acesso e monitoramento
                                contínuo de nossa infraestrutura.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">6. Seus Direitos (LGPD)</h2>
                            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Acessar seus dados pessoais</li>
                                <li>Corrigir dados incompletos ou incorretos</li>
                                <li>Solicitar a exclusão de seus dados</li>
                                <li>Revogar o consentimento a qualquer momento</li>
                                <li>Solicitar a portabilidade dos dados</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
                            <p>
                                Utilizamos cookies e tecnologias similares para melhorar sua experiência,
                                analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar
                                suas preferências de cookies através das configurações do seu navegador.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">8. Retenção de Dados</h2>
                            <p>
                                Mantemos suas informações pelo tempo necessário para cumprir as finalidades
                                descritas nesta política, a menos que um período de retenção mais longo seja
                                exigido por lei.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">9. Alterações nesta Política</h2>
                            <p>
                                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos
                                sobre mudanças significativas por e-mail ou através de um aviso em nossa plataforma.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">10. Contato</h2>
                            <p>
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
                                entre em contato conosco:
                            </p>
                            <p>
                                <strong>E-mail:</strong> privacidade@aluggou.com.br<br />
                                <strong>Endereço:</strong> São Paulo, SP - Brasil
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
