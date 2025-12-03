import { supabase } from '../lib/supabase';

export interface FormSubmissionData {
  service_type: 'agentes_ia' | 'sites' | 'sistemas' | 'ecommerce';
  nome_empresa: string;
  cnpj?: string;
  nome_responsavel: string;
  email_responsavel: string;
  contato_responsavel: string;
  setor?: string;
}

export interface AgentesIAFormData {
  missao_agente?: string;
  tarefas_agente?: string;
  publico_alvo?: string;
  restricoes_agente?: string;
  fonte_primaria?: string;
  links_conhecimento?: string;
  perguntas_frequentes?: string;
  regras_seguranca?: string;
  nome_agente?: string;
  pronome_agente?: string;
  tom_de_voz?: string;
  palavras_personalidade?: string;
  idiomas?: string;
  integracoes?: string;
  procedimento_escalation?: string;
  metricas_sucesso?: string;
  observacoes_finais?: string;
}

export interface SitesFormData {
  tipo_projeto?: string;
  objetivo?: string;
  publico_alvo?: string;
  identidade_visual?: string;
  referencias_visuais?: string;
  paginas?: string;
  funcionalidades?: string;
  integracoes?: string;
  produtos?: string;
  forma_entrega?: string;
  prazo?: string;
  observacoes?: string;
}

export interface SistemasFormData {
  objetivo?: string;
  problema?: string;
  publico_alvo?: string;
  funcionalidades?: string;
  fluxo?: string;
  niveis_acesso?: string;
  integracoes?: string;
  plataformas?: string;
  relatorios?: string;
  prazo?: string;
  observacoes?: string;
}

export interface EcommerceFormData {
  tipo_produtos?: string;
  numero_produtos?: string;
  categorias?: string;
  meios_pagamento?: string;
  logistica?: string;
  integracoes?: string;
  marketplaces?: string;
  funcionalidades_extras?: string;
  prazo?: string;
  observacoes?: string;
}

export const formService = {
  async submitAgentesIAForm(
    baseData: FormSubmissionData,
    specificData: AgentesIAFormData
  ) {
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert([baseData])
      .select()
      .single();

    if (submissionError) throw submissionError;

    const { error: specificError } = await supabase
      .from('form_agentes_ia')
      .insert([{ submission_id: submission.id, ...specificData }]);

    if (specificError) throw specificError;

    return submission;
  },

  async submitSitesForm(
    baseData: FormSubmissionData,
    specificData: SitesFormData
  ) {
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert([baseData])
      .select()
      .single();

    if (submissionError) throw submissionError;

    const { error: specificError } = await supabase
      .from('form_sites')
      .insert([{ submission_id: submission.id, ...specificData }]);

    if (specificError) throw specificError;

    return submission;
  },

  async submitSistemasForm(
    baseData: FormSubmissionData,
    specificData: SistemasFormData
  ) {
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert([baseData])
      .select()
      .single();

    if (submissionError) throw submissionError;

    const { error: specificError } = await supabase
      .from('form_sistemas')
      .insert([{ submission_id: submission.id, ...specificData }]);

    if (specificError) throw specificError;

    return submission;
  },

  async submitEcommerceForm(
    baseData: FormSubmissionData,
    specificData: EcommerceFormData
  ) {
    const { data: submission, error: submissionError } = await supabase
      .from('form_submissions')
      .insert([baseData])
      .select()
      .single();

    if (submissionError) throw submissionError;

    const { error: specificError } = await supabase
      .from('form_ecommerces')
      .insert([{ submission_id: submission.id, ...specificData }]);

    if (specificError) throw specificError;

    return submission;
  },
};
