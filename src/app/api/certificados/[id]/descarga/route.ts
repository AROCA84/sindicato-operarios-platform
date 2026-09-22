import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!supabase) return NextResponse.json({ error: 'Supabase no configurado' }, { status: 503 });

  const { id } = await params;
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

  const { data, error } = await supabase
    .from('certificates')
    .select('pdf_url')
    .eq('id', id)
    .eq('user_id', user.id)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data?.pdf_url) return NextResponse.json({ error: 'PDF no disponible' }, { status: 404 });

  return NextResponse.json({ pdf_url: data.pdf_url });
}
