"use client"
import { useRef, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { HomeSection } from "@/app/[lang]/page"

export default function CarouselImg({ homeSection, state, closeCarousel }: { homeSection: HomeSection, state: boolean, closeCarousel: () => void }) {

  const carouselRef = useRef<HTMLDivElement>(null)

  const handleClickOutSide = (event: MouseEvent) => {
    if (carouselRef.current && !carouselRef.current.contains(event.target as Node)) {
      closeCarousel()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide)
    return () => {
      document.removeEventListener("click", handleClickOutSide)
    }
  }, [])

  return (
    <div className={state ? " fixed flex items-center justify-center top-0 left-0 w-full h-dvh z-50 bg-carousel" : "hidden"}>
      <Carousel ref={carouselRef} opts={{
        align: "start",
        loop: true,
      }}
        className="w-full  max-w-[20rem] sm:max-w-sm lg:max-w-lg z-50">
        <CarouselContent>
          {Object.values(homeSection).map((img, index) => (
            <CarouselItem key={index}>
              <Image src={img} alt={`Experiencia en 7 Cielos Rooftop ${index + 1}`} className="w-full h-auto" width={500} height={500} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible sm:visible sm:max-w-sm" />
        <CarouselNext className="invisible sm:visible sm:max-w-sm" />
      </Carousel>
    </div >
  )
}