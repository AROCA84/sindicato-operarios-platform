import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { stripe } from '@/lib/stripe';

type TestAttempt = {
  passed: boolean;
  score: number | null;
};

type OrderRow = {
  id: string;
  user_id: string;
  course_id: string;
  amount_cents: number;
  currency: string;
  status: string;
  provider: string;
  provider_payment_id: string | null;
};

type OrderInsert = {
  user_id: string;
  course_id: string;
  amount_cents: number;
  currency: string;
  status: string;
  provider: string;
};

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe no configurado. Añade STRIPE_SECRET_KEY.' },
      { status: 503 }
    );
  }

  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase no configurado' },
      { status: 503 }
    );
  }

  const { courseId } = await request.json();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: 'Debes iniciar sesión' },
      { status: 401 }
    );
  }

  const { data: attempt } = (await supabase
    .from('test_attempts')
    .select('passed,score')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .eq('passed', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()) as { data: TestAttempt | null };

  if (!attempt) {
    return NextResponse.json(
      { error: 'Debes aprobar el test antes de comprar el certificado' },
      { status: 403 }
    );
  }

  const orderInput: OrderInsert = {
    user_id: user.id,
    course_id: courseId,
    amount_cents: 499,
    currency: 'eur',
    status: 'pending',
    provider: 'stripe',
  };

  const { data: order, error } = (await supabase
    .from('orders')
    .insert(orderInput as never)
    .select()
    .single()) as { data: OrderRow | null; error: { message: string } | null };

  if (error || !order) {
    return NextResponse.json(
      { error: error?.message ?? 'No se pudo crear el pedido' },
      { status: 500 }
    );
  }

  const base = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin;
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Certificado profesional · Sindicato de Operarios',
            description: 'Certificado digital del curso aprobado',
          },
          unit_amount: 499,
        },
        quantity: 1,
      },
    ],
    metadata: {
      order_id: order.id,
      user_id: user.id,
      course_id: courseId,
    },
    success_url: `${base}/pago/exito?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${base}/certificado/${courseId}?cancelado=1`,
  });

  await supabase
    .from('orders')
    .update({ provider_payment_id: session.id } as never)
    .eq('id', order.id);

  return NextResponse.json({ url: session.url, orderId: order.id });
}
