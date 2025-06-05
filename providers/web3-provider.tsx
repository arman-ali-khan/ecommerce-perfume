"use client"

import { Web3State } from "@/types"
import React, { createContext, useContext, useEffect, useState } from "react"

interface Web3ContextType {
  web3State: Web3State
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  checkoutWithCrypto: (amount: number) => Promise<boolean>
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [web3State, setWeb3State] = useState<Web3State>({
    isConnected: false,
    address: null,
    balance: 0,
    chainId: null
  })
  
  // Mock function to simulate wallet connection
  const connectWallet = async () => {
    // In a real implementation, this would use ethers.js or web3.js
    // to connect to MetaMask or another wallet provider
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setWeb3State({
      isConnected: true,
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      balance: 1.45,
      chainId: 1 // Ethereum Mainnet
    })
  }
  
  const disconnectWallet = () => {
    setWeb3State({
      isConnected: false,
      address: null,
      balance: 0,
      chainId: null
    })
  }
  
  // Mock function to simulate crypto payment
  const checkoutWithCrypto = async (amount: number): Promise<boolean> => {
    if (!web3State.isConnected) {
      console.error("Wallet not connected")
      return false
    }
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate successful payment (in reality would interact with smart contracts)
    return true
  }
  
  return (
    <Web3Context.Provider value={{
      web3State,
      connectWallet,
      disconnectWallet,
      checkoutWithCrypto
    }}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  const context = useContext(Web3Context)
  
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider")
  }
  
  return context
}