// Editable content for Auto Llamarist Luani.
export const site = {
  name: "Auto Llamarist Luani",
  shortName: "Llamarist Luani",
  tagline: "Atelier i llamarinës",
  estbar: "Mjeshtëri · Përkushtim · Garanci",
  phone: "+383 44 000 000", // TODO: numri real
  phoneHref: "tel:+38344000000",
  whatsapp: "https://wa.me/38344000000",
  email: "info@llamaristluani.com",
  address: "Rruga Kryesore, Prishtinë, Kosovë",
  hours: "Hën – Sht: 08:00 – 19:00",
  social: { instagram: "#", facebook: "#", tiktok: "#" },
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1300&q=72`;

// Placeholder photos — load in the visitor's browser; swap with real ones in /public/work later.
export const showcase = [
  { src: u("1503376780353-7e6692767b70"), label: "Riparim pas aksidenti" },
  { src: u("1552519507-da3b142c6e3d"), label: "Rrafshim & rikthim forme" },
];

export const gallery = [
  { src: u("1552519507-da3b142c6e3d"), tag: "BMW Seria 3", note: "Riparim parakolpi" },
  { src: u("1503376780353-7e6692767b70"), tag: "Audi A4", note: "Riparim dere" },
  { src: u("1492144534655-ae79c964c9d7"), tag: "VW Golf", note: "Heqje gungash" },
  { src: u("1494976388531-d1058494cdd8"), tag: "Mercedes C-Class", note: "Pas aksidenti" },
  { src: u("1605559424843-9e4c228bf1c2"), tag: "BMW X5", note: "Drejtim shasie" },
  { src: u("1568605117036-5fe5e7bab0b7"), tag: "Audi Q5", note: "Saldim & punime" },
];

export const brands = [
  "BMW",
  "Audi",
  "Volkswagen",
  "Mercedes-Benz",
  "Porsche",
  "Škoda",
  "Range Rover",
  "Toyota",
  "Opel",
  "Peugeot",
];
