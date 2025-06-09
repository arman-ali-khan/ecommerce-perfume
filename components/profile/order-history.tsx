"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Order {
  id: string
  date: Date
  status: "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: {
    name: string
    quantity: number
    price: number
    size: string
  }[]
}

export function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [orders] = useState<Order[]>([
    {
      id: "ORD-001",
      date: new Date("2024-03-15"),
      status: "delivered",
      total: 229.97,
      items: [
        {
          name: "Ocean Breeze",
          quantity: 1,
          price: 129.99,
          size: "100ml"
        },
        {
          name: "Midnight Rose",
          quantity: 2,
          price: 49.99,
          size: "30ml"
        }
      ]
    },
    {
      id: "ORD-002",
      date: new Date("2024-03-10"),
      status: "shipped",
      total: 159.98,
      items: [
        {
          name: "Cedar Woods",
          quantity: 2,
          price: 79.99,
          size: "50ml"
        }
      ]
    }
  ])

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return "bg-yellow-500"
      case "shipped":
        return "bg-blue-500"
      case "delivered":
        return "bg-green-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <CardContent className="p-6">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Order History</h3>
        
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="space-y-1">
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-muted-foreground">
                  {format(order.date, "MMM d, yyyy")}
                </p>
                <Badge
                  className={`${getStatusColor(order.status)} text-white`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
              
              <div className="text-right">
                <p className="font-medium">${order.total.toFixed(2)}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => setSelectedOrder(order)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Ordered on {selectedOrder && format(selectedOrder.date, "MMMM d, yyyy")}
              </p>
              <Badge className={`${selectedOrder && getStatusColor(selectedOrder.status)} text-white`}>
                {selectedOrder && selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
              </Badge>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Items</h4>
              {selectedOrder?.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-muted-foreground">
                      {item.size} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">${selectedOrder?.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </CardContent>
  )
}