"use client"

import { useRef, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { HomeSection } from "@/app/[lang]/page"

type Props = {
  homeSection: HomeSection
  state: boolean
  closeCarousel: () => void
}

export default function CarouselImg({ homeSection, state, closeCarousel }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(event.target as Node)
      ) {
        closeCarousel()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [closeCarousel])

  console.log(Object.values(homeSection),"aqui")

  return (
    <div
      className={
        state
          ? "fixed inset-0 z-50 flex items-center justify-center bg-carousel"
          : "hidden"
      }
    >
      <div ref={carouselRef} className="w-full max-w-[20rem] sm:max-w-sm lg:max-w-lg">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
          }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {Object.values(homeSection).map((items:[string,string], index) => (
              <CarouselItem key={index}>
                <a href={items[1]}>
                  <Image
                    src={items[0]}
                    alt={`Experiencia en 7 Cielos Rooftop ${index + 1}`}
                    className="h-auto w-full"
                    width={500}
                    height={500}
                  />
                </a>

              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="invisible sm:visible" />
          <CarouselNext className="invisible sm:visible" />
        </Carousel>
      </div>
    </div>
  )
}