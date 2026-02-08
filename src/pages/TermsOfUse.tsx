import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                        Termos de Uso
                    </h1>

                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                        <p className="text-sm text-muted-foreground">
                            Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
                            <p>
                                Ao acessar e utilizar a plataforma Aluggou, você concorda em cumprir e estar
                                vinculado a estes Termos de Uso. Se você não concordar com qualquer parte
                                destes termos, não poderá acessar ou utilizar nossos serviços.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">2. Descrição do Serviço</h2>
                            <p>
                                A Aluggou é uma plataforma de gestão de aluguéis que oferece ferramentas para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gerenciamento de pedidos e contratos de locação</li>
                                <li>Controle de estoque de itens para aluguel</li>
                                <li>Gestão de clientes e fornecedores</li>
                                <li>Emissão de contratos digitais com assinatura eletrônica</li>
                                <li>Controle financeiro e relatórios</li>
                                <li>Logística de entrega e retirada</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">3. Cadastro e Conta</h2>
                            <p>Para utilizar a plataforma, você deve:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ter pelo menos 18 anos de idade</li>
                                <li>Fornecer informações verdadeiras e completas durante o cadastro</li>
                                <li>Manter suas credenciais de acesso em sigilo</li>
                                <li>Ser responsável por todas as atividades realizadas em sua conta</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">4. Planos e Pagamentos</h2>
                            <p>
                                A Aluggou oferece diferentes planos de assinatura. Ao contratar um plano, você concorda que:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Os valores serão cobrados conforme o ciclo escolhido (mensal ou anual)</li>
                                <li>A renovação é automática até que você cancele</li>
                                <li>O cancelamento pode ser feito a qualquer momento, sem multas</li>
                                <li>Não há reembolso proporcional para períodos não utilizados</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">5. Período de Teste Grátis</h2>
                            <p>
                                Oferecemos um período de teste gratuito de 14 dias. Durante o teste grátis, você terá
                                acesso às funcionalidades do plano escolhido. Ao final do período, caso não
                                cancele, a cobrança será iniciada automaticamente.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">6. Uso Aceitável</h2>
                            <p>Você concorda em não utilizar a plataforma para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Atividades ilegais ou fraudulentas</li>
                                <li>Violar direitos de propriedade intelectual</li>
                                <li>Transmitir vírus ou código malicioso</li>
                                <li>Interferir no funcionamento da plataforma</li>
                                <li>Acessar contas de outros usuários sem autorização</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">7. Propriedade Intelectual</h2>
                            <p>
                                Todo o conteúdo da plataforma, incluindo marca, design, textos e código,
                                é propriedade da Aluggou e está protegido por leis de propriedade intelectual.
                                Você não pode copiar, modificar ou distribuir nosso conteúdo sem autorização.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">8. Seus Dados</h2>
                            <p>
                                Você mantém a propriedade de todos os dados que insere na plataforma.
                                Podemos fazer backup e processar esses dados apenas para fornecer nossos
                                serviços. Consulte nossa Política de Privacidade para mais informações.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">9. Limitação de Responsabilidade</h2>
                            <p>
                                A Aluggou não se responsabiliza por danos indiretos, incidentais ou consequentes
                                decorrentes do uso da plataforma. Nossa responsabilidade máxima está limitada
                                ao valor pago pelo serviço nos últimos 12 meses.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">10. Disponibilidade do Serviço</h2>
                            <p>
                                Nos esforçamos para manter a plataforma disponível 24/7, mas não garantimos
                                disponibilidade ininterrupta. Manutenções programadas serão comunicadas
                                com antecedência sempre que possível.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">11. Rescisão</h2>
                            <p>
                                Podemos suspender ou encerrar sua conta caso você viole estes termos.
                                Você pode encerrar sua conta a qualquer momento através das configurações
                                ou entrando em contato com nosso suporte.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">12. Alterações nos Termos</h2>
                            <p>
                                Podemos atualizar estes termos periodicamente. Mudanças significativas serão
                                comunicadas por e-mail ou através da plataforma. O uso continuado após as
                                alterações constitui aceitação dos novos termos.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">13. Lei Aplicável</h2>
                            <p>
                                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será
                                resolvida no foro da cidade de São Paulo, SP.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">14. Contato</h2>
                            <p>
                                Para dúvidas sobre estes termos, entre em contato:
                            </p>
                            <p>
                                <strong>E-mail:</strong> contato@aluggou.com.br<br />
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

export default TermsOfUse;
