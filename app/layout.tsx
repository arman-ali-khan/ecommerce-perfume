import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { CartProvider } from '@/providers/cart-provider';
import { Web3Provider } from '@/providers/web3-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CartDrawer } from '@/components/cart/cart-drawer';
import { FloatingCartButton } from '@/components/cart/floating-cart-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CryptoShop | Web3 E-Commerce',
  description: 'Next-generation e-commerce platform with Web3 integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Web3Provider>
            <CartProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <CartDrawer />
                <FloatingCartButton />
              </div>
            </CartProvider>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}