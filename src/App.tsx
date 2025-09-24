import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { CheckCircle, BookOpen, Users, Target, Brain, HandHeart, FileText, Briefcase, Search, GraduationCap, Bot, Edit, BarChart3 } from "lucide-react";

export default function App() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5521998851851"; // 21 99885-1851 with country code
    const message = "Olá! Gostaria de falar com um especialista.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold" style={{ color: '#1D1C21' }}>IAC</span>
                <span className="text-sm ml-2" style={{ color: '#848484' }}>Ensino Jurídico</span>
              </div>
            </div>
            <div className="hidden md:block">
              <Button 
                className="font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: '#FEC868', color: '#1D1C21' }}
                onClick={handleWhatsAppContact}
              >
                Tenho interesse nos serviços do IAC
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#1D1C21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Aprimore seus conhecimentos jurídicos com ênfase nos Tribunais Superiores do Brasil
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Cursos exclusivos para advogados que desejam aperfeiçoar sua atuação junto ao STJ e ao STF, ministrados por professores com ampla experiência prática e profundo conhecimento dos desafios enfrentados nesses tribunais.
            </p>
            <Button 
              size="lg"
              className="px-8 py-6 text-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: '#FEC868', color: '#1D1C21' }}
              onClick={handleWhatsAppContact}
            >
              Tenho interesse nos serviços do IAC
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#1D1C21' }}>
              A concorrência na advocacia nunca foi tão intensa.
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: '#848484' }}>
              Enquanto muitos ainda recorrem a conteúdos genéricos, você precisa de estratégias práticas e diferenciadas para atuar com excelência em casos complexos e conquistar destaque nos Tribunais Superiores.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#1D1C21' }}>
              No IAC, você aprende com quem vivencia o Direito no STJ e no STF.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                      <GraduationCap className="w-6 h-6" style={{ color: '#1D1C21' }} />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#848484' }}>
                      Professores experientes na realidade e atuação junto aos Tribunais Superiores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                      <Target className="w-6 h-6" style={{ color: '#1D1C21' }} />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#848484' }}>
                      Aulas dinâmicas, com simulações, estudos de casos reais e foco na aplicação imediata do conhecimento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                      <Bot className="w-6 h-6" style={{ color: '#1D1C21' }} />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#848484' }}>
                      Conteúdo constantemente atualizado, com abordagem do uso de tecnologia e inteligência artificial aplicada à pesquisa jurisprudencial e à técnica recursal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                      <HandHeart className="w-6 h-6" style={{ color: '#1D1C21' }} />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#848484' }}>
                      Suporte e acompanhamento pós-curso para esclarecimento de dúvidas e fortalecimento do aprendizado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                      <Edit className="w-6 h-6" style={{ color: '#1D1C21' }} />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#848484' }}>
                      Cursos personalizados, desenvolvidos sob medida para atender às demandas específicas de escritórios de advocacia, empresas ou órgãos públicos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow lg:col-span-1 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                      <BarChart3 className="w-6 h-6" style={{ color: '#1D1C21' }} />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: '#848484' }}>
                      Desenvolvimento de mapeamento estratégico baseado em estatísticas judiciais e desenvolvimento de gestão de risco jurídico-contencioso aplicado aos Tribunais Superiores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20" style={{ backgroundColor: '#FEC868' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#1D1C21' }}>
              Imagine atuar com segurança em recursos, ações e incidentes nos Tribunais Superiores, aplicando de forma imediata o que aprendeu em sala de aula.
            </h2>
            <p className="text-xl md:text-2xl" style={{ color: '#A4753A' }}>
              No IAC, você não apenas estuda a teoria — você domina a prática que diferencia os grandes advogados.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#1D1C21' }}>
               Benefícios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Target className="w-12 h-12 mx-auto mb-4" style={{ color: '#FEC868' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1D1C21' }}>
                  Benefícios
                </h3>
                <p style={{ color: '#848484' }}>
                  Conhecimento aplicado diretamente na sua prática profissional
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#FEC868' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1D1C21' }}>
                  Segurança Jurídica
                </h3>
                <p style={{ color: '#848484' }}>
                  Atuação eficiente e estratégica em casos complexos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Trophy className="w-12 h-12 mx-auto mb-4" style={{ color: '#FEC868' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1D1C21' }}>
                  Resultado
                </h3>
                <p style={{ color: '#848484' }}>
                  Retorno real com o sucesso em casos jurídicos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formatted Courses */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 mr-3" style={{ color: '#FEC868' }} />
                <h2 className="text-2xl font-bold" style={{ color: '#1D1C21' }}>
                  Cursos de Capacitação Jurídica (já formatados):
                </h2>
              </div>
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p style={{ color: '#1D1C21' }}>Recursos no STJ</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p style={{ color: '#1D1C21' }}>Ações e Incidentes no STJ</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p style={{ color: '#1D1C21' }}>Recursos no STF</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p style={{ color: '#1D1C21' }}>Ações e Incidentes no STF</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Custom Courses */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 mr-3" style={{ color: '#FEC868' }} />
                <h2 className="text-2xl font-bold" style={{ color: '#1D1C21' }}>
                  Cursos Personalizados Sob Demanda
                </h2>
              </div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p style={{ color: '#848484' }}>
                    Capacitação adaptada às necessidades específicas do seu escritório ou instituição.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technical Studies */}
            <div>
              <div className="flex items-center mb-6">
                <Search className="w-8 h-8 mr-3" style={{ color: '#FEC868' }} />
                <h2 className="text-2xl font-bold" style={{ color: '#1D1C21' }}>
                  Estudos Técnicos Especializados
                </h2>
              </div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p style={{ color: '#848484' }}>
                    Pesquisas científicas e interdisciplinares com rigor acadêmico e profundidade analítica.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#1D1C21' }}>
              Para quem é destinado
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" style={{ borderColor: '#FEC868' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                    <Users className="w-8 h-8" style={{ color: '#1D1C21' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#1D1C21' }}>
                    Advogados e Profissionais
                  </h3>
                  <p style={{ color: '#848484' }}>
                    Advogados e profissionais do Direito que buscam diferenciação competitiva e aprimoramento técnico para atuação de alto nível.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" style={{ borderColor: '#FEC868' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#FEC868' }}>
                    <Briefcase className="w-8 h-8" style={{ color: '#1D1C21' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#1D1C21' }}>
                    Escritórios e Instituições
                  </h3>
                  <p style={{ color: '#848484' }}>
                    Escritórios de advocacia, órgãos públicos e empresas que necessitam de capacitação especializada em temas jurídicos estratégicos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1D1C21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Garanta agora sua vaga e conquiste seu espaço nos Tribunais Superiores.
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Junte-se a nós e consolide a transformação do seu conhecimento especializado.
          </p>
          <Button 
            size="lg"
            className="text-black px-8 py-6 text-lg font-bold"
            style={{ backgroundColor: '#FEC868' }}
            onClick={handleWhatsAppContact}
          >
            Tenho interesse nos serviços do IAC
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1D1C21' }}>
              IAC - Ensino Jurídico
            </h3>
            <p className="text-lg mb-4" style={{ color: '#FEC868' }}>
              Excelência em Educação Jurídica
            </p>
            <div className="max-w-2xl mx-auto">
              <h4 className="text-lg font-bold mb-4" style={{ color: '#1D1C21' }}>
                Compromisso com a Ética
              </h4>
              <p style={{ color: '#848484' }}>
                O IAC adota os mais elevados padrões de ética e responsabilidade, oferecendo conteúdos que valorizam a prática, a inovação e a busca constante pela excelência no ensino jurídico.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Trophy({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-.78C16.8 12.67 15.54 14 14 14.66V18h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2v-3.34C8.46 14 7.2 12.67 6.78 11H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1zM9 3v1h6V3H9zM5 7v1a1 1 0 0 0 1 1h.22A6.01 6.01 0 0 0 6 8V7a1 1 0 0 0-1-1zm13 0a1 1 0 0 0-1 1v1c0 .34-.03.67-.08 1H18a1 1 0 0 0 1-1V7z"/>
    </svg>
  );
}