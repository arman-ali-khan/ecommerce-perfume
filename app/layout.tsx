
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CryptoShop" />
        
        <link rel="preload" as="image" href="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg" />
      </head>
      <body>
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