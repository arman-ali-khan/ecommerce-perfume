"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { ProfileInfo } from "@/components/profile/profile-info"
import { AddressBook } from "@/components/profile/address-book"
import { OrderHistory } from "@/components/profile/order-history"
import { PaymentMethods } from "@/components/profile/payment-methods"

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList>
          <TabsTrigger value="profile">Profile Info</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <ProfileInfo />
          </Card>
        </TabsContent>
        
        <TabsContent value="addresses">
          <Card>
            <AddressBook />
          </Card>
        </TabsContent>
        
        <TabsContent value="orders">
          <Card>
            <OrderHistory />
          </Card>
        </TabsContent>
        
        <TabsContent value="payments">
          <Card>
            <PaymentMethods />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}