// src/components/Hero/Hero.tsx
import HeroTextWithButtons from './HeroButtons'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <HeroTextWithButtons />
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
