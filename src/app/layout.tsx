import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import { STUDIO_INFO } from '@/data/studio';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://studio-jonatan-camargo.vercel.app'),
  title:
    'Studio Jonatan Camargo | Ciclismo Indoor & Aulas Coletivas Les Mills em Concórdia - SC',
  description:
    'O maior studio de ciclismo indoor de Concórdia e centro oficial Les Mills (+40 horários semanais). Bike, BodyPump, Core, PowerJump, Treino Funcional, Pilates e Step no Centro.',
  keywords: [
    'Studio Jonatan Camargo',
    'ciclismo indoor Concórdia',
    'bike indoor Concórdia',
    'Les Mills Concórdia',
    'BodyPump Concórdia',
    'PowerJump Concórdia',
    'aulas coletivas Concórdia SC',
    'Energy Bike Concórdia',
  ],
  icons: {
    icon: '/images/logo-studio.svg',
    apple: '/images/logo-studio.svg',
  },
  openGraph: {
    title:
      'Studio Jonatan Camargo | O maior studio de ciclismo indoor de Concórdia',
    description:
      'Aulas coletivas para transformar sua rotina. Credenciado oficial Les Mills com +40 horários semanais no Centro de Concórdia - SC.',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/hero-desktop.webp',
        width: 1376,
        height: 768,
        alt: 'Sala de ciclismo indoor iluminada com azul ciano e laranja no Studio Jonatan Camargo em Concórdia - SC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Jonatan Camargo | Ciclismo Indoor & Les Mills em Concórdia',
    description:
      '+40 horários semanais de Bike, BodyPump, Core, PowerJump, Funcional, Pilates e Step no Centro de Concórdia - SC.',
    images: ['/images/hero-desktop.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['HealthClub', 'LocalBusiness'],
  name: STUDIO_INFO.brandName,
  legalName: STUDIO_INFO.legalName,
  taxID: STUDIO_INFO.cnpj,
  description:
    'O maior studio de ciclismo indoor de Concórdia e centro de aulas coletivas credenciado oficialmente pela Les Mills, com mais de 40 horários semanais.',
  image: '/images/hero-desktop.webp',
  telephone: '+55-49-99934-0812',
  email: STUDIO_INFO.email,
  priceRange: '$$',
  paymentAccepted: 'Cartão de Crédito, Cartão de Débito, Aproximação (NFC)',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tv. Lamonato, 195 - Centro',
    addressLocality: 'Concórdia',
    addressRegion: 'SC',
    postalCode: '89700-168',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -27.2342,
    longitude: -52.0278,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '06:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '06:00',
      closes: '19:15',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '06:00',
      closes: '18:10',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '09:00',
    },
  ],
  sameAs: [STUDIO_INFO.instagramUrl, STUDIO_INFO.founderUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${montserrat.variable}`}
    >
      <body className="antialiased selection:bg-[#00B5E2] selection:text-[#0D0F12]">
        <div className="grain-overlay" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
