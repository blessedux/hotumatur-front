import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Users, Mountain, Clock, DollarSign, Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

export default function TourPackagePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-8">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Tour Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Majestic Mountain Adventure</h1>
        </div>
      </div>

      {/* Key Information */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="flex items-center p-4">
            <Clock className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm font-medium">Duration</p>
              <p className="text-lg font-bold">7 Days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <Users className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm font-medium">Group Size</p>
              <p className="text-lg font-bold">Max 12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <Mountain className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm font-medium">Difficulty</p>
              <p className="text-lg font-bold">Moderate</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <DollarSign className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm font-medium">Price</p>
              <p className="text-lg font-bold">$1,999</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src={`/placeholder.svg?height=300&width=400&text=Gallery+${i + 1}`}
            alt={`Gallery Image ${i + 1}`}
            width={400}
            height={300}
            className="rounded-lg"
          />
        ))}
      </div>

      {/* Itinerary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
        <Accordion type="single" collapsible className="w-full">
          {[...Array(7)].map((_, i) => (
            <AccordionItem key={i} value={`day-${i + 1}`}>
              <AccordionTrigger>Day {i + 1}</AccordionTrigger>
              <AccordionContent>
                <p>Detailed description of day {i + 1} activities...</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Pricing and Inclusions */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-3xl font-bold mb-4">$1,999 <span className="text-lg font-normal">per person</span></p>
              <p className="mb-4">Price includes all accommodations, guided tours, and meals as specified in the itinerary.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Book Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                  <Button className="w-full mt-4">Confirm Booking</Button>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Inclusions</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Included:</h3>
                  <ul className="space-y-2">
                    {['Accommodation', 'Meals', 'Guide', 'Transport'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Not Included:</h3>
                  <ul className="space-y-2">
                    {['Flights', 'Insurance', 'Personal expenses'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <X className="w-4 h-4 mr-2 text-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p className="mb-2">⭐⭐⭐⭐⭐</p>
                <p className="mb-2">Amazing experience! Highly recommended.</p>
                <p className="font-bold">- Happy Traveler {i + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Related Tours */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Related Tours</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Related+Tour+${i + 1}`}
                  alt={`Related Tour ${i + 1}`}
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Related Tour {i + 1}</h3>
                  <p className="mb-2">Brief description of the related tour...</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

