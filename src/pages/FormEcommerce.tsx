import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import ProgressBar from '../components/forms/ProgressBar';
import FormNavigation from '../components/forms/FormNavigation';
import FormModal from '../components/forms/FormModal';
import SEO from '../components/SEO';
import { formService, FormSubmissionData, EcommerceFormData } from '../services/formService';

export default function FormEcommerce() {
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
    tipo_ecommerce: '',
    modelo_negocio: '',
    tipo_produtos: '',
    numero_produtos: '',
    categorias: '',
    tem_estoque_fisico: '',
    fornecedores_dropshipping: '',
    meios_pagamento: '',
    parcelamento_desejado: '',
    calculo_frete: '',
    transportadoras: '',
    retirada_local: '',
    integracao_erp: '',
    integracoes: '',
    marketplaces: '',
    possui_conteudo: '',
    funcionalidades_extras: '',
    design_referencia: '',
    prazo: '',
    orcamento_estimado: '',
    observacoes: '',
  });

  const stepTitles = [
    'Etapa 1 de 5: Empresa / Contato',
    'Etapa 2 de 5: Tipo de E-commerce & Produtos',
    'Etapa 3 de 5: Pagamento & Logística',
    'Etapa 4 de 5: Integrações & Funcionalidades',
    'Etapa 5 de 5: Design, Prazo & Orçamento',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = (step: number): boolean => {
    const requiredFields: Record<number, string[]> = {
      1: ['nome_empresa', 'nome_responsavel', 'email_responsavel', 'contato_responsavel'],
      2: ['tipo_ecommerce', 'modelo_negocio', 'tipo_produtos'],
      3: ['meios_pagamento', 'calculo_frete'],
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
        service_type: 'ecommerce',
        nome_empresa: formData.nome_empresa,
        cnpj: formData.cnpj,
        nome_responsavel: formData.nome_responsavel,
        email_responsavel: formData.email_responsavel,
        contato_responsavel: formData.contato_responsavel,
        setor: formData.setor,
      };

      const specificData: EcommerceFormData = {
        tipo_produtos: `${formData.tipo_ecommerce} | ${formData.modelo_negocio} | ${formData.tipo_produtos}`,
        numero_produtos: `${formData.numero_produtos} | Estoque físico: ${formData.tem_estoque_fisico} | ${formData.fornecedores_dropshipping}`,
        categorias: formData.categorias,
        meios_pagamento: `${formData.meios_pagamento} | Parcelamento: ${formData.parcelamento_desejado}`,
        logistica: `Frete: ${formData.calculo_frete} | Transportadoras: ${formData.transportadoras} | Retirada local: ${formData.retirada_local}`,
        integracoes: `ERP: ${formData.integracao_erp} | Outras: ${formData.integracoes}`,
        marketplaces: formData.marketplaces,
        funcionalidades_extras: `Conteúdo: ${formData.possui_conteudo} | Extras: ${formData.funcionalidades_extras}`,
        prazo: `${formData.prazo} | Orçamento: ${formData.orcamento_estimado} | Design: ${formData.design_referencia}`,
        observacoes: formData.observacoes,
      };

      await formService.submitEcommerceForm(baseData, specificData);

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
        title="Criar E-commerce Profissional | ER.IA - Loja Virtual"
        description="Solicite a criação de sua loja virtual profissional. E-commerce completo com pagamentos, gestão de estoque e integrações."
        keywords="criar ecommerce, loja virtual, loja online, desenvolvimento ecommerce"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <header className="mb-8 border-b pb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Criação de E-commerce Profissional
              </h1>
            </div>
            <p className="text-gray-600">
              Vamos criar sua loja virtual completa e personalizada.
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
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">CNPJ</span>
                    <input
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Nome do Responsável <span className="text-red-500">*</span></span>
                    <input
                      name="nome_responsavel"
                      value={formData.nome_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
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
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">WhatsApp <span className="text-red-500">*</span></span>
                    <input
                      name="contato_responsavel"
                      value={formData.contato_responsavel}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Ramo / Nicho</span>
                    <input
                      name="setor"
                      value={formData.setor}
                      onChange={handleChange}
                      placeholder="Ex: Moda, Eletrônicos, Alimentos"
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">2. Tipo de E-commerce & Produtos</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Tipo de e-commerce <span className="text-red-500">*</span></span>
                  <select
                    name="tipo_ecommerce"
                    value={formData.tipo_ecommerce}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="b2c">B2C - Venda para consumidor final</option>
                    <option value="b2b">B2B - Venda para empresas</option>
                    <option value="marketplace">Marketplace - Múltiplos vendedores</option>
                    <option value="assinatura">Clube de Assinatura</option>
                    <option value="servicos">Venda de Serviços</option>
                  </select>
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Modelo de negócio <span className="text-red-500">*</span></span>
                  <select
                    name="modelo_negocio"
                    value={formData.modelo_negocio}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="estoque_proprio">Estoque Próprio</option>
                    <option value="dropshipping">Dropshipping</option>
                    <option value="hibrido">Híbrido (próprio + dropshipping)</option>
                    <option value="sob_demanda">Produção sob demanda</option>
                  </select>
                </label>

                {formData.modelo_negocio && (
                  <>
                    {(formData.modelo_negocio === 'estoque_proprio' || formData.modelo_negocio === 'hibrido') && (
                      <label className="block mb-4">
                        <span className="text-gray-700">Possui estoque físico?</span>
                        <select
                          name="tem_estoque_fisico"
                          value={formData.tem_estoque_fisico}
                          onChange={handleChange}
                          className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                        >
                          <option value="">Selecione...</option>
                          <option value="sim">Sim, já tenho estoque</option>
                          <option value="nao_mas_planejo">Não, mas planejo ter</option>
                          <option value="terceirizado">Estoque terceirizado/fulfillment</option>
                        </select>
                      </label>
                    )}

                    {(formData.modelo_negocio === 'dropshipping' || formData.modelo_negocio === 'hibrido') && (
                      <label className="block mb-4">
                        <span className="text-gray-700">Fornecedores de dropshipping</span>
                        <textarea
                          name="fornecedores_dropshipping"
                          value={formData.fornecedores_dropshipping}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Liste os fornecedores ou plataformas que usará"
                          className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                        />
                      </label>
                    )}
                  </>
                )}

                <label className="block mb-4">
                  <span className="text-gray-700">Tipo de produtos <span className="text-red-500">*</span></span>
                  <input
                    name="tipo_produtos"
                    value={formData.tipo_produtos}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Roupas femininas, Eletrônicos, Alimentos orgânicos"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-gray-700">Quantidade inicial de produtos</span>
                    <select
                      name="numero_produtos"
                      value={formData.numero_produtos}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    >
                      <option value="">Selecione...</option>
                      <option value="1-50">1 a 50 produtos</option>
                      <option value="51-200">51 a 200 produtos</option>
                      <option value="201-500">201 a 500 produtos</option>
                      <option value="501-1000">501 a 1000 produtos</option>
                      <option value="1000+">Mais de 1000 produtos</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-gray-700">Principais categorias</span>
                    <input
                      name="categorias"
                      value={formData.categorias}
                      onChange={handleChange}
                      placeholder="Ex: Masculino, Feminino, Infantil"
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">3. Pagamento & Logística</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Meios de pagamento desejados <span className="text-red-500">*</span></span>
                  <textarea
                    name="meios_pagamento"
                    value={formData.meios_pagamento}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Ex: Cartão de crédito, Pix, Boleto, MercadoPago, PagSeguro, Stripe"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Parcelamento</span>
                  <select
                    name="parcelamento_desejado"
                    value={formData.parcelamento_desejado}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="ate_3x">Até 3x sem juros</option>
                    <option value="ate_6x">Até 6x sem juros</option>
                    <option value="ate_12x">Até 12x sem juros</option>
                    <option value="customizado">Customizado</option>
                  </select>
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Cálculo de frete <span className="text-red-500">*</span></span>
                  <select
                    name="calculo_frete"
                    value={formData.calculo_frete}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="correios">Correios</option>
                    <option value="melhor_envio">Melhor Envio</option>
                    <option value="frenet">Frenet</option>
                    <option value="transportadoras_proprias">Transportadoras próprias</option>
                    <option value="frete_fixo">Frete fixo por região</option>
                    <option value="frete_gratis">Frete grátis</option>
                  </select>
                </label>

                {formData.calculo_frete === 'transportadoras_proprias' && (
                  <label className="block mb-4">
                    <span className="text-gray-700">Transportadoras parceiras</span>
                    <input
                      name="transportadoras"
                      value={formData.transportadoras}
                      onChange={handleChange}
                      placeholder="Liste as transportadoras"
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </label>
                )}

                <label className="block">
                  <span className="text-gray-700">Retirada local</span>
                  <select
                    name="retirada_local"
                    value={formData.retirada_local}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="sim">Sim, terá opção de retirada</option>
                    <option value="nao">Não</option>
                  </select>
                </label>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">4. Integrações & Funcionalidades</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Integração com ERP/Sistema de gestão</span>
                  <select
                    name="integracao_erp"
                    value={formData.integracao_erp}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="nao_precisa">Não precisa</option>
                    <option value="bling">Bling</option>
                    <option value="tiny">Tiny ERP</option>
                    <option value="omie">Omie</option>
                    <option value="sap">SAP</option>
                    <option value="outro">Outro sistema</option>
                  </select>
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Venda em marketplaces</span>
                  <textarea
                    name="marketplaces"
                    value={formData.marketplaces}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Ex: Mercado Livre, Amazon, Magazine Luiza, Shopee"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Outras integrações necessárias</span>
                  <textarea
                    name="integracoes"
                    value={formData.integracoes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ex: Google Analytics, Facebook Pixel, CRM, Email marketing, WhatsApp"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-gray-700">Já possui fotos e descrições dos produtos?</span>
                  <select
                    name="possui_conteudo"
                    value={formData.possui_conteudo}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="completo">Sim, tudo pronto</option>
                    <option value="parcial">Parcialmente</option>
                    <option value="nao">Não, preciso de ajuda</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-gray-700">Funcionalidades extras</span>
                  <textarea
                    name="funcionalidades_extras"
                    value={formData.funcionalidades_extras}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ex: Blog, Cupons de desconto, Programa de fidelidade, Chat online, Lista de desejos, Comparador de produtos"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </label>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-lg font-semibold mb-4">5. Design, Prazo & Orçamento</h2>
                <label className="block mb-4">
                  <span className="text-gray-700">Referências de design / Concorrentes</span>
                  <textarea
                    name="design_referencia"
                    value={formData.design_referencia}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Links de sites que você gosta (layout, cores, funcionalidades)"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </label>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <label className="block">
                    <span className="text-gray-700">Prazo desejado</span>
                    <select
                      name="prazo"
                      value={formData.prazo}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    >
                      <option value="">Selecione...</option>
                      <option value="urgente">Urgente (até 1 mês)</option>
                      <option value="curto">Curto prazo (1-2 meses)</option>
                      <option value="medio">Médio prazo (2-4 meses)</option>
                      <option value="flexivel">Flexível</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-gray-700">Orçamento estimado</span>
                    <select
                      name="orcamento_estimado"
                      value={formData.orcamento_estimado}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
                    >
                      <option value="">Selecione...</option>
                      <option value="ate_5k">Até R$ 5.000</option>
                      <option value="5k_15k">R$ 5.000 - R$ 15.000</option>
                      <option value="15k_30k">R$ 15.000 - R$ 30.000</option>
                      <option value="30k_50k">R$ 30.000 - R$ 50.000</option>
                      <option value="50k_mais">Acima de R$ 50.000</option>
                      <option value="aberto">Orçamento aberto</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-gray-700">Observações adicionais</span>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Alguma informação adicional importante para o desenvolvimento do seu e-commerce?"
                    className="mt-1 w-full p-3 rounded border focus:border-green-500 focus:ring focus:ring-green-200"
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
