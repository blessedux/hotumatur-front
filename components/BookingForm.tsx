'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

interface Product {
  id: number
  name: string
}

interface BookingFormProps {
  products: Product[]
}

export function BookingForm({ products }: BookingFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, productId: selectedProduct }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Booking successful!')
        setName('')
        setEmail('')
        setSelectedProduct('')
      } else {
        setMessage(`Booking failed: ${data.message}`)
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="product">Select a Product</Label>
        <Select
          id="product"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          required
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Booking...' : 'Book Now'}
      </Button>
      {message && <p className="mt-4 text-sm font-medium text-center">{message}</p>}
    </form>
  )
}

