// src/components/Hero/HeroImage.tsx
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className="w-full h-auto flex justify-center">
      <Image
        src="/HeroIllustration.svg"
        alt="Journal Illustration"
        width={500}
        height={500}
        className="w-full max-w-md md:max-w-full"
        priority
      />
    </div>
  )
}

export default HeroImage
