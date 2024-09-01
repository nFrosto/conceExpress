import { useState } from 'react';

export default function WebPayButton({ amount, productId }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/webpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          buyOrder: `ORDER-${productId}`,
          returnUrl: `${window.location.origin}/success`,
          sessionId: `SESSION-${Date.now()}`
        })
      });
      
      const data = await response.json();
      if (data.url) {
        // En una implementación real, redirigirías a data.url
        console.log('Redirigiendo a:', data.url);
        // Simulamos la redirección
        window.location.href = `/success?token_ws=${data.token}`;
      } else {
        console.error('Error al iniciar la transacción');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  return (
    <button onClick={handlePayment} disabled={isLoading}>
      {isLoading ? 'Procesando...' : 'Pagar con WebPay'}
    </button>
  );
}