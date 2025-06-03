"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Address {
  name: string
  street: string
  city: string
  state: string
  zip: string
  country: string
  isDefault?: boolean
}

interface AddressFormProps {
  address?: Address
  onSubmit: (address: Address) => void
  onCancel: () => void
}

export function AddressForm({ address, onSubmit, onCancel }: AddressFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      name: formData.get("name") as string,
      street: formData.get("street") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      zip: formData.get("zip") as string,
      country: formData.get("country") as string,
      isDefault: address?.isDefault || false
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Address Name</Label>
        <Input
          id="name"
          name="name"
          defaultValue={address?.name}
          placeholder="Home, Office, etc."
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="street">Street Address</Label>
        <Input
          id="street"
          name="street"
          defaultValue={address?.street}
          placeholder="123 Main St"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            defaultValue={address?.city}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            defaultValue={address?.state}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="zip">ZIP Code</Label>
          <Input
            id="zip"
            name="zip"
            defaultValue={address?.zip}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            defaultValue={address?.country}
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {address ? "Save Changes" : "Add Address"}
        </Button>
      </div>
    </form>
  )
}