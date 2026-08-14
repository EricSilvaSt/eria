create table if not exists public.site_form_submissions (
  id uuid primary key default gen_random_uuid(),
  service_type text not null check (service_type in ('agentes_ia', 'sites', 'sistemas', 'ecommerce')),
  company_name text not null,
  responsible_name text not null,
  responsible_email text not null,
  responsible_phone text not null,
  form_data jsonb not null default '{}'::jsonb,
  source_url text,
  notification_status text not null default 'pending' check (notification_status in ('pending', 'sent', 'failed')),
  notified_at timestamptz,
  notification_error text,
  submitted_at timestamptz not null default now()
);

alter table public.site_form_submissions enable row level security;

create index if not exists site_form_submissions_submitted_at_idx
  on public.site_form_submissions (submitted_at desc);

create index if not exists site_form_submissions_service_type_idx
  on public.site_form_submissions (service_type);

comment on table public.site_form_submissions is
  'Diagnósticos enviados pelos formulários do site institucional ER.IA. Acesso restrito ao backend com service role.';
