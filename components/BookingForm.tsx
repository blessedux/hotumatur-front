'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon, Loader2, Plane } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Handle form submission here
  };

  return (
    <div className="hero-form bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
      <div className="hero-wrap">
        {/* Title Section */}
        <div className="title-area mb-8 text-center">
          <span className="sub-title2 text-white text-sm">Selecciona una fecha para explorar</span>
          <h2 className="sec-title text-white text-2xl font-bold mt-2">Haz tu Reserva</h2>
        </div>

        {/* Form Fields */}
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Fecha */}
            <div className="form-group">
              <Label htmlFor="fecha" className="form-label text-white">Fecha</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-center text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Opciones de Tour */}
            <div className="form-group">
              <Label htmlFor="tour-options" className="form-label text-white">Opciones de Tour</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un tour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tour1">Tour 1</SelectItem>
                  <SelectItem value="tour2">Tour 2</SelectItem>
                  <SelectItem value="tour3">Tour 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Nombre */}
            <div className="form-group">
              <Label htmlFor="nombre" className="form-label text-white">Nombre</Label>
              <Input id="nombre" className="w-full" required />
            </div>

            {/* Correo Electrónico */}
            <div className="form-group">
              <Label htmlFor="email" className="form-label text-white">Correo Electrónico</Label>
              <Input id="email" type="email" className="w-full" required />
            </div>

            {/* Submit Button */}
            <div className="btn-form">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Reservar
                <Plane className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {/* Form Messages */}
        <p className="form-messages mb-0 mt-3 text-white" aria-live="polite"></p>
      </div>
    </div>
  );
}

