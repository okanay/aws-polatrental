import '../app/globals.css'
import {AppComponent} from "./app";
import {Footer} from "@/components/Footer-Components/Footer";
import {RootStyle} from "@/components/Main-Components/RootStyle";
import {Navigation} from "@/components/Navigation-Components/Navigation";

export const metadata = {
  icons: {
    icon: './favicon/icon.png',
    shortcut: '/favicon/icon.png',
    apple: '/favicon/icon.png',
    other: {
      rel: '/favicon/icon.png',
      url: '/favicon/icon.png',
    },
  },
  keywords: ['Araç Kiralama Acentesi, Rent a Car, Araba Kiralama, Ucuza Araç Kiralama, Kişisel Araç Kiralama, Firmalara Araç Kiralama, Kiralik Arac, Günlük Araba Kiralama, İstanbul Araç Kiralama Acentası,'],
  themeColor: 'white',
  title: 'Polat Rental',
  creator: 'Okan Ay',
  publisher: 'Okan Ay',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  languages: {
    'tr-TR': '/tr-TR',
  },
  authors: [{ name: 'Batuhan Polat' }, { name: 'Okan Ay' }],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  description: 'Araç kiralama hizmeti. Şimdi size uygun aracı kiralamaya başlayın. Ekonomik, bakımlı ve yeni araçlarımızla hizmetinizdeyiz.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  twitter: {
    card: '/favicon/icon.png',
    title: 'Polat Rental',
    description: 'Araç kiralama hizmeti. Şimdi size uygun aracı kiralamaya başlayın. Ekonomik, bakımlı ve yeni araçlarımızla hizmetinizdeyiz.',
    siteId: '1467726470533754880',
    creator: '@wokanay',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://polatrental/og.png',
      alt: 'Polat Rental Logo',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
  openGraph: {
    title: 'Polat Rental}',
    description: 'Araç kiralama hizmeti. Şimdi size uygun aracı kiralamaya başlayın. Ekonomik, bakımlı ve yeni araçlarımızla hizmetinizdeyiz.',
    url: 'https://polatrental/og-alt.png',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://polatrental/og-alt.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://polatrental/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en-US',
    type: 'website',
  }
}

export default function RootLayout({children}) {
  return (
      <html lang="tr">
      <body>
      <AppComponent>
        <RootStyle>
          <Navigation/>
          {children}
          <Footer/>
        </RootStyle>
      </AppComponent>
      </body>
      </html>
  )
}
