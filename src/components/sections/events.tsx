"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"

const upcomingEvents = [
  {
    id: "unannounced-event-september-15",
    name: "Unannounced Event",
    date: "Tuesday, September 15, 2026, 6–8 PM",
    calendarDate: new Date(2026, 8, 15),
    location: "Undisclosed location",
  },
  {
    id: "unannounced-event-september-17",
    name: "Unannounced Event",
    date: "Thursday, September 17, 2026, 6–8 PM",
    calendarDate: new Date(2026, 8, 17),
    location: "Undisclosed location",
  },
  {
    id: "mec-late-night-september-24",
    name: "MEC Late Night",
    date: "September 24, 2026, 8:30 PM–1:30 AM",
    calendarDate: new Date(2026, 8, 24),
    location: "iHQ, 3rd floor",
  },
]

const eventDates = upcomingEvents.map((event) => event.calendarDate)

function isSameDay(firstDate: Date, secondDate: Date) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  )
}

const pastEvents = [
  {
    name: "MEC Retreat",
    date: "October 18–19, 2025",
    location: "Undisclosed location",
  },
  {
    name: "MEC Late Night",
    date: "September 4, 2025",
    location: "iHQ, 3rd floor",
  },
  {
    name: "MEC Late Night",
    date: "August 28, 2025",
    location: "iHQ, 3rd floor",
  },
  {
    name: "MEC Late Night",
    date: "August 21, 2025",
    location: "iHQ, 3rd floor",
  },
  {
    name: "MEC Late Night",
    date: "July 31, 2025",
    location: "iHQ, 3rd floor",
  },
  {
    name: "MEC Late Night",
    date: "July 24, 2025",
    location: "iHQ, 3rd floor",
  },
  {
    name: "MEC Sprint 2024",
    date: "October 4–6, 2024",
    location: "MIT",
  },
  {
    name: "StartHouse IAP 2024",
    date: "January 2024",
    location: "MIT",
  },
  {
    name: "StartHouse IAP 2023",
    date: "January 2023",
    location: "MIT",
  },
]

export function Events() {
  const [date, setDate] = useState<Date | undefined>()
  const selectedEvent = date
    ? upcomingEvents.find((event) => isSameDay(event.calendarDate, date))
    : undefined

  function handleDateSelect(selectedDate: Date | undefined) {
    setDate(selectedDate)

    if (!selectedDate) return

    const event = upcomingEvents.find((item) =>
      isSameDay(item.calendarDate, selectedDate)
    )

    if (event) {
      window.requestAnimationFrame(() => {
        document.getElementById(event.id)?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        })
      })
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="min-w-0">
          <h2 className="mb-4 text-3xl tracking-tight">Upcoming events</h2>
          <Card className="h-[28rem] overflow-y-auto p-0">
            {upcomingEvents.map((event) => (
              <div
                id={event.id}
                key={event.id}
                className={cn(
                  "border-b px-6 py-6 transition-colors",
                  selectedEvent?.id === event.id && "bg-purple-50"
                )}
              >
                <div>
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <div className="text-muted-foreground mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    <span className="flex items-center gap-2">
                      <CalendarIcon className="size-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        <div className="min-w-0">
          <h2 className="mb-4 text-3xl tracking-tight">Calendar</h2>
          <Card className="flex h-[28rem] items-center justify-center p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              defaultMonth={upcomingEvents[0].calendarDate}
              modifiers={{
                event: eventDates,
                selectedEvent: selectedEvent
                  ? [selectedEvent.calendarDate]
                  : [],
              }}
              modifiersClassNames={{
                event:
                  "rounded-md bg-purple-100 text-purple-900 [&_button]:font-medium [&_button]:text-purple-900",
                selectedEvent:
                  "[&_button]:!bg-purple-600 [&_button]:!text-white",
              }}
              className="w-full rounded-md"
            />
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-4 text-3xl tracking-tight">Past events</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pastEvents.map((event) => (
            <Card key={`${event.name}-${event.date}`} className="h-full p-6">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                <CalendarIcon className="size-4" />
                {event.date}
              </p>
              <p className="text-muted-foreground mt-3 flex items-center gap-2 text-sm">
                <MapPin className="size-4" />
                {event.location}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
