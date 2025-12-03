import { useState } from 'react';
import { Globe } from 'lucide-react';
import ProgressBar from '../components/forms/ProgressBar';
import FormNavigation from '../components/forms/FormNavigation';
import FormModal from '../components/forms/FormModal';
import SEO from '../components/SEO';
import { formService, FormSubmissionData, SitesFormData } from '../services/formService';

export default function FormSites() {
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
    tipo_projeto: '',
    objetivo: '',
    publico_alvo: '',
    identidade_visual: '',
    referencias_visuais: '',
    paginas: '',
    funcionalidades: '',
    integracoes: '',
    produtos: '',
    forma_entrega: '',
    prazo: '',
    observacoes: '',
  });

  const stepTitles = [
    'Etapa 1 de 5: Empresa / Contato',
    'Etapa 2 de 5: Tipo & Objetivos',
    'Etapa 3 de 5: Conteúdo & Design',
    'Etapa 4 de 5: Funcionalidades',
    'Etapa 5 de 5: Entrega & Observações',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = (step: number): boolean => {
    const requiredFields: Record<number, string[]> = {
      1: ['nome_empresa', 'nome_responsavel', 'email_responsavel', 'contato_responsavel'],
      2: ['tipo_projeto'],
      3: [],
      4: [],
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
        service_type: 'sites',
        nome_empresa: formData.nome_empresa,
        cnpj: formData.cnpj,
        nome_responsavel: formData.nome_responsavel,
        email_responsavel: formData.email_responsavel,
        contato_responsavel: formData.contato_responsavel,
        setor: formData.setor,
      };

      const specificData: SitesFormData = {
        tipo_projeto: formData.tipo_projeto,
        objetivo: formData.objetivo,
        publico_alvo: formData.publico_alvo,
        identidade_visual: formData.identidade_visual,
        referencias_visuais: formData.referencias_visuais,
        paginas: formData.paginas,
        funcionalidades: formData.funcionalidades,
        integracoes: formData.integracoes,
        produtos: formData.produtos,
        forma_entrega: formData.forma_entrega,
        prazo: formData.prazo,
        observacoes: formData.observacoes,
      };

      await formService.submitSitesForm(baseData, specificData);

      setModal({
        isOpen: true,
        title: 'Sucesso!',
        message: 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.',
        isError: false,
      });

      setTimeout(() => {
        window.location.href = '/sites';
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
        title="Solicitar Criação de Site ou Landing Page | ER.IA"
        description="Solicite a criação de site profissional, landing page ou e-commerce. Preencha o formulário e receba uma proposta personalizada."
        keywords="criar site, desenvolvimento web, landing page, orçamento site"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <header className="mb-8 border-b pb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Criação de Site / Landing / E-commerce
              </h1>
            </div>
            <p className="text-gray-600">
              Coleta de informações para entendermos seu projeto.
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
                      className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">CNPJ</span>
                    <input
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Nome do Responsável <span className="text-red-500">*</span></span>
                    <input
                      name="nome_responsavel"
                      value={formData.nome_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
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
                      className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">WhatsApp <span className="text-red-500">*</span></span>
                    <input
                      name="contato_responsavel"
                      value={formData.contato_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Ramo / Setor</span>
                    <input
                      name="setor"
                      value={formData.setor}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">2. Tipo de Projeto & Objetivos</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Tipo de projeto <span className="text-red-500">*</span></span>
                  <select
                    name="tipo_projeto"
                    value={formData.tipo_projeto}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="site_institucional">Site Institucional</option>
                    <option value="landing_page">Landing Page</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="portfolio">Portfólio</option>
                    <option value="blog">Blog</option>
                    <option value="catalogo">Catálogo</option>
                    <option value="outro">Outro</option>
                  </select>
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700">Objetivo principal</span>
                  <textarea
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700">Público-alvo</span>
                  <textarea
                    name="publico_alvo"
                    value={formData.publico_alvo}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">3. Conteúdo e Design</h2>
                <label className="block mb-3">
                  <span className="text-gray-700">Já possui logo / identidade?</span>
                  <select
                    name="identidade_visual"
                    value={formData.identidade_visual}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="">--</option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Referências visuais (links)</span>
                  <textarea
                    name="referencias_visuais"
                    value={formData.referencias_visuais}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Páginas desejadas (ex.: Home, Sobre, Contato, Loja)</span>
                  <textarea
                    name="paginas"
                    value={formData.paginas}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">4. Funcionalidades & Integrações</h2>
                <label className="block mb-3">
                  <span className="text-gray-700">Funcionalidades necessárias</span>
                  <textarea
                    name="funcionalidades"
                    value={formData.funcionalidades}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Integrações (pagamento, ERP, CRM, APIs)</span>
                  <textarea
                    name="integracoes"
                    value={formData.integracoes}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Produtos (se e-commerce)</span>
                  <textarea
                    name="produtos"
                    value={formData.produtos}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">5. Entrega, Prazo e Observações</h2>
                <label className="block mb-3">
                  <span className="text-gray-700">Forma de entrega</span>
                  <select
                    name="forma_entrega"
                    value={formData.forma_entrega}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="">--</option>
                    <option value="chave_na_mao">Chave na mão</option>
                    <option value="apenas_orcamento">Apenas orçamento</option>
                  </select>
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Prazo desejado</span>
                  <input
                    name="prazo"
                    value={formData.prazo}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Observações adicionais</span>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full p-3 rounded border focus:border-blue-500 focus:ring focus:ring-blue-200"
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
