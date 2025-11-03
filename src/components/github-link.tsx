import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"

export function GitHubLink({ className }: { className?: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild size="lg" variant="ghost" className="h-8 shadow-none">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={className}
            >
              <Icons.gitHub />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View on GitHub</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
