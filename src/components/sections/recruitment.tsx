"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export function Recruitment() {
  const [date, setDate] = useState<Date | undefined>(new Date(2022, 0, 12))

  const meetings = [
    {
      name: "Leslie Alexander",
    },
    {
      name: "Michael Foster",
    },
    {
      name: "Dries Vincent",
    },
    {
      name: "Lindsay Walton",
    },
  ]

  return (
    <section id="upcoming" className="container mx-auto py-14">
      <h2 
        className={cn(
          "text-black dark:text-white",
          "relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2",
          "text-left tracking-tight text-balance md:text-center",
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        )}
      >
        Upcoming
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
        Join us for upcoming events and activities.
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 w-full">
        {/* Left side - Upcoming meetings list */}
        <div className="flex h-full">
          <Card className="p-0 bg-background w-full h-full flex flex-col">
            <div className="divide-y divide-border flex-1">
              {meetings.slice(0, 4).map((meeting, index) => (
                <div key={index} className="flex items-center gap-4 px-6 py-5 hover:bg-muted/50 transition-colors">
                  {/* Profile picture */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
                      <Image
                        src="/icon.png"
                        alt="MEC"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Meeting details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-base mb-2 leading-tight">
                      MEC Late Night
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Thursday at 8:30-1:30am</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>iHQ 3rd floor</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right side - Calendar */}
        <div className="flex h-full">
          <Card className="p-6 bg-background w-full h-full flex items-center justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md w-full"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
