create extension if not exists "uuid-ossp";
create type public.user_role as enum ('student','admin');
create type public.course_status as enum ('draft','published','archived');
create type public.enrollment_status as enum ('started','completed','passed','failed');
create type public.order_status as enum ('pending','paid','failed','refunded');

create table public.profiles (id uuid primary key references auth.users(id) on delete cascade, full_name text, email text, role public.user_role not null default 'student', avatar_url text, created_at timestamptz not null default now());
create table public.categories (id uuid primary key default uuid_generate_v4(), name text not null, slug text unique not null, description text, created_at timestamptz not null default now());
create table public.courses (id uuid primary key default uuid_generate_v4(), category_id uuid references public.categories(id) on delete set null, title text not null, slug text unique not null, description text, image_url text, status public.course_status not null default 'draft', passing_score integer not null default 70 check(passing_score between 1 and 100), certificate_price_cents integer not null default 499, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table public.modules (id uuid primary key default uuid_generate_v4(), course_id uuid not null references public.courses(id) on delete cascade, title text not null, position integer not null default 0);
create table public.lessons (id uuid primary key default uuid_generate_v4(), module_id uuid not null references public.modules(id) on delete cascade, title text not null, content text, video_url text, position integer not null default 0, is_free boolean not null default true);
create table public.questions (id uuid primary key default uuid_generate_v4(), course_id uuid not null references public.courses(id) on delete cascade, question text not null, position integer not null default 0);
create table public.answers (id uuid primary key default uuid_generate_v4(), question_id uuid not null references public.questions(id) on delete cascade, answer text not null, is_correct boolean not null default false);
create table public.enrollments (id uuid primary key default uuid_generate_v4(), user_id uuid not null references public.profiles(id) on delete cascade, course_id uuid not null references public.courses(id) on delete cascade, status public.enrollment_status not null default 'started', progress integer not null default 0 check(progress between 0 and 100), started_at timestamptz not null default now(), completed_at timestamptz, unique(user_id,course_id));
create table public.test_attempts (id uuid primary key default uuid_generate_v4(), user_id uuid not null references public.profiles(id) on delete cascade, course_id uuid not null references public.courses(id) on delete cascade, score integer not null check(score between 0 and 100), passed boolean not null, answers jsonb, created_at timestamptz not null default now());
create table public.certificates (id uuid primary key default uuid_generate_v4(), user_id uuid not null references public.profiles(id) on delete cascade, course_id uuid not null references public.courses(id) on delete cascade, certificate_code text unique not null, issued_at timestamptz not null default now(), pdf_url text, unique(user_id,course_id));
create table public.orders (id uuid primary key default uuid_generate_v4(), user_id uuid not null references public.profiles(id) on delete cascade, course_id uuid not null references public.courses(id) on delete cascade, certificate_id uuid references public.certificates(id) on delete set null, amount_cents integer not null default 499, currency text not null default 'eur', status public.order_status not null default 'pending', provider text, provider_payment_id text, created_at timestamptz not null default now());
create table public.site_settings (key text primary key, value jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$ begin insert into public.profiles(id,email,full_name) values(new.id,new.email,coalesce(new.raw_user_meta_data->>'full_name','')); return new; end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security; alter table public.categories enable row level security; alter table public.courses enable row level security; alter table public.modules enable row level security; alter table public.lessons enable row level security; alter table public.questions enable row level security; alter table public.answers enable row level security; alter table public.enrollments enable row level security; alter table public.test_attempts enable row level security; alter table public.certificates enable row level security; alter table public.orders enable row level security; alter table public.site_settings enable row level security;
create policy "published courses public" on public.courses for select using(status='published');
create policy "course content public" on public.modules for select using(exists(select 1 from public.courses c where c.id=course_id and c.status='published'));
create policy "lesson content public" on public.lessons for select using(exists(select 1 from public.modules m join public.courses c on c.id=m.course_id where m.id=module_id and c.status='published'));
create policy "questions public" on public.questions for select using(exists(select 1 from public.courses c where c.id=course_id and c.status='published'));
create policy "answers public" on public.answers for select using(true);
create policy "own profile" on public.profiles for select using(auth.uid()=id);
create policy "own enrollments" on public.enrollments for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
create policy "own attempts" on public.test_attempts for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
create policy "own certificates" on public.certificates for select using(auth.uid()=user_id);
create policy "own orders" on public.orders for select using(auth.uid()=user_id);

insert into public.site_settings(key,value) values ('certificate_price', '{"amount":4.99,"currency":"EUR"}'), ('passing_score','{"percentage":70}'), ('contact','{"email":"sindicatooperarios@gmail.com","whatsapp":"+34 642 077 425"}') on conflict(key) do nothing;
