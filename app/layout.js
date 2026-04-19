import './globals.css';
import { Titillium_Web } from 'next/font/google';

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio Francesco Diella',
  description: 'Portfolio personale di Francesco Diella',
  icons: {
    icon: '/webicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
