"use client";
import React, { createContext, useContext, useState } from 'react';

export type Lang = 'fr' | 'en' | 'sw';

export const translations = {
  fr: {
    nav: { catalog: 'Catalogue', mission: 'Notre Mission', track: 'Suivi Commande', contact: 'Contact', checkout: 'Commande' },
    hero: {
      badge: 'PAR VIRUNGA ECO-FLOW',
      title: 'Énergie Régénérative pour',
      highlight: 'Nord-Kivu',
      subtitle: 'Uber pour le Gaz & Makala Vert. Charbon régénératif fabriqué à partir de déchets agricoles. Zéro déforestation, haute valeur calorifique.',
      btn1: 'Explorer le Catalogue',
      btn2: 'Mission de Surveillance',
    },
    catalog: { badge: 'NOTRE CATALOGUE', title: 'Solutions Durables', viewAll: 'Voir Tout', addToOrder: 'Ajouter à la Commande' },
    mission: {
      badge: 'NOTRE MISSION', title: 'Régénérer Notre Écosystème',
      body: 'Notre mission est de mettre fin à la déforestation pour le combustible dans la région des Virunga. En fournissant du charbon régénératif à partir de déchets agricoles, nous sauvons des hectares de forêts précieuses chaque mois.',
      stat1: 'Hectares Sauvés', stat2: 'Commandes Livrées',
      impact: 'Impact Environnemental',
      impactText: "Chaque gramme de Makala Vert acheté soutient un agriculteur local et protège un gorille de montagne. Nous sommes le fournisseur d'énergie éco-responsable pour un Nord-Kivu moderne.",
      zeroWaste: 'Zéro Déchet',
      zeroWasteText: 'Notre processus de production est entièrement circulaire, transformant les résidus agricoles en énergie premium à longue combustion.',
    },
    contact: {
      badge: 'CONTACTEZ-NOUS', title: 'Parlons Énergie',
      subtitle: 'Commande professionnelle, partenariat ou simple question — notre équipe à Goma vous répond rapidement.',
      name: 'Votre nom *', namePlaceholder: 'Ex: Jean Mwamba',
      email: 'Email *', emailPlaceholder: 'votre@email.com',
      message: 'Votre message *', messagePlaceholder: 'Décrivez votre besoin en énergie, commande spéciale ou partenariat...',
      submit: 'Envoyer le Message', sending: 'Envoi en cours...',
      successTitle: 'Message envoyé !', successBody: 'Nous vous répondrons dans les 24h. Merci de nous contacter.',
      sendAnother: 'Envoyer un autre message',
    },
    footer: {
      tagline: "Énergie éco-responsable pour l'avenir du Nord-Kivu. Régénératif, fiable et accessible.",
      services: 'NOS SERVICES', service1: 'Livraison Gaz LPG', service2: 'Solutions Commerciales', service3: 'Charbon Régénératif', service4: 'Crédits Carbone',
      company: 'ENTREPRISE', company1: 'Notre Mission', company2: 'Vision 2030', company3: 'Durabilité', company4: 'Suivi Commande',
      legal: 'LÉGAL', legal1: 'Politique de Confidentialité', legal2: 'Conditions Générales', legal3: 'Cookies',
      copyright: 'Copyright @ Merveille Balume K', madeIn: '',
    },
    cart: { title: 'Votre Panier', empty: 'Panier vide', emptyBody: 'Ajoutez des produits depuis le catalogue.', total: 'Total', confirm: 'Confirmer la Commande →', clear: 'Vider le panier', qty: 'Qté' },
    products: [
      { id: 1, name: 'Bouteille Standard', price: 40, description: '20kg • Soupape de Sécurité', image: '/images/gas_tank.png' },
      { id: 2, name: 'Cylindre Commercial', price: 85, description: '50kg • Haute Capacité', image: '/images/gas_tank.png' },
      { id: 3, name: 'Charbon Makala Vert', price: 15, description: '10kg • Agri-charbon Régénératif', image: '/images/charcoal.png' },
    ],
  },
  en: {
    nav: { catalog: 'Catalog', mission: 'Our Mission', track: 'Track Order', contact: 'Contact', checkout: 'Checkout' },
    hero: {
      badge: 'BY VIRUNGA ECO-FLOW',
      title: 'Regenerative Energy for',
      highlight: 'Nord-Kivu',
      subtitle: 'Uber for Gas & Makala Vert. Regenerative charcoal from agricultural waste. Zero deforestation, high caloric value.',
      btn1: 'Explore the Catalog',
      btn2: 'Surveillance Mission',
    },
    catalog: { badge: 'OUR CATALOG', title: 'Sustainable Solutions', viewAll: 'View All', addToOrder: 'Add to Order' },
    mission: {
      badge: 'OUR MISSION', title: 'Regenerating Our Ecosystem',
      body: 'Our mission is to end deforestation for fuel in the Virunga region. By providing regenerative charcoal made from agricultural waste, we save hectares of precious forests every month.',
      stat1: 'Hectares Saved', stat2: 'Orders Delivered',
      impact: 'Environmental Impact',
      impactText: 'Every gram of Makala Vert you buy supports a local farmer and protects a mountain gorilla. We are the eco-conscious fuel provider for a modern Nord-Kivu.',
      zeroWaste: 'Zero Waste',
      zeroWasteText: 'Our production process is entirely circular, turning agricultural residue into premium, long-burning energy.',
    },
    contact: {
      badge: 'CONTACT US', title: "Let's Talk Energy",
      subtitle: 'Professional order, partnership or simple question — our team in Goma responds quickly.',
      name: 'Your name *', namePlaceholder: 'Ex: John Smith',
      email: 'Email *', emailPlaceholder: 'your@email.com',
      message: 'Your message *', messagePlaceholder: 'Describe your energy needs, special order or partnership...',
      submit: 'Send Message', sending: 'Sending...',
      successTitle: 'Message sent!', successBody: 'We will reply within 24h. Thank you for contacting us.',
      sendAnother: 'Send another message',
    },
    footer: {
      tagline: 'Eco-conscious energy for the future of Nord-Kivu. Regenerative, reliable and accessible.',
      services: 'OUR SERVICES', service1: 'LPG Gas Delivery', service2: 'Commercial Solutions', service3: 'Regenerative Charcoal', service4: 'Carbon Credits',
      company: 'COMPANY', company1: 'Our Mission', company2: 'Vision 2030', company3: 'Sustainability', company4: 'Track Order',
      legal: 'LEGAL', legal1: 'Privacy Policy', legal2: 'Terms & Conditions', legal3: 'Cookies',
      copyright: 'Copyright @ Merveille Balume K', madeIn: '',
    },
    cart: { title: 'Your Cart', empty: 'Cart empty', emptyBody: 'Add products from the catalog.', total: 'Total', confirm: 'Confirm Order →', clear: 'Clear cart', qty: 'Qty' },
    products: [
      { id: 1, name: 'Standard Home Tank', price: 40, description: '20kg • Home Safety Valve', image: '/images/gas_tank.png' },
      { id: 2, name: 'Commercial Cylinder', price: 85, description: '50kg • High Capacity Valve', image: '/images/gas_tank.png' },
      { id: 3, name: 'Makala Vert Charcoal', price: 15, description: '10kg • Regenerative Agri-charcoal', image: '/images/charcoal.png' },
    ],
  },
  sw: {
    nav: { catalog: 'Katalogi', mission: 'Dhamira Yetu', track: 'Fuatilia Agizo', contact: 'Wasiliana', checkout: 'Agiza' },
    hero: {
      badge: 'NA VIRUNGA ECO-FLOW',
      title: 'Nishati ya Urejeshaji kwa',
      highlight: 'Nord-Kivu',
      subtitle: 'Uber wa Gesi & Makala Vert. Mkaa wa urejeshaji kutoka kwa taka za kilimo. Hakuna ukataji miti, nguvu nyingi za moto.',
      btn1: 'Chunguza Katalogi',
      btn2: 'Dhamira ya Ufuatiliaji',
    },
    catalog: { badge: 'KATALOGI YETU', title: 'Suluhisho Endelevu', viewAll: 'Ona Yote', addToOrder: 'Ongeza kwa Agizo' },
    mission: {
      badge: 'DHAMIRA YETU', title: 'Kurejeshea Mfumo wa Ikolojia',
      body: 'Dhamira yetu ni kukomesha ukataji miti kwa mafuta katika eneo la Virunga. Kwa kutoa mkaa wa urejeshaji kutoka kwa taka za kilimo, tunaokoa hekta za misitu kila mwezi.',
      stat1: 'Hekta Zilizokolewa', stat2: 'Maagizo Yaliyotolewa',
      impact: 'Athari ya Mazingira',
      impactText: 'Kila gramu ya Makala Vert inasaidia mkulima na kulinda gorilla ya mlima. Sisi ni mtoa huduma wa nishati kwa Nord-Kivu ya kisasa.',
      zeroWaste: 'Taka Sifuri',
      zeroWasteText: 'Mchakato wetu wa uzalishaji ni mzunguko kamili, ukibadilisha mabaki ya kilimo kuwa nishati ya hali ya juu.',
    },
    contact: {
      badge: 'WASILIANA NASI', title: 'Tuzungumze Nishati',
      subtitle: 'Agizo la kitaalamu, ushirikiano au swali rahisi — timu yetu huko Goma inajibu haraka.',
      name: 'Jina lako *', namePlaceholder: 'Mfano: Jean Mwamba',
      email: 'Barua pepe *', emailPlaceholder: 'yako@barua.com',
      message: 'Ujumbe wako *', messagePlaceholder: 'Elezea mahitaji yako ya nishati, agizo maalum au ushirikiano...',
      submit: 'Tuma Ujumbe', sending: 'Inatuma...',
      successTitle: 'Ujumbe umetumwa!', successBody: 'Tutakujibu ndani ya masaa 24. Asante kwa kuwasiliana nasi.',
      sendAnother: 'Tuma ujumbe mwingine',
    },
    footer: {
      tagline: 'Nishati rafiki kwa mazingira kwa mustakabali wa Nord-Kivu. Urejeshaji, mwaminifu na inayopatikana.',
      services: 'HUDUMA ZETU', service1: 'Uwasilishaji Gesi LPG', service2: 'Suluhisho za Biashara', service3: 'Mkaa wa Urejeshaji', service4: 'Mikopo ya Kaboni',
      company: 'KAMPUNI', company1: 'Dhamira Yetu', company2: 'Maono 2030', company3: 'Uendelevu', company4: 'Fuatilia Agizo',
      legal: 'KISHERIA', legal1: 'Sera ya Faragha', legal2: 'Masharti ya Huuma', legal3: 'Vidakuzi',
      copyright: 'Copyright @ Merveille Balume K', madeIn: '',
    },
    cart: { title: 'Kikapu Chako', empty: 'Kikapu kiko tupu', emptyBody: 'Ongeza bidhaa kutoka kwa katalogi.', total: 'Jumla', confirm: 'Thibitisha Agizo →', clear: 'Safisha kikapu', qty: 'Idadi' },
    products: [
      { id: 1, name: 'Chupa ya Kawaida', price: 40, description: '20kg • Vali ya Usalama', image: '/images/gas_tank.png' },
      { id: 2, name: 'Silinda ya Biashara', price: 85, description: '50kg • Uwezo wa Juu', image: '/images/gas_tank.png' },
      { id: 3, name: 'Mkaa Makala Vert', price: 15, description: '10kg • Mkaa wa Kilimo', image: '/images/charcoal.png' },
    ],
  },
};

type LangContextType = { lang: Lang; setLang: (l: Lang) => void; t: typeof translations['fr'] };
const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
