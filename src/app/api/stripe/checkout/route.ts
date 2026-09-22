import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { stripe } from '@/lib/stripe';

type OrderInsert = {
  user_id: string;
  course_id: string;
  amount_cents: number;
  currency: string;
  status: string;
  provider: string;
  provider_payment_id?: string | null;
};

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe no configurado. Añade STRIPE_SECRET_KEY.' },
      { status: 503 }
    );
  }

  const { courseId, amountCents } = await request.json();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Debes iniciar sesión' }, { status: 401 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price_data: { currency: 'eur', product_data: { name: 'Curso' }, unit_amount: amountCents }, quantity: 1 }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/gracias`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancelado`,
    metadata: { user_id: user.id, course_id: courseId }
  });

  const orderData: OrderInsert = {
    user_id: user.id,
    course_id: courseId,
    amount_cents: amountCents,
    currency: 'eur',
    status: 'pending',
    provider: 'stripe',
    provider_payment_id: null
  };

  const { data, error } = await supabase.from('orders').insert(orderData).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ sessionId: session.id, orderId: data.id });
}
