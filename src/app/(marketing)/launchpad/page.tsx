"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, FileText, Video, FileIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function Launchpad() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Placeholder resources - this will be replaced with actual content
  const resources = [
    {
      id: 1,
      title: "Idea to MVP",
      summary: "5-step guide to validate your idea and build your first MVP",
      tags: ["Start Here", "MVP"],
      format: "guide",
      readTime: "10 min",
      category: "start-here",
    },
    {
      id: 2,
      title: "First 10 Users",
      summary: "How to find and onboard your first users",
      tags: ["Start Here", "Users"],
      format: "guide",
      readTime: "8 min",
      category: "start-here",
    },
    {
      id: 3,
      title: "Pitch Deck Template",
      summary: "Ready-to-use pitch deck template for fundraising",
      tags: ["Tactical", "Fundraising"],
      format: "template",
      readTime: "5 min",
      category: "tactical",
    },
    {
      id: 4,
      title: "Product-Market Fit",
      summary: "Understanding and achieving PMF for your startup",
      tags: ["Fundamentals", "PMF"],
      format: "guide",
      readTime: "15 min",
      category: "fundamentals",
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesTab = activeTab === "all" || resource.category === activeTab
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "template":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <div>
      <section id="playbook-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Launchpad
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Learn how to start, build, and grow. A public education hub for everyone.
          </p>
        </div>
      </section>

      <section id="playbook-search" className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto">
          <Input
            type="search"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </section>

      <section id="playbook-filters" className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="start-here">Start Here</TabsTrigger>
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="tactical">Tactical</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="mit-specific">MIT-Specific</TabsTrigger>
              <TabsTrigger value="talks">Talks</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section id="playbook-resources" className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredResources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {getFormatIcon(resource.format)}
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-muted-foreground">
                  {resource.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {resource.readTime}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/launchpad/${resource.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      {resource.format === "template" ? "Use Template" : resource.format === "video" ? "Watch" : "Read Guide"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
