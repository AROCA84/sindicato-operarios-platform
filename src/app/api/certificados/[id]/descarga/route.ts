import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

type CertificateRow = { pdf_url: string };

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase no configurado' },
      { status: 503 },
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { id } = await params;

  const { data, error } = (await supabase
    .from('certificates')
    .select('pdf_url')
    .eq('id', id)
    .eq('user_id', user.id)
    .not('pdf_url', 'is', null)
    .maybeSingle()) as { data: CertificateRow | null; error: any };

  if (error) {
    return NextResponse.json(
      { error: 'Error al obtener el certificado' },
      { status: 500 },
    );
  }

  if (!data) {
    return NextResponse.json(
      { error: 'Certificado no encontrado' },
      { status: 404 },
    );
  }

  return NextResponse.redirect(data.pdf_url);
}
