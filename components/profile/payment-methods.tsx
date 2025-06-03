"use client"

import { useState } from "react"
import { Plus, CreditCard as CardIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { PaymentMethodForm } from "./payment-method-form"
import { PaymentMethodCard } from "./payment-method-card"

export function PaymentMethods() {
  const [showForm, setShowForm] = useState(false)
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "1",
      type: "card",
      last4: "4242",
      expMonth: 12,
      expYear: 2024,
      brand: "visa",
      isDefault: true
    },
    {
      id: "2",
      type: "card",
      last4: "1234",
      expMonth: 3,
      expYear: 2025,
      brand: "mastercard",
      isDefault: false
    }
  ])

  return (
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Payment Methods</h3>
        <Button onClick={() => setShowForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </div>

      {showForm && (
        <div className="mb-6">
          <PaymentMethodForm
            onSubmit={(method) => {
              setPaymentMethods([...paymentMethods, { ...method, id: Date.now().toString() }])
              setShowForm(false)
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {paymentMethods.map((method) => (
          <PaymentMethodCard
            key={method.id}
            method={method}
            onDelete={(id) => {
              setPaymentMethods(paymentMethods.filter(m => m.id !== id))
            }}
            onSetDefault={(id) => {
              setPaymentMethods(paymentMethods.map(m => ({
                ...m,
                isDefault: m.id === id
              })))
            }}
          />
        ))}
      </div>
    </CardContent>
  )
}