export const units = [
  { name: "Campo Grande", address: "Estrada Santa Maria, 1844 - Campo Grande, Rio de Janeiro - RJ", phone: "(21) 99159-7096", whatsapp: "5521991597096" },
  { name: "Bangu", address: "Rua Roque Barbosa, 661 - Bangu, Rio de Janeiro - RJ", phone: "(21) 2146-5709", whatsapp: "5521973786882" },
] as const;

export function whatsappUrl(number: string, treatment?: string) {
  const message = treatment ? `Olá! Gostaria de agendar uma avaliação para ${treatment} na Clínica Odontológica Bem Estar.` : "Olá! Gostaria de agendar minha avaliação na Clínica Odontológica Bem Estar.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}