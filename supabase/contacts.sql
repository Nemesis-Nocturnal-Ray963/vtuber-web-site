create extension if not exists "pgcrypto";

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  type text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.contacts enable row level security;

create policy "Allow contact inserts from public form"
on public.contacts
for insert
to anon
with check (true);
