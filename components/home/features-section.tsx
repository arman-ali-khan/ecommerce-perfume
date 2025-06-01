import { CircleDollarSign, Shield, Truck } from "lucide-react"

const features = [
  {
    title: "Crypto Payments",
    description: "Fast and secure payments using various cryptocurrencies with no intermediaries.",
    icon: CircleDollarSign,
  },
  {
    title: "Blockchain Verification",
    description: "Each product includes an NFT certificate proving authenticity and ownership.",
    icon: Shield,
  },
  {
    title: "Global Shipping",
    description: "We ship to over 180 countries with tracking and insurance included.",
    icon: Truck,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Shop With Us
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Experience the advantages of our Web3-powered shopping platform
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}