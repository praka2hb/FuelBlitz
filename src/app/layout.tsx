import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Provider';

export const metadata: Metadata = {
  title: 'FuelBlitz | Nutrition Made Easy',
  description: 'AI-powered nutrition planning app',
  icons: {
    icon:"/flame.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}

