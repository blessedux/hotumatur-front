'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from './CartProvider'

interface CartButtonProps {
  onClick: () => void
}

export function CartButton({ onClick }: CartButtonProps) {
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="fixed top-4 right-4 z-50"
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Cart ({itemCount})
    </Button>
  )
}

