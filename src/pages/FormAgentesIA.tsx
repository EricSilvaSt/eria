import { useState } from 'react';
import { Bot } from 'lucide-react';
import ProgressBar from '../components/forms/ProgressBar';
import FormNavigation from '../components/forms/FormNavigation';
import FormModal from '../components/forms/FormModal';
import SEO from '../components/SEO';
import { formService, FormSubmissionData, AgentesIAFormData } from '../services/formService';

export default function FormAgentesIA() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', isError: false });

  const [formData, setFormData] = useState({
    nome_empresa: '',
    cnpj: '',
    nome_responsavel: '',
    email_responsavel: '',
    contato_responsavel: '',
    setor: '',
    missao_agente: '',
    tarefas_agente: '',
    publico_alvo: '',
    restricoes_agente: '',
    fonte_primaria: '',
    links_conhecimento: '',
    perguntas_frequentes: '',
    regras_seguranca: '',
    nome_agente: '',
    pronome_agente: '',
    tom_de_voz: '',
    palavras_personalidade: '',
    idiomas: '',
    integracoes: '',
    procedimento_escalation: '',
    metricas_sucesso: '',
    observacoes_finais: '',
  });

  const stepTitles = [
    'Etapa 1 de 5: Informações Básicas da Empresa',
    'Etapa 2 de 5: Propósito e Missão do Agente de IA',
    'Etapa 3 de 5: Base de Conhecimento e Dados',
    'Etapa 4 de 5: Personalidade, Tom de Voz e Idioma',
    'Etapa 5 de 5: Contexto Operacional e Integração',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = (step: number): boolean => {
    const requiredFields: Record<number, string[]> = {
      1: ['nome_empresa', 'nome_responsavel', 'email_responsavel', 'contato_responsavel', 'setor'],
      2: ['missao_agente', 'tarefas_agente', 'publico_alvo'],
      3: ['fonte_primaria'],
      4: ['tom_de_voz', 'palavras_personalidade', 'idiomas'],
      5: ['procedimento_escalation', 'metricas_sucesso'],
    };

    const fields = requiredFields[step] || [];
    for (const field of fields) {
      if (!formData[field as keyof typeof formData]?.trim()) {
        setModal({
          isOpen: true,
          title: 'Campos Obrigatórios',
          message: 'Por favor, preencha todos os campos marcados com * antes de avançar.',
          isError: true,
        });
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(totalSteps)) return;

    setIsSubmitting(true);
    try {
      const baseData: FormSubmissionData = {
        service_type: 'agentes_ia',
        nome_empresa: formData.nome_empresa,
        cnpj: formData.cnpj,
        nome_responsavel: formData.nome_responsavel,
        email_responsavel: formData.email_responsavel,
        contato_responsavel: formData.contato_responsavel,
        setor: formData.setor,
      };

      const specificData: AgentesIAFormData = {
        missao_agente: formData.missao_agente,
        tarefas_agente: formData.tarefas_agente,
        publico_alvo: formData.publico_alvo,
        restricoes_agente: formData.restricoes_agente,
        fonte_primaria: formData.fonte_primaria,
        links_conhecimento: formData.links_conhecimento,
        perguntas_frequentes: formData.perguntas_frequentes,
        regras_seguranca: formData.regras_seguranca,
        nome_agente: formData.nome_agente,
        pronome_agente: formData.pronome_agente,
        tom_de_voz: formData.tom_de_voz,
        palavras_personalidade: formData.palavras_personalidade,
        idiomas: formData.idiomas,
        integracoes: formData.integracoes,
        procedimento_escalation: formData.procedimento_escalation,
        metricas_sucesso: formData.metricas_sucesso,
        observacoes_finais: formData.observacoes_finais,
      };

      await formService.submitAgentesIAForm(baseData, specificData);

      setModal({
        isOpen: true,
        title: 'Sucesso!',
        message: 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.',
        isError: false,
      });

      setTimeout(() => {
        window.location.href = '/agentes-ia';
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setModal({
        isOpen: true,
        title: 'Erro ao Enviar',
        message: 'Não foi possível enviar o formulário. Tente novamente ou entre em contato conosco.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="Criar Agente de IA Personalizado | ER.IA - Automação de Vendas"
        description="Solicite a criação de um Agente de IA personalizado para WhatsApp. Automatize atendimento, qualifique leads e aumente suas conversões com inteligência artificial."
        keywords="agente de IA personalizado, criar chatbot, automação WhatsApp, IA para vendas, bot inteligente"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <header className="mb-8 border-b pb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Bot className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Criação de Agente de IA Personalizado
              </h1>
            </div>
            <p className="text-gray-600">
              Coleta de dados essenciais para construir um agente de IA sob medida para seu negócio.
            </p>
          </header>

          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepTitle={stepTitles[currentStep - 1]}
          />

          <form>
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-700">1. Identificação da Empresa</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="text-gray-700">
                      Nome da Empresa <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="nome_empresa"
                      value={formData.nome_empresa}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">CNPJ</span>
                    <input
                      type="text"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      Nome do Responsável <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="nome_responsavel"
                      value={formData.nome_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      E-mail do Responsável <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email_responsavel"
                      value={formData.email_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      Telefone/WhatsApp <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="tel"
                      name="contato_responsavel"
                      value={formData.contato_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      Setor/Ramo de Atividade <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="setor"
                      value={formData.setor}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-700">2. Propósito e Missão do Agente de IA</h2>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Qual será o principal papel/missão do Agente de IA? <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="missao_agente"
                    value={formData.missao_agente}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Atendimento ao Cliente, Pré-vendas, Suporte Interno"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Quais são as 3 principais tarefas que o Agente DEVE executar? <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="tarefas_agente"
                    value={formData.tarefas_agente}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Liste em ordem de prioridade"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Qual é o público-alvo principal? <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="publico_alvo"
                    value={formData.publico_alvo}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Clientes finais, Potenciais clientes"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Quais ações o Agente DEVE se recusar a fazer?</span>
                  <textarea
                    name="restricoes_agente"
                    value={formData.restricoes_agente}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ex: Acessar dados financeiros, fazer promessas de preço"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-700">3. Base de Conhecimento e Fontes de Dados</h2>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Fonte primária de informação do Agente <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="fonte_primaria"
                    value={formData.fonte_primaria}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Manual de Produtos, FAQs, Página Sobre Nós"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Links de documentos, manuais ou FAQs</span>
                  <textarea
                    name="links_conhecimento"
                    value={formData.links_conhecimento}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Separe por linha ou vírgula"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">5 perguntas mais frequentes (FAQ)</span>
                  <textarea
                    name="perguntas_frequentes"
                    value={formData.perguntas_frequentes}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Regras de segurança/privacidade</span>
                  <textarea
                    name="regras_seguranca"
                    value={formData.regras_seguranca}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-700">4. Personalidade, Tom de Voz e Idioma</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <label className="block">
                    <span className="text-gray-700">Nome sugerido para o Agente</span>
                    <input
                      type="text"
                      name="nome_agente"
                      value={formData.nome_agente}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Pronome do Agente</span>
                    <input
                      type="text"
                      name="pronome_agente"
                      value={formData.pronome_agente}
                      onChange={handleChange}
                      placeholder="Ex: Ele/Dele, Ela/Dela, Neutro"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                </div>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Tom de Voz Desejado <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="tom_de_voz"
                    value={formData.tom_de_voz}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Formal, Amigável/Casual, Técnico, Empático"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    3 palavras-chave da personalidade <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="palavras_personalidade"
                    value={formData.palavras_personalidade}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Eficiente, Calmo, Proativo"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">
                    Linguagem Principal <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="idiomas"
                    value={formData.idiomas}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Português (Principal), Inglês (Secundário)"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-700">5. Contexto Operacional e Integração</h2>
                <label className="block mb-6">
                  <span className="text-gray-700">Integrações com sistemas de terceiros</span>
                  <textarea
                    name="integracoes"
                    value={formData.integracoes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ex: CRM, ERP, Base de Dados Interna, Calendário"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Procedimento de Escalation <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="procedimento_escalation"
                    value={formData.procedimento_escalation}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Após 3 falhas, ao digitar 'Falar com atendente'"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">
                    Métricas de sucesso <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="metricas_sucesso"
                    value={formData.metricas_sucesso}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Ex: Taxa de Resolução na 1ª Interação, Redução de Tempo Médio"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Observações adicionais</span>
                  <textarea
                    name="observacoes_finais"
                    value={formData.observacoes_finais}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            <FormNavigation
              currentStep={currentStep}
              totalSteps={totalSteps}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </form>

          <FormModal
            isOpen={modal.isOpen}
            title={modal.title}
            message={modal.message}
            isError={modal.isError}
            onClose={() => setModal({ ...modal, isOpen: false })}
          />
        </div>
      </div>
    </div>
  );
}
