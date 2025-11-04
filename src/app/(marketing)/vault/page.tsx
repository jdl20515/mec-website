"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Users, 
  Briefcase, 
  Gift, 
  Calendar, 
  MessageSquare, 
  Bell,
  Search,
  Filter,
  Mail,
  ExternalLink,
  FileText,
  DollarSign,
  Scale,
  Settings,
  Code,
  Sparkles
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Vault() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      <section id="vault-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            The Vault
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Member Hub — Resources, people, perks, and growth tools exclusive to MEC members.
          </p>
        </div>
      </section>

      <section id="vault-main" className="container mx-auto py-14">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="network">Founder Network</TabsTrigger>
            <TabsTrigger value="toolkit">Startup Toolkit</TabsTrigger>
            <TabsTrigger value="perks">Perks & Partnerships</TabsTrigger>
            <TabsTrigger value="events">Member Events</TabsTrigger>
            <TabsTrigger value="community">Community Access</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          {/* Founder Network Tab */}
          <TabsContent value="network">
            <Card>
              <CardHeader>
                <CardTitle>Founder Network</CardTitle>
                <CardDescription>
                  Searchable and filterable directory of MEC members. Find cofounders, mentors, and collaborators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search by name, startup, industry, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">All</Badge>
                  <Badge variant="outline">Looking for Cofounder</Badge>
                  <Badge variant="outline">YC Alumni</Badge>
                  <Badge variant="outline">Raised Funding</Badge>
                  <Badge variant="outline">Tech</Badge>
                  <Badge variant="outline">Bio</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Member Name</CardTitle>
                      <CardDescription>Class Year • Industry</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">
                        <strong>Startup:</strong> Startup Name
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Working on:</strong> Brief description of what they're building
                      </p>
                      <p className="text-sm mb-3">
                        <strong>Looking for:</strong> Help with fundraising, technical cofounder, etc.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            DM on Slack
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  {/* More member cards would go here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Startup Toolkit Tab */}
          <TabsContent value="toolkit">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6" />
                    <CardTitle>Funding Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Angel List</p>
                        <p className="text-xs text-muted-foreground">Angel investor directory and connections</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Pitch Deck Templates</p>
                        <p className="text-xs text-muted-foreground">YC-style templates and examples</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Investor Database</p>
                        <p className="text-xs text-muted-foreground">Curated list of VCs and angels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Grant/Fellowship Tracker</p>
                        <p className="text-xs text-muted-foreground">Upcoming opportunities and deadlines</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Scale className="h-6 w-6" />
                    <CardTitle>Legal Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">NDA Template</p>
                        <p className="text-xs text-muted-foreground">Standard non-disclosure agreement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Founder Agreement</p>
                        <p className="text-xs text-muted-foreground">Co-founder equity and roles template</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Equity Split Calculator</p>
                        <p className="text-xs text-muted-foreground">Tool for fair equity distribution</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">IP Protection Guide</p>
                        <p className="text-xs text-muted-foreground">Patent and trademark basics</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6" />
                    <CardTitle>Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Hiring Documentation</p>
                        <p className="text-xs text-muted-foreground">Job descriptions, offer templates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Notion Templates</p>
                        <p className="text-xs text-muted-foreground">Product roadmaps, PRDs, OKRs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Financial Model Sheet</p>
                        <p className="text-xs text-muted-foreground">Startup financial projections template</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6" />
                    <CardTitle>Technical Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Infrastructure Credits</p>
                        <p className="text-xs text-muted-foreground">AWS, GCP, Azure credits access</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Dev Stack Guides</p>
                        <p className="text-xs text-muted-foreground">Recommended tech stacks and setup</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">AI Tooling Discounts</p>
                        <p className="text-xs text-muted-foreground">Exclusive access to AI development tools</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Perks & Partnerships Tab */}
          <TabsContent value="perks">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gift className="h-6 w-6" />
                    <CardTitle>Startup Tool Credits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Notion</p>
                        <p className="text-xs text-muted-foreground">Free team workspace</p>
                      </div>
                      <Button variant="outline" size="sm">Claim</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Figma</p>
                        <p className="text-xs text-muted-foreground">Design tool subscription</p>
                      </div>
                      <Button variant="outline" size="sm">Claim</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Retool</p>
                        <p className="text-xs text-muted-foreground">Internal tool builder</p>
                      </div>
                      <Button variant="outline" size="sm">Claim</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Vercel</p>
                        <p className="text-xs text-muted-foreground">Hosting and deployment</p>
                      </div>
                      <Button variant="outline" size="sm">Claim</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6" />
                    <CardTitle>Partnerships</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm mb-2">Startup Law Firms</p>
                      <p className="text-xs text-muted-foreground mb-2">Discounted legal services for MEC members</p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-2">Prototyping Services</p>
                      <p className="text-xs text-muted-foreground mb-2">3D printing, manufacturing discounts</p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-2">MIT Sandbox</p>
                      <p className="text-xs text-muted-foreground mb-2">Exclusive access to Sandbox resources</p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-2">YC Alumni Network</p>
                      <p className="text-xs text-muted-foreground mb-2">Connect with Y Combinator alumni</p>
                      <Button variant="outline" size="sm">Request Intro</Button>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-2">MassChallenge</p>
                      <p className="text-xs text-muted-foreground mb-2">Beta-testing opportunities from alumni startups</p>
                      <Button variant="outline" size="sm">View Opportunities</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Member Events Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Member Events</CardTitle>
                <CardDescription>
                  Private calendar for MEC member-only events. RSVP required for most events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">Founder Dinner</CardTitle>
                          <CardDescription className="mt-1">
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Friday, March 15, 2024 • 7:00 PM
                          </CardDescription>
                        </div>
                        <Badge>Upcoming</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">
                        Join fellow founders for dinner and networking. Location: MIT Campus, Room TBD
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm">RSVP</Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">Mock Demo Day</CardTitle>
                          <CardDescription className="mt-1">
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Saturday, March 23, 2024 • 2:00 PM
                          </CardDescription>
                        </div>
                        <Badge>Upcoming</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">
                        Practice your pitch and get feedback before real demo day. Virtual event via Zoom.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm">RSVP</Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Zoom Link
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">Peer Feedback Night</CardTitle>
                          <CardDescription className="mt-1">
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Wednesday, March 27, 2024 • 6:00 PM
                          </CardDescription>
                        </div>
                        <Badge>Upcoming</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">
                        Get feedback on your product from other founders. Bring your laptop!
                      </p>
                      <Button size="sm">RSVP</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">AMA with Investor</CardTitle>
                          <CardDescription className="mt-1">
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Friday, April 5, 2024 • 5:00 PM
                          </CardDescription>
                        </div>
                        <Badge>Upcoming</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">
                        Ask Me Anything session with a prominent angel investor. Submit questions in advance.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm">RSVP</Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Submit Question
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Access Tab */}
          <TabsContent value="community">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6" />
                    <CardTitle>Communication Channels</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Main community group</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Join
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Discord</p>
                        <p className="text-xs text-muted-foreground">Real-time chat and voice channels</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Join
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Slack</p>
                        <p className="text-xs text-muted-foreground">Team communications and DMs</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Join
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6" />
                    <CardTitle>Mailing Lists</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">General Updates</p>
                        <p className="text-xs text-muted-foreground">Monthly newsletter and announcements</p>
                      </div>
                      <Button variant="outline" size="sm">Subscribe</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Events & Opportunities</p>
                        <p className="text-xs text-muted-foreground">Weekly event notifications and deadlines</p>
                      </div>
                      <Button variant="outline" size="sm">Subscribe</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Funding Alerts</p>
                        <p className="text-xs text-muted-foreground">New grants, fellowships, and investor intros</p>
                      </div>
                      <Button variant="outline" size="sm">Subscribe</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="h-6 w-6" />
                  <CardTitle>Announcements</CardTitle>
                </div>
                <CardDescription>
                  Pinned updates, event signups, new perks, funding deadlines, and collaboration opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">🎉 New Perk: Vercel Credits Available</CardTitle>
                        <Badge>New</Badge>
                      </div>
                      <CardDescription>March 10, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        All active members now have access to Vercel hosting credits. Claim yours in the Perks section!
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">📅 Founder Dinner RSVP Open</CardTitle>
                      <CardDescription>March 8, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        RSVP for the March 15th Founder Dinner. Limited spots available - sign up in Member Events.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">💰 Y Combinator Application Deadline Approaching</CardTitle>
                      <CardDescription>March 5, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        YC S24 applications close on March 18th. Need help with your application? Book office hours with a YC alum.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🤝 Looking for a Technical Cofounder</CardTitle>
                      <CardDescription>March 3, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        A member in the Founder Network is looking for a technical cofounder for their AI startup. Check the network for details.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
