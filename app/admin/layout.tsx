import { redirect } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { AdminNav } from "@/components/admin/admin-nav"

// This is a mock admin check - in a real app, this would verify against your auth system
const isAdmin = true

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!isAdmin) {
    redirect("/")
  }

  return (
    <div className="container space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Manage your store, products, orders and customers.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <AdminNav />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}