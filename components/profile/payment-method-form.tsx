"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PaymentMethod {
  type: string
  last4: string
  expMonth: number
  expYear: number
  brand: string
  isDefault: boolean
}

interface PaymentMethodFormProps {
  onSubmit: (method: PaymentMethod) => void
  onCancel: () => void
}

export function PaymentMethodForm({ onSubmit, onCancel }: PaymentMethodFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // In a real app, you would use a proper payment processing service
    // This is just a mock implementation
    onSubmit({
      type: "card",
      last4: formData.get("cardNumber") as string,
      expMonth: parseInt(formData.get("expMonth") as string),
      expYear: parseInt(formData.get("expYear") as string),
      brand: "visa",
      isDefault: false
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          placeholder="4242 4242 4242 4242"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="expMonth">Expiry Month</Label>
          <Input
            id="expMonth"
            name="expMonth"
            placeholder="MM"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expYear">Expiry Year</Label>
          <Input
            id="expYear"
            name="expYear"
            placeholder="YYYY"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input
            id="cvc"
            name="cvc"
            placeholder="123"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Payment Method</Button>
      </div>
    </form>
  )
}