import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { CartProvider } from '@/providers/cart-provider';
import { Web3Provider } from '@/providers/web3-provider';
import { Navbar } from '@/components/layout/navbar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Footer } from '@/components/layout/footer';
import { CartDrawer } from '@/components/cart/cart-drawer';
import { FloatingCartButton } from '@/components/cart/floating-cart-button';
import { Toaster } from 'sonner';
import { OfflineToast } from '@/components/pwa/offline-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CryptoShop | Web3 E-Commerce',
  description: 'Next-generation e-commerce platform with Web3 integration',
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CryptoShop',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CryptoShop" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Web3Provider>
            <CartProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 pb-[4.5rem] lg:pb-0">{children}</main>
                <Footer className="hidden lg:block" />
                <CartDrawer />
                <FloatingCartButton className="hidden lg:block" />
                <MobileNav />
              </div>
              <Toaster />
              <OfflineToast />
            </CartProvider>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}