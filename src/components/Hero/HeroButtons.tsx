// src/components/Hero/HeroTextWithButtons.tsx
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Your Mind Deserves a Journal
      </h1>
      <p className="text-lg text-muted-foreground">
        Capture your thoughts, track your mental journey, and reflect daily. Voice your feelings or jot them down in seconds.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg">
          <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </Button>
        <Button variant="outline" size="lg">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default HeroButtons
