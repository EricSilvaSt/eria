import { createClient } from '@supabase/supabase-js';

interface ApiRequest {
  method?: string;
  body?: { baseData?: unknown; details?: unknown };
  headers: { referer?: string };
}

interface ApiResponse {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => unknown;
}

const SERVICE_LABELS = {
  agentes_ia: 'Agente de IA',
  sites: 'Site',
  sistemas: 'Sistema personalizado',
  ecommerce: 'E-commerce',
} as const;

type ServiceType = keyof typeof SERVICE_LABELS;
type FormValues = Record<string, unknown>;

const FIELD_LABELS: Record<string, string> = {
  nome_empresa: 'Empresa', cnpj: 'CNPJ', nome_responsavel: 'Responsável',
  email_responsavel: 'E-mail', contato_responsavel: 'Contato', setor: 'Setor',
  missao_agente: 'Missão do agente', tarefas_agente: 'Tarefas do agente', publico_alvo: 'Público-alvo',
  restricoes_agente: 'Restrições', fonte_primaria: 'Fonte primária', links_conhecimento: 'Links de conhecimento',
  perguntas_frequentes: 'Perguntas frequentes', regras_seguranca: 'Regras de segurança', nome_agente: 'Nome do agente',
  pronome_agente: 'Pronome do agente', tom_de_voz: 'Tom de voz', palavras_personalidade: 'Personalidade',
  idiomas: 'Idiomas', integracoes: 'Integrações', procedimento_escalation: 'Escalonamento',
  metricas_sucesso: 'Métricas de sucesso', observacoes_finais: 'Observações finais', tipo_projeto: 'Tipo de projeto',
  objetivo: 'Objetivo', identidade_visual: 'Identidade visual', referencias_visuais: 'Referências visuais',
  paginas: 'Páginas', funcionalidades: 'Funcionalidades', produtos: 'Produtos', forma_entrega: 'Forma de entrega',
  prazo: 'Prazo', observacoes: 'Observações', problema: 'Problema', fluxo: 'Fluxo', niveis_acesso: 'Níveis de acesso',
  plataformas: 'Plataformas', relatorios: 'Relatórios', tipo_produtos: 'Tipos de produtos', numero_produtos: 'Número de produtos',
  categorias: 'Categorias', meios_pagamento: 'Meios de pagamento', logistica: 'Logística', marketplaces: 'Marketplaces',
  funcionalidades_extras: 'Funcionalidades extras',
};

function cleanValues(input: unknown): FormValues {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return {};
  return Object.fromEntries(Object.entries(input as FormValues).flatMap(([key, value]) => {
    if (!/^[a-z_]+$/.test(key) || typeof value !== 'string') return [];
    const cleanValue = value.trim().slice(0, 10_000);
    return cleanValue ? [[key, cleanValue]] : [];
  }));
}

function escapeHtml(value: unknown) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character] || character);
}

function csvCell(value: unknown) {
  const safe = String(value).replace(/^([=+\-@])/, "'$1").replace(/"/g, '""');
  return `"${safe}"`;
}

function rowsFrom(values: FormValues) {
  return Object.entries(values).map(([key, value]) => ({ label: FIELD_LABELS[key] || key, value: String(value) }));
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Método não permitido.' });

  const baseData = cleanValues(request.body?.baseData);
  const details = cleanValues(request.body?.details);
  const serviceType = baseData.service_type as ServiceType | undefined;
  const email = String(baseData.email_responsavel || '');

  if (!serviceType || !(serviceType in SERVICE_LABELS)) return response.status(400).json({ error: 'Serviço inválido.' });
  if (!baseData.nome_empresa || !baseData.nome_responsavel || !baseData.contato_responsavel || !/^\S+@\S+\.\S+$/.test(email)) {
    return response.status(400).json({ error: 'Preencha os dados de contato obrigatórios.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!supabaseUrl || !serviceRoleKey || !resendKey) return response.status(500).json({ error: 'Integração de formulários indisponível.' });

  const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
  const { data: submission, error: databaseError } = await supabase.from('site_form_submissions').insert({
    service_type: serviceType,
    company_name: baseData.nome_empresa,
    responsible_name: baseData.nome_responsavel,
    responsible_email: email,
    responsible_phone: baseData.contato_responsavel,
    form_data: { ...baseData, ...details },
    source_url: request.headers.referer || null,
  }).select('id, submitted_at').single();

  if (databaseError || !submission) {
    console.error('Unable to save form submission', databaseError);
    return response.status(500).json({ error: 'Não foi possível registrar o formulário.' });
  }

  const values = { ...baseData, ...details };
  delete values.service_type;
  const rows = rowsFrom(values);
  const csv = ['Campo,Resposta', ...rows.map(({ label, value }) => `${csvCell(label)},${csvCell(value)}`)].join('\r\n');
  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.FORM_NOTIFICATION_FROM || 'ER.IA <contato@eria.tec.br>',
      to: ['eric@eria.tec.br', 'iago@eria.tec.br'],
      reply_to: email,
      subject: `Novo formulário: ${SERVICE_LABELS[serviceType]} — ${baseData.nome_empresa}`,
      html: `<div style="background:#f5f3ed;padding:32px;font-family:Arial,sans-serif;color:#071c2f"><div style="max-width:680px;margin:auto;background:#fff;border:1px solid #d9e0e3"><div style="padding:24px 28px;background:#071c2f"><img src="https://hhvubvpenkkbjllygnxp.supabase.co/storage/v1/object/public/assets/logo-eriahub.png" alt="ER.IA" style="max-width:180px;height:auto"></div><div style="padding:30px"><p style="margin:0;color:#d8333d;font-size:12px;font-weight:700;text-transform:uppercase">${escapeHtml(SERVICE_LABELS[serviceType])}</p><h1 style="font-size:26px;margin:8px 0 24px">Novo diagnóstico recebido</h1><table style="width:100%;border-collapse:collapse">${rows.map(({ label, value }) => `<tr><td style="padding:10px;border-bottom:1px solid #e3e7e8;width:34%;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:10px;border-bottom:1px solid #e3e7e8;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table><p style="margin:26px 0 0;color:#617180;font-size:12px">O arquivo CSV anexo pode ser aberto diretamente no Excel.</p></div></div></div>`,
      attachments: [{ filename: `formulario-${serviceType}-${submission.id}.csv`, content: Buffer.from(`\uFEFF${csv}`).toString('base64') }],
    }),
  });

  const notificationError = emailResponse.ok ? null : (await emailResponse.text()).slice(0, 1_000);
  await supabase.from('site_form_submissions').update({
    notification_status: emailResponse.ok ? 'sent' : 'failed',
    notified_at: emailResponse.ok ? new Date().toISOString() : null,
    notification_error: notificationError,
  }).eq('id', submission.id);

  if (!emailResponse.ok) console.error('Unable to notify form submission', notificationError);
  return response.status(201).json({ submission: { id: submission.id }, notified: emailResponse.ok });
}
