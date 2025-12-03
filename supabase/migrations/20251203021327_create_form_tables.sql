/*
  # Criação de Tabelas para Formulários de Solicitação de Serviços

  ## Tabelas Criadas
  
  ### 1. form_submissions (Tabela Principal)
  - `id` (uuid, PK) - Identificador único da submissão
  - `service_type` (text) - Tipo de serviço (agentes_ia, sites, sistemas, ecommerce)
  - `nome_empresa` (text) - Nome da empresa solicitante
  - `cnpj` (text) - CNPJ da empresa (opcional)
  - `nome_responsavel` (text) - Nome do responsável
  - `email_responsavel` (text) - Email de contato
  - `contato_responsavel` (text) - Telefone/WhatsApp
  - `setor` (text) - Ramo/setor de atividade
  - `status` (text) - Status do formulário (novo, em_analise, respondido)
  - `submitted_at` (timestamptz) - Data/hora de submissão
  - `created_at` (timestamptz) - Data de criação

  ### 2. form_agentes_ia
  - Dados específicos para solicitações de Agentes de IA
  - Missão, tarefas, público-alvo, base de conhecimento, personalidade, etc.

  ### 3. form_sites
  - Dados específicos para solicitações de Sites/Landing Pages
  - Tipo de projeto, objetivos, design, funcionalidades, integrações

  ### 4. form_sistemas
  - Dados específicos para solicitações de Sistemas Personalizados
  - Objetivo, problema, funcionalidades, fluxo, integrações, plataforma

  ### 5. form_ecommerces
  - Dados específicos para solicitações de E-commerce
  - Produtos, meios de pagamento, logística, integrações

  ## Segurança
  - RLS habilitado em todas as tabelas
  - Políticas restritivas: apenas inserção pública, leitura apenas autenticada
  - Service role pode ler/modificar tudo
*/

-- Tabela principal de submissões
CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL CHECK (service_type IN ('agentes_ia', 'sites', 'sistemas', 'ecommerce')),
  nome_empresa text NOT NULL,
  cnpj text,
  nome_responsavel text NOT NULL,
  email_responsavel text NOT NULL,
  contato_responsavel text NOT NULL,
  setor text,
  status text DEFAULT 'novo' CHECK (status IN ('novo', 'em_analise', 'respondido', 'concluido')),
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Tabela para Agentes de IA
CREATE TABLE IF NOT EXISTS form_agentes_ia (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES form_submissions(id) ON DELETE CASCADE,
  missao_agente text,
  tarefas_agente text,
  publico_alvo text,
  restricoes_agente text,
  fonte_primaria text,
  links_conhecimento text,
  perguntas_frequentes text,
  regras_seguranca text,
  nome_agente text,
  pronome_agente text,
  tom_de_voz text,
  palavras_personalidade text,
  idiomas text,
  integracoes text,
  procedimento_escalation text,
  metricas_sucesso text,
  observacoes_finais text,
  created_at timestamptz DEFAULT now()
);

-- Tabela para Sites/Landing Pages
CREATE TABLE IF NOT EXISTS form_sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES form_submissions(id) ON DELETE CASCADE,
  tipo_projeto text,
  objetivo text,
  publico_alvo text,
  identidade_visual text,
  referencias_visuais text,
  paginas text,
  funcionalidades text,
  integracoes text,
  produtos text,
  forma_entrega text,
  prazo text,
  observacoes text,
  created_at timestamptz DEFAULT now()
);

-- Tabela para Sistemas Personalizados
CREATE TABLE IF NOT EXISTS form_sistemas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES form_submissions(id) ON DELETE CASCADE,
  objetivo text,
  problema text,
  publico_alvo text,
  funcionalidades text,
  fluxo text,
  niveis_acesso text,
  integracoes text,
  plataformas text,
  relatorios text,
  prazo text,
  observacoes text,
  created_at timestamptz DEFAULT now()
);

-- Tabela para E-commerce
CREATE TABLE IF NOT EXISTS form_ecommerces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES form_submissions(id) ON DELETE CASCADE,
  tipo_produtos text,
  numero_produtos text,
  categorias text,
  meios_pagamento text,
  logistica text,
  integracoes text,
  marketplaces text,
  funcionalidades_extras text,
  prazo text,
  observacoes text,
  created_at timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_agentes_ia ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_sistemas ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_ecommerces ENABLE ROW LEVEL SECURITY;

-- Políticas de Segurança: Qualquer pessoa pode inserir (formulário público)
CREATE POLICY "Anyone can insert form submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert agentes ia forms"
  ON form_agentes_ia
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert sites forms"
  ON form_sites
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert sistemas forms"
  ON form_sistemas
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert ecommerce forms"
  ON form_ecommerces
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Políticas de Leitura: Apenas service role (backend da ER.IA)
CREATE POLICY "Service role can read all submissions"
  ON form_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can read agentes ia forms"
  ON form_agentes_ia
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can read sites forms"
  ON form_sites
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can read sistemas forms"
  ON form_sistemas
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can read ecommerce forms"
  ON form_ecommerces
  FOR SELECT
  TO service_role
  USING (true);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_service_type ON form_submissions(service_type);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email_responsavel);
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_agentes_ia_submission ON form_agentes_ia(submission_id);
CREATE INDEX IF NOT EXISTS idx_form_sites_submission ON form_sites(submission_id);
CREATE INDEX IF NOT EXISTS idx_form_sistemas_submission ON form_sistemas(submission_id);
CREATE INDEX IF NOT EXISTS idx_form_ecommerces_submission ON form_ecommerces(submission_id);
