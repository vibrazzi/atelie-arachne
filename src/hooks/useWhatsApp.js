import { useCallback } from 'react';

const WHATSAPP_NUMBER = '5511999999999'; // Número do WhatsApp do ateliê

export const useWhatsApp = () => {
  const sendMessage = useCallback((message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  const sendProductOrder = useCallback((product) => {
    const message = `Olá! Gostaria de encomendar o seguinte produto:\n\n` +
      `📦 *${product.name}*\n` +
      `💰 Preço: R$ ${product.price.toFixed(2)}\n` +
      `📝 Descrição: ${product.description}\n\n` +
      `Poderia me passar mais informações?`;
    
    sendMessage(message);
  }, [sendMessage]);

  const sendCartOrder = useCallback((cart, total) => {
    let message = `Olá! Gostaria de fazer o seguinte pedido:\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço unitário: R$ ${item.price.toFixed(2)}\n`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    message += `💰 *Total: R$ ${total.toFixed(2)}*\n\n`;
    message += `Poderia confirmar a disponibilidade e forma de pagamento?`;
    
    sendMessage(message);
  }, [sendMessage]);

  const sendCustomMessage = useCallback((customMessage) => {
    const message = `Olá! ${customMessage}`;
    sendMessage(message);
  }, [sendMessage]);

  return {
    sendMessage,
    sendProductOrder,
    sendCartOrder,
    sendCustomMessage,
  };
};
