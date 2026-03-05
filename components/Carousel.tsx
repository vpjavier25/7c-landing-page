import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { HomeSection } from "@/app/page"

export default function CarouselImg({ homeSection, state }: { homeSection: HomeSection, state: boolean }) {
  return (
    <div className={state ? " fixed flex items-center justify-center top-0 left-0 w-full h-dvh z-50 bg-carousel" : "hidden"}>
      <Carousel className="w-full  max-w-[12rem] sm:max-w-xs z-50">
        <CarouselContent>
          {Object.values(homeSection).map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image src={img} alt={`Experiencia en 7 Cielos Rooftop ${index + 1}`} className="w-70 h-auto sm:w-90" width={500} height={500} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div >
  )
}