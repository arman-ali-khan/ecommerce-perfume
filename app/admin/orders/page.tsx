import { DataTable } from "@/components/admin/orders/data-table"
import { columns } from "@/components/admin/orders/columns"

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    amount: 249.00,
    status: "completed",
    date: "2024-03-15T12:00:00",
    items: [
      { name: "Ocean Breeze", quantity: 1, price: 129.99 },
      { name: "Midnight Rose", quantity: 2, price: 59.99 }
    ]
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: 399.00,
    status: "processing",
    date: "2024-03-14T15:30:00",
    items: [
      { name: "Velvet Orchid", quantity: 1, price: 399.00 }
    ]
  },
  // Add more orders as needed
]

export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Orders</h2>
      </div>
      <DataTable columns={columns} data={orders} />
    </div>
  )
}