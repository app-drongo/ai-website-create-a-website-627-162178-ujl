import { ChevronRight, Home, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pageheader() {
  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/properties" className="hover:text-foreground transition-colors">
              Properties
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Miami Beach Apartments</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Miami Beach Vacation Rentals
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover 6 hand-picked luxury apartments in the heart of Miami Beach. 
                From beachfront penthouses to cozy downtown lofts, find your perfect vacation home.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="size-4" />
                Filters
              </Button>
              <Button className="gap-2">
                <Search className="size-4" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">6</span> Properties Available
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$150-$450</span> per night
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.8★</span> Average rating
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Instant</span> Booking available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}