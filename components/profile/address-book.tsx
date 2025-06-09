"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { AddressCard } from "./address-card"
import { AddressForm } from "./address-form"

export function AddressBook() {
  const [showForm, setShowForm] = useState(false)
  const [addresses, setAddresses] = useState([
    {
      id: "1",
      name: "Home",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      isDefault: true
    },
    {
      id: "2",
      name: "Office",
      street: "456 Business Ave",
      city: "New York",
      state: "NY",
      zip: "10002",
      country: "United States",
      isDefault: false
    }
  ])

  return (
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Saved Addresses</h3>
        <Button onClick={() => setShowForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Address
        </Button>
      </div>

      {showForm && (
        <div className="mb-6">
          <AddressForm
            onSubmit={(address) => {
              setAddresses([
                ...addresses,
                { ...address, id: Date.now().toString(), isDefault: address.isDefault ?? false }
              ])
              setShowForm(false)
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={(updatedAddress) => {
              setAddresses(addresses.map(a => 
                a.id === updatedAddress.id ? updatedAddress : a
              ))
            }}
            onDelete={(id) => {
              setAddresses(addresses.filter(a => a.id !== id))
            }}
            onSetDefault={(id) => {
              setAddresses(addresses.map(a => ({
                ...a,
                isDefault: a.id === id
              })))
            }}
          />
        ))}
      </div>
    </CardContent>
  )
}