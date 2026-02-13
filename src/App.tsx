import { useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Activity, Stethoscope, FileText, CheckCircle, Database, Brain, Lock } from "lucide-react"

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden relative font-sans">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-100/50 rounded-full blur-[100px]" />
      </div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center gap-2 text-emerald-800">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white">
              <Activity className="w-5 h-5" />
            </div>
            MED<span className="font-light">INTELLI</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#solucoes" className="hover:text-emerald-600 transition-colors">Soluções</a>
            <a href="#anamnese" className="hover:text-emerald-600 transition-colors">Anamnese IA</a>
            <a href="#seguranca" className="hover:text-emerald-600 transition-colors">Segurança</a>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Agendar Demo
          </Button>
        </div>
      </motion.nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:w-1/2 text-left"
            >
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Novo Padrão em Dados Hospitalares
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900">
                Anamnese Inteligente.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Diagnósticos Precisos.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Transforme o atendimento hospitalar com nossa plataforma que unifica dados do paciente e utiliza IA para sugerir insights clínicos baseados em histórico e sintomas em tempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="antigravity" className="h-14 px-8 text-lg font-semibold rounded-xl">
                  Conhecer Plataforma
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50">
                  Ver Vídeo Explicativo
                </Button>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-emerald-900/10 border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"/>
                  <div className="w-3 h-3 rounded-full bg-amber-400"/>
                  <div className="w-3 h-3 rounded-full bg-blue-400"/>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Paciente: João Silva</h3>
                      <p className="text-sm text-slate-500">Prontuário: #82910-A • Admissão: 13/02/2026</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-md font-medium">Alerta: Hipertensão</span>
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">Em Observação</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-100 rounded w-3/4" />
                    <div className="h-2 bg-slate-100 rounded w-full" />
                    <div className="h-2 bg-slate-100 rounded w-5/6" />
                  </div>
                  <div className="mt-6 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                     <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-700">Insight da IA</span>
                     </div>
                     <p className="text-sm text-emerald-800">Padrão de sintomas sugere risco elevado de sepse. Recomendado protocolo de lactato imediato.</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl border border-emerald-50 z-20 flex items-center gap-3"
              >
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-xs text-slate-400">Status</div>
                    <div className="font-bold text-slate-700">Sinais Estáveis</div>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Gestão Clínica Centralizada</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nossa tecnologia conecta dados dispersos para criar uma linha do tempo única e inteligente para cada paciente.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Database,
                title: "Prontuário Unificado",
                desc: "Agregue exames, prescrições e evoluções em uma única interface intuitiva e cronológica."
              },
              {
                icon: Brain,
                title: "Anamnese Assistida",
                desc: "Algoritmos que sugerem perguntas relevantes durante a entrevista com base no histórico prévio."
              },
              {
                icon: Stethoscope,
                title: "Monitoramento Ativo",
                desc: "Integração direta com equipamentos de sinais vitais para alertas de deterioração em tempo real."
              }
            ].map((item, i) => (
               <motion.div key={i} variants={fadeIn}>
                 <Card className="border-slate-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300">
                   <CardHeader>
                     <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                       <item.icon className="w-6 h-6" />
                     </div>
                     <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <CardDescription className="text-slate-500 text-base">
                       {item.desc}
                     </CardDescription>
                   </CardContent>
                 </Card>
               </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-emerald-900 text-white">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center text-center">
             <div className="w-full md:w-1/4 p-4 border-r border-emerald-800 last:border-0">
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-emerald-200 text-sm">Disponibilidade</div>
             </div>
             <div className="w-full md:w-1/4 p-4 border-r border-emerald-800 last:border-0">
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-emerald-200 text-sm">Redução em Erros</div>
             </div>
             <div className="w-full md:w-1/4 p-4 border-r border-emerald-800 last:border-0">
                <div className="text-4xl font-bold mb-2">5M+</div>
                <div className="text-emerald-200 text-sm">Prontuários Processados</div>
             </div>
             <div className="w-full md:w-1/4 p-4">
                <div className="text-4xl font-bold mb-2">LGPD</div>
                <div className="text-emerald-200 text-sm">Design Compliant</div>
             </div>
        </div>
      </section>

      <section id="seguranca" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2"> 
                 <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-100 relative">
                    <Lock className="w-12 h-12 text-emerald-500 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Segurança de Nível Bancário</h3>
                    <ul className="space-y-4">
                       <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <span className="text-slate-600">Criptografia ponta a ponta (AES-256)</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <span className="text-slate-600">Auditoria completa de acessos e edições</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <span className="text-slate-600">Backups automáticos e redundantes</span>
                       </li>
                    </ul>
                 </div>
              </div>
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Conformidade e Confiança</h2>
                 <p className="text-lg text-slate-600 mb-6">
                    Sabemos que dados de saúde são sensíveis. Por isso, nossa arquitetura foi desenhada desde o início para exceder os requisitos da LGPD e HIPAA.
                 </p>
                 <p className="text-lg text-slate-600">
                    Seus dados permanecem seus. Nossa plataforma apenas fornece a inteligência para interpretá-los melhor.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Pronto para modernizar seu hospital?</h2>
            <p className="text-slate-500 mb-10 text-lg max-w-2xl mx-auto">
              Junte-se a mais de 200 instituições de saúde que já utilizam o MedIntelli para salvar vidas com dados.
            </p>
            <div className="flex justify-center gap-4">
               <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 h-12">
                 Falar com Especialista
               </Button>
            </div>
            
            <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
              <div>&copy; 2026 MedIntelli Sistemas. Todos os direitos reservados.</div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                 <a href="#" className="hover:text-emerald-600 transition-colors">Privacidade</a>
                 <a href="#" className="hover:text-emerald-600 transition-colors">Termos de Uso</a>
                 <a href="#" className="hover:text-emerald-600 transition-colors">Suporte</a>
              </div>
            </div>
        </div>
      </footer>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
        <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isChatOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20, pointerEvents: "none" }}
              transition={{ duration: 0.2 }}
              className={`mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden ${isChatOpen ? 'block' : 'hidden'}`}
            >
              <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                     <Brain className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <h3 className="font-bold text-sm">Assistente MedIntelli</h3>
                     <span className="text-xs text-emerald-100 flex items-center gap-1">
                       <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"/> Online
                     </span>
                   </div>
                </div>
              </div>
              <div className="p-4 h-64 overflow-y-auto bg-slate-50 space-y-4">
                 <div className="flex gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                       <Brain className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-50 text-sm text-slate-600">
                       Olá! Sou a IA da MedIntelli. Como posso ajudar a otimizar a triagem do seu hospital hoje?
                    </div>
                 </div>
                 <div className="flex gap-2 flex-row-reverse">
                    <div className="bg-emerald-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
                       Gostaria de saber sobre a integração com o sistema atual.
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
                       <Brain className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-50 text-sm text-slate-600">
                       Nossa API é universal (HL7/FHIR) e se conecta a 99% dos ERPs hospitalares sem interromper sua operação. Quer agendar uma demo técnica?
                    </div>
                 </div>
              </div>
              <div className="p-3 border-t border-slate-100 bg-white">
                 <div className="flex gap-2">
                    <input type="text" placeholder="Digite sua dúvida..." className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
                    <Button size="icon" className="rounded-full w-10 h-10 bg-emerald-600 hover:bg-emerald-700">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Button>
                 </div>
              </div>
            </motion.div>
        
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center pointer-events-auto"
            >
               {isChatOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
               )}
            </motion.button>
        </div>
      </div>
    </div>
  )
}

export default App
