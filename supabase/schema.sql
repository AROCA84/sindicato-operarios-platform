
-- Production indexes and certificate access support
create index if not exists idx_attempts_user_course on public.test_attempts(user_id,course_id,created_at desc);
create index if not exists idx_orders_user_status on public.orders(user_id,status);
create index if not exists idx_certificates_code on public.certificates(certificate_code);
create or replace function public.generate_certificate_code() returns text language plpgsql as $$ declare candidate text; begin loop candidate := 'SDO-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,6)); exit when not exists(select 1 from public.certificates where certificate_code=candidate); end loop; return candidate; end; $$;
