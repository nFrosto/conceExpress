import { createTransaction } from '../lib/webpay';

export async function POST({ request }) {
  const data = await request.json();
  const { amount, buyOrder, returnUrl, sessionId } = data;

  try {
    const response = await createTransaction(amount, buyOrder, sessionId, returnUrl);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
