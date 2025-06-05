import { DataTable } from "@/components/admin/customers/data-table"
import { columns } from "@/components/admin/customers/columns"

const customers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    totalSpent: 1245.00,
    lastOrder: "2024-03-15T12:00:00",
    status: "active"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 3,
    totalSpent: 799.00,
    lastOrder: "2024-03-14T15:30:00",
    status: "active"
  },
  // Add more customers as needed
]

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Customers</h2>
      </div>
      <DataTable columns={columns} data={customers} />
    </div>
  )
}