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

type Details = AgentesIAFormData | SitesFormData | SistemasFormData | EcommerceFormData;

async function submit(baseData: FormSubmissionData, details: Details) {
  const response = await fetch('/api/form-submission', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ baseData, details }),
  });
  const result = await response.json().catch(() => null) as { error?: string; submission?: unknown } | null;

  if (!response.ok) {
    throw new Error(result?.error || 'Não foi possível enviar o formulário. Tente novamente.');
  }

  return result?.submission;
}

export const formService = {
  submitAgentesIAForm: submit,
  submitSitesForm: submit,
  submitSistemasForm: submit,
  submitEcommerceForm: submit,
};
