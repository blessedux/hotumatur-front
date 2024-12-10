'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically handle the form submission
    // For this example, we'll just set the state to show a success message
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>We'd love to hear from you. Here's how you can reach us...</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>info@dreamtravelagency.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>123 Adventure Lane, Travelville, TX 12345</span>
            </div>
            <div className="pt-4">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Map"
                alt="Office Location Map"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below for exclusive discounts and to join our newsletter!</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="johndoe@example.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="travelInterest" className="text-sm font-medium">I'm interested in...</label>
                  <Select>
                    <SelectTrigger id="travelInterest">
                      <SelectValue placeholder="Select your travel interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beach">Beach Vacations</SelectItem>
                      <SelectItem value="adventure">Adventure Tours</SelectItem>
                      <SelectItem value="city">City Breaks</SelectItem>
                      <SelectItem value="cruise">Cruises</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Tell us about your dream vacation..." required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subscribe to newsletter for exclusive deals and travel tips
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Dream Travel Agency?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Exclusive Discounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get access to special rates and packages available only to our contact list subscribers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expert Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our travel specialists are here to help you plan the perfect trip tailored to your preferences.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Travel with peace of mind knowing our support team is always available to assist you.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

