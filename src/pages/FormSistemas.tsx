import { useState } from 'react';
import { Settings } from 'lucide-react';
import ProgressBar from '../components/forms/ProgressBar';
import FormNavigation from '../components/forms/FormNavigation';
import FormModal from '../components/forms/FormModal';
import SEO from '../components/SEO';
import { formService, FormSubmissionData, SistemasFormData } from '../services/formService';

export default function FormSistemas() {
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
    tipo_sistema: '',
    objetivo: '',
    problema: '',
    publico_alvo: '',
    tem_sistema_atual: '',
    sistema_atual_detalhes: '',
    funcionalidades: '',
    fluxo: '',
    niveis_acesso: '',
    usuarios_estimados: '',
    integracoes: '',
    banco_dados_preferencia: '',
    plataformas: '',
    hospedagem_preferencia: '',
    relatorios: '',
    prazo: '',
    orcamento_estimado: '',
    observacoes: '',
  });

  const stepTitles = [
    'Etapa 1 de 5: Empresa / Contato',
    'Etapa 2 de 5: Tipo de Sistema & Contexto',
    'Etapa 3 de 5: Funcionalidades & Fluxo',
    'Etapa 4 de 5: Integrações & Infraestrutura',
    'Etapa 5 de 5: Prazo, Orçamento & Observações',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = (step: number): boolean => {
    const requiredFields: Record<number, string[]> = {
      1: ['nome_empresa', 'nome_responsavel', 'email_responsavel', 'contato_responsavel'],
      2: ['tipo_sistema', 'objetivo', 'problema'],
      3: ['funcionalidades'],
      4: ['plataformas'],
      5: [],
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
        service_type: 'sistemas',
        nome_empresa: formData.nome_empresa,
        cnpj: formData.cnpj,
        nome_responsavel: formData.nome_responsavel,
        email_responsavel: formData.email_responsavel,
        contato_responsavel: formData.contato_responsavel,
        setor: formData.setor,
      };

      const specificData: SistemasFormData = {
        objetivo: `${formData.tipo_sistema} - ${formData.objetivo}`,
        problema: formData.problema,
        publico_alvo: `${formData.publico_alvo} | Usuários estimados: ${formData.usuarios_estimados} | Sistema atual: ${formData.tem_sistema_atual} ${formData.sistema_atual_detalhes}`,
        funcionalidades: formData.funcionalidades,
        fluxo: formData.fluxo,
        niveis_acesso: formData.niveis_acesso,
        integracoes: formData.integracoes,
        plataformas: `${formData.plataformas} | BD: ${formData.banco_dados_preferencia} | Hospedagem: ${formData.hospedagem_preferencia}`,
        relatorios: formData.relatorios,
        prazo: `${formData.prazo} | Orçamento: ${formData.orcamento_estimado}`,
        observacoes: formData.observacoes,
      };

      await formService.submitSistemasForm(baseData, specificData);

      setModal({
        isOpen: true,
        title: 'Sucesso!',
        message: 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.',
        isError: false,
      });

      setTimeout(() => {
        window.location.href = '/sistemas';
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
        title="Solicitar Desenvolvimento de Sistema Personalizado | ER.IA"
        description="Solicite o desenvolvimento de sistema sob medida para sua empresa. ERP, CRM, gestão empresarial e muito mais."
        keywords="sistema personalizado, desenvolvimento software, ERP customizado, sistema gestão"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <header className="mb-8 border-b pb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Desenvolvimento de Sistema Personalizado
              </h1>
            </div>
            <p className="text-gray-600">
              Descreva sua necessidade para construirmos uma solução sob medida.
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
                <h2 className="text-lg font-semibold mb-4">1. Dados da Empresa / Contato</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-gray-700">Nome da Empresa <span className="text-red-500">*</span></span>
                    <input
                      name="nome_empresa"
                      value={formData.nome_empresa}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">CNPJ</span>
                    <input
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Nome do Responsável <span className="text-red-500">*</span></span>
                    <input
                      name="nome_responsavel"
                      value={formData.nome_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">E-mail do Responsável <span className="text-red-500">*</span></span>
                    <input
                      name="email_responsavel"
                      type="email"
                      value={formData.email_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">WhatsApp <span className="text-red-500">*</span></span>
                    <input
                      name="contato_responsavel"
                      value={formData.contato_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Ramo / Setor</span>
                    <input
                      name="setor"
                      value={formData.setor}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">2. Tipo de Sistema & Contexto</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Tipo de sistema <span className="text-red-500">*</span></span>
                  <select
                    name="tipo_sistema"
                    value={formData.tipo_sistema}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="erp">ERP - Gestão Empresarial</option>
                    <option value="crm">CRM - Gestão de Clientes</option>
                    <option value="gestao_estoque">Sistema de Gestão de Estoque</option>
                    <option value="gestao_financeira">Sistema Financeiro</option>
                    <option value="gestao_projetos">Gestão de Projetos</option>
                    <option value="rh">Sistema de RH</option>
                    <option value="helpdesk">Help Desk / Suporte</option>
                    <option value="agendamento">Sistema de Agendamento</option>
                    <option value="marketplace">Marketplace / Plataforma</option>
                    <option value="outro">Outro</option>
                  </select>
                </label>

                {formData.tipo_sistema && (
                  <>
                    <label className="block mb-4">
                      <span className="text-gray-700">Você já possui algum sistema? <span className="text-red-500">*</span></span>
                      <select
                        name="tem_sistema_atual"
                        value={formData.tem_sistema_atual}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                      >
                        <option value="">Selecione...</option>
                        <option value="nao">Não, começaremos do zero</option>
                        <option value="planilhas">Sim, uso planilhas</option>
                        <option value="sistema_legado">Sim, sistema antigo que precisa ser substituído</option>
                        <option value="sistema_parcial">Sim, mas preciso de melhorias/expansão</option>
                      </select>
                    </label>

                    {formData.tem_sistema_atual && formData.tem_sistema_atual !== 'nao' && (
                      <label className="block mb-4">
                        <span className="text-gray-700">Descreva o sistema atual e suas limitações</span>
                        <textarea
                          name="sistema_atual_detalhes"
                          value={formData.sistema_atual_detalhes}
                          onChange={handleChange}
                          rows={3}
                          className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                        />
                      </label>
                    )}
                  </>
                )}

                <label className="block mb-4">
                  <span className="text-gray-700">Objetivo principal do sistema <span className="text-red-500">*</span></span>
                  <textarea
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Ex: Automatizar processos, centralizar informações, melhorar controle..."
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Que problema o sistema deve resolver? <span className="text-red-500">*</span></span>
                  <textarea
                    name="problema"
                    value={formData.problema}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-gray-700">Quem serão os usuários?</span>
                    <input
                      name="publico_alvo"
                      value={formData.publico_alvo}
                      onChange={handleChange}
                      placeholder="Ex: Equipe interna, clientes, parceiros"
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Quantidade estimada de usuários</span>
                    <input
                      name="usuarios_estimados"
                      value={formData.usuarios_estimados}
                      onChange={handleChange}
                      placeholder="Ex: 10-50, 50-100, 100+"
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">3. Funcionalidades & Fluxo</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Funcionalidades necessárias <span className="text-red-500">*</span></span>
                  <textarea
                    name="funcionalidades"
                    value={formData.funcionalidades}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Liste todas as funcionalidades que o sistema deve ter. Seja o mais detalhado possível."
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Fluxo de trabalho / Passo a passo</span>
                  <textarea
                    name="fluxo"
                    value={formData.fluxo}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Como o sistema deve funcionar? Descreva o fluxo de uso principal."
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Níveis de acesso / Permissões</span>
                  <textarea
                    name="niveis_acesso"
                    value={formData.niveis_acesso}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ex: Admin (acesso total), Gerente (visualizar e editar), Operador (apenas visualizar)"
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">Relatórios e análises necessárias</span>
                  <textarea
                    name="relatorios"
                    value={formData.relatorios}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Que tipo de relatórios você precisa gerar? Ex: Vendas, estoque, financeiro, desempenho..."
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">4. Integrações & Infraestrutura</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Integrações necessárias</span>
                  <textarea
                    name="integracoes"
                    value={formData.integracoes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ex: API de pagamento, sistema contábil, envio de e-mails, WhatsApp, ERP existente..."
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Plataforma alvo <span className="text-red-500">*</span></span>
                  <select
                    name="plataformas"
                    value={formData.plataformas}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="web">Web (acesso via navegador)</option>
                    <option value="mobile">Mobile (App Android/iOS)</option>
                    <option value="desktop">Desktop (Windows/Mac/Linux)</option>
                    <option value="web_mobile">Web + Mobile</option>
                    <option value="todas">Todas as plataformas</option>
                  </select>
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Preferência de banco de dados</span>
                  <select
                    name="banco_dados_preferencia"
                    value={formData.banco_dados_preferencia}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  >
                    <option value="">Sem preferência (recomendação do desenvolvedor)</option>
                    <option value="postgresql">PostgreSQL</option>
                    <option value="mysql">MySQL</option>
                    <option value="sqlserver">SQL Server</option>
                    <option value="mongodb">MongoDB</option>
                    <option value="supabase">Supabase</option>
                    <option value="firebase">Firebase</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-gray-700">Preferência de hospedagem</span>
                  <select
                    name="hospedagem_preferencia"
                    value={formData.hospedagem_preferencia}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                  >
                    <option value="">Sem preferência</option>
                    <option value="nuvem_gerenciada">Nuvem gerenciada pela ER.IA</option>
                    <option value="servidor_cliente">Servidor do cliente</option>
                    <option value="aws">AWS</option>
                    <option value="azure">Azure</option>
                    <option value="google_cloud">Google Cloud</option>
                    <option value="local">On-premise (servidor local)</option>
                  </select>
                </label>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">5. Prazo, Orçamento & Observações</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <label className="block">
                    <span className="text-gray-700">Prazo desejado</span>
                    <select
                      name="prazo"
                      value={formData.prazo}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    >
                      <option value="">Selecione...</option>
                      <option value="urgente">Urgente (até 1 mês)</option>
                      <option value="curto">Curto prazo (1-3 meses)</option>
                      <option value="medio">Médio prazo (3-6 meses)</option>
                      <option value="longo">Longo prazo (6+ meses)</option>
                      <option value="flexivel">Flexível</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-gray-700">Orçamento estimado</span>
                    <select
                      name="orcamento_estimado"
                      value={formData.orcamento_estimado}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
                    >
                      <option value="">Selecione...</option>
                      <option value="ate_10k">Até R$ 10.000</option>
                      <option value="10k_30k">R$ 10.000 - R$ 30.000</option>
                      <option value="30k_50k">R$ 30.000 - R$ 50.000</option>
                      <option value="50k_100k">R$ 50.000 - R$ 100.000</option>
                      <option value="100k_mais">Acima de R$ 100.000</option>
                      <option value="aberto">Orçamento aberto</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-gray-700">Observações adicionais ou requisitos específicos</span>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Alguma informação adicional importante para o desenvolvimento do sistema?"
                    className="mt-1 w-full p-3 rounded border focus:border-purple-500 focus:ring focus:ring-purple-200"
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
