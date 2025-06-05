"use client"

import { useState } from "react"
import { Trash2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface PaymentMethod {
  id: string
  type: string
  last4: string
  expMonth: number
  expYear: number
  brand: string
  isDefault: boolean
}

interface PaymentMethodCardProps {
  method: PaymentMethod
  onDelete: (id: string) => void
  onSetDefault: (id: string) => void
}

export function PaymentMethodCard({ method, onDelete, onSetDefault }: PaymentMethodCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5" />
          <div>
            <h4 className="font-medium capitalize">
              {method.brand} •••• {method.last4}
            </h4>
            {method.isDefault && (
              <Badge variant="secondary" className="mt-1">
                Default
              </Badge>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowDeleteDialog(true)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        Expires {method.expMonth.toString().padStart(2, "0")}/{method.expYear}
      </div>

      {!method.isDefault && (
        <Button
          variant="link"
          className="mt-4 h-auto p-0 text-sm"
          onClick={() => onSetDefault(method.id)}
        >
          Set as default
        </Button>
      )}

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Payment Method</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this payment method? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onDelete(method.id)
                setShowDeleteDialog(false)
              }}
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}