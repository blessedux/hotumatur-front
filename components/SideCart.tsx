'use client'

import { useCart } from './CartProvider'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface SideCartProps {
  isOpen: boolean
  onClose: () => void
}

export function SideCart({ isOpen, onClose }: SideCartProps) {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <p className="font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="mt-4 space-y-2">
              <Button className="w-full" onClick={() => window.location.href = '/checkout'}>
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

