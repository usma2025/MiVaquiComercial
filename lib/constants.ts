const WHATSAPP_NUMBER = "573124577054";

export const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Quiero+probar+MiVaqui+gratis+por+30+d%C3%ADas`;
export const WHATSAPP_SUPPORT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C+necesito+soporte+t%C3%A9cnico+de+MiVaqui`;

export function whatsappPlanUrl(plan: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=Quiero+probar+el+plan+${encodeURIComponent(plan)}+de+MiVaqui+gratis+por+30+d%C3%ADas`;
}
