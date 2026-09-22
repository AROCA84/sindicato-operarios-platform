import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

type EnrollmentInput = {
  user_id: string;
  course_id: string;
  progress: number;
  status: string;
};

export async function POST(request: Request) {
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase no configurado' },
      { status: 503 }
    );
  }

  const { courseId, progress, status = 'started' } = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: 'Debes iniciar sesión' },
      { status: 401 }
    );
  }

  const enrollment: EnrollmentInput = {
    user_id: user.id,
    course_id: courseId,
    progress,
    status,
  };

  const { data, error } = await supabase
    .from('enrollments')
    .upsert(enrollment as never, {
      onConflict: 'user_id,course_id',
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ enrollment: data });
}
