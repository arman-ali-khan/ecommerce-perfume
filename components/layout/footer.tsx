import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hexagon"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span className="font-bold">CryptoShop</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The future of e-commerce with Web3 integration, blockchain verification, and cryptocurrency payments.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop" className="hover:text-foreground">All Products</Link>
              </li>
              <li>
                <Link href="/shop?category=clothing" className="hover:text-foreground">Clothing</Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="hover:text-foreground">Accessories</Link>
              </li>
              <li>
                <Link href="/shop?category=electronics" className="hover:text-foreground">Electronics</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">Careers</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">Contact</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">Press</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} CryptoShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}