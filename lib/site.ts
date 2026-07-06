// Single source of truth for site-wide contact details.
// Set demoPhone once the demo line is provisioned — e.g. "(555) 012-3456" —
// and it will appear in the nav, footer, and demo page automatically.
export const site = {
  demoPhone: "(619) 340-1633",
  email: "contact@vectorautomationsystems.com",
  // Must match the address used in A2P brand registration (carrier checklist
  // requires it visible on the site). Format: "1234 Street, City, ST 00000"
  businessAddress: "6545 Market Ave N, Suite 100, Canton, OH 44721",
}

export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`
}
