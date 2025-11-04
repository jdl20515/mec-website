import Link from "next/link"
import { ExternalLink, Youtube } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Launchpad() {
  return (
    <div>
      <section id="playbook-hero" className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Launchpad
          </h1>
        </div>
      </section>

      <section id="playbook-content" className="container mx-auto py-2">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="space-y-6">
            <p className="text-2xl text-semibold text-foreground leading-relaxed">
              Building something new is the hardest thing you can do.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The next Steve Jobs won't build another iPhone. The next Mark Zuckerberg won't build another social network.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              We can't teach you how to build the next big thing, because there's no formula for that.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              What we can do is help you take the first step. Start with an idea, build something real, and learn faster than anyone else.
            </p>
          </div>

          {/* Books Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Essential Reading</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                I don't recommend books unless every page is truly worth a read. A ChatGPT summary will NOT do these books justice. And these books are short.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* The Lean Startup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">The Lean Startup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">TLDR:</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    The most essential book on building successful startups—this is our only MUST READ. Talks about the build-test-learn cycle and how speed is the number one factor in building successful startups.
                  </p>
                </CardContent>
              </Card>

              {/* The Mom Test */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">The Mom Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">TLDR:</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    A super short book on how to talk to users and validate your ideas. Most people will tell you BS—this book tells you how to get around it. The smartest people I know read this multiple times a year.
                  </p>
                </CardContent>
              </Card>

              {/* Zero to One */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Zero to One</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">TLDR:</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    A book on how to build a 0-1 idea and not just a 1 to n idea.
                  </p>
                </CardContent>
              </Card>

              {/* Atomic Habits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Atomic Habits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">TLDR:</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Not startup specific, but maybe the best book on how to work unreasonable hours. You will only get unreasonably good results if you work unreasonably hard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The Basics Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">The Basics</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Foundational resources to get you started on your entrepreneurial and technical journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">YC Startup School</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Y Combinator's free startup school program covering everything from idea validation to fundraising.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.startupschool.org" target="_blank" rel="noopener noreferrer">
                      Visit Startup School
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Harvard's CS50 Introduction to Computer Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Harvard's introduction to computer science. Essential programming fundamentals for building technical products.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://cs50.harvard.edu" target="_blank" rel="noopener noreferrer">
                      Take CS50
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Building Your First SaaS Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Building Your First SaaS</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Step-by-step guides to build and launch your first software-as-a-service product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Youtube className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Build a SaaS in 48 Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    A comprehensive video guide on building and launching your first SaaS product.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.youtube.com/watch?v=Zq5fmkH0T78" target="_blank" rel="noopener noreferrer">
                      Watch Video
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">David's Guide to Your First SaaS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    A practical guide covering the essentials of building your first SaaS product from scratch.
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Mastery Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">AI Mastery</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Master machine learning and AI from fundamentals to cutting-edge LLM development.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">1. Andrew Ng's Machine Learning Specialization</CardTitle>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Start Here</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Comprehensive introduction to machine learning covering supervised learning, unsupervised learning, and neural networks.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank" rel="noopener noreferrer">
                      Take Course
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">2. Hugging Face</CardTitle>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Next</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Learn to work with transformers and pre-trained models using the Hugging Face ecosystem.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://huggingface.co/learn" target="_blank" rel="noopener noreferrer">
                      Start Learning
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">3. MIT Grad ML</CardTitle>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Advanced</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    MIT's graduate-level machine learning course covering advanced topics and theoretical foundations.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://mit6874.github.io" target="_blank" rel="noopener noreferrer">
                      View Course
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">4. Arena LLM Curriculum</CardTitle>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Expert</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    Advanced curriculum for understanding and working with large language models and alignment research.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.arena.tech/curriculum" target="_blank" rel="noopener noreferrer">
                      Explore Curriculum
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
