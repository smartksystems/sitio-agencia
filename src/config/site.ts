export const SITE = {
  name: 'SMART K SYSTEMS',
  short: 'Agencia SKS',
  url: 'https://agenciasks.com',
  email: 'ventas@agenciasks.com',
  phoneDisplay: '0960 111 702',
  phoneIntl: '593960111702',
  founded: 2016,
  logo: '/logo.png',
  ogImage: '/og-default.png',
  social: [
    { name: 'Facebook', handle: '@smartksystems', url: 'https://www.facebook.com/smartksystems/' },
    { name: 'Instagram', handle: '@sks.agencia', url: 'https://www.instagram.com/sks.agencia/' },
    { name: 'LinkedIn', handle: 'Smart K Systems', url: 'https://www.linkedin.com/company/sks-agency/' },
  ],
} as const;

export const wa = (text: string) => `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
export const WA = {
  audit: wa('Hola Smart K Systems, quiero solicitar una auditoría gratuita de mi negocio.'),
  advice: wa('Hola Smart K Systems, me podría ayudar con información sobre'),
  marketing: wa('Hola Smart K Systems, quisiera asesoría sobre marketing digital para mi negocio de'),
};

export const HOURS = [
  { days: 'Lunes, martes, jueves y viernes', time: '8:00 a 13:00' },
  { days: 'Miércoles, sábado y domingo', time: 'Cerrado' },
];

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };
export const NAV: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Soluciones', href: '/soluciones/' },
  { label: 'Portafolio', href: '/portafolio/socios/', children: [
    { label: 'Portafolio Socios', href: '/portafolio/socios/' },
    { label: 'Portafolio Banners', href: '/portafolio/banners/' },
  ] },
  { label: 'Sobre nosotros', href: '/sobre-nosotros/', children: [
    { label: 'Trabaja con nosotros', href: '/sobre-nosotros/trabaja-con-nosotros/' },
  ] },
  { label: 'Contacto', href: '/contacto/' },
];
