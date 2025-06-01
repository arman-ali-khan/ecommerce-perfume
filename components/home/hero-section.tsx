import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FeaturesSection } from "@/components/home/features-section"

export function HeroSection() {
  return (
    <section className="flex">
      <div>
      </div>
       <FeaturesSection />
      <div className="relative flex overflow-hidden bg-black py-20 text-white md:py-32">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container relative z-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="web3" className="mb-5 px-3 py-1.5 text-sm font-medium">
            Web3 Shopping Experience
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The Future of <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Shopping</span> Is Here
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400">
            Shop with cryptocurrency, verify authenticity with blockchain, and own digital twins of your physical products.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/shop">Explore Products</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/10 px-8 backdrop-blur hover:bg-white/20">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}