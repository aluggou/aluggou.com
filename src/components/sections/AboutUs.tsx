const AboutUs = () => {
    return (
        <section id="sobre" className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side - Text */}
                    <div className="order-2 md:order-1">
                        <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
                            Sobre Nós
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                            De uma necessidade real para uma solução digital
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A Aluggou nasceu quando Diego tentou ajudar sua mãe, que gerenciava
                            aluguéis em um caderno e já não conseguia manter o controle. Ao
                            transformar esse processo em algo digital, surgiu a ideia de criar
                            um sistema simples, prático e acessível para microempreendedores
                            organizarem seus negócios na palma da mão.
                        </p>
                    </div>

                    {/* Right side - Image */}
                    <div className="order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
                            <img
                                src="/images/about-us.png"
                                alt="Mãe e filho empreendedores"
                                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
