import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/app/utils/providers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const damino = localFont({
  src: './fonts/DamionRegular.woff',
  variable: '--font-damion',
  weight: '400',
  preload: true,
  display: 'swap',
});

export const metadata = {
  title: 'Your Recipe Hub for Every Meal',
  description:
    'Discover a world of flavors with TasteBite! Explore simple, delicious recipes for every occasion. From quick meals to indulgent treats, we’ve got something for every taste and skill level. Start cooking with us today and make every bite count!',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${damino.variable} ${geistSans.variable} ${geistMono.variable}`}
      // style={{ ['color-schema']: 'dark' }}
      suppressHydrationWarning={true}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
