import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

type EnrollmentInput = {
  user_id: string;
  course_id: string;
  progress: number;
  completed_at?: string | null;
  last_accessed_at?: string | null;
};

export async function POST(request: Request) {
  if (!supabase) return NextResponse.json({ error: 'Supabase no configurado' }, { status: 503 });

  const { enrollment } = await request.json();

  const { data, error } = await supabase
    .from('enrollments')
    .upsert(enrollment, {
      onConflict: 'user_id,course_id',
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data });
}

export async function GET(request: Request) {
  if (!supabase) return NextResponse.json({ error: 'Supabase no configurado' }, { status: 503 });

  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get('user_id');
  const course_id = searchParams.get('course_id');

  if (!user_id || !course_id) {
    return NextResponse.json({ error: 'Faltan parámetros' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .eq('user_id', user_id)
    .eq('course_id', course_id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data });
}
