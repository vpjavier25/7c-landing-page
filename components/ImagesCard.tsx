"use client"

import { useState } from "react"
import Image from "next/image"
import { HomeSection } from "../app/page"
import CarouselImg from "./Carousel"

export default function ImagesCard({ homeSection }: { homeSection: HomeSection }) {
    const [carouselOpen, setCarouselOpen] = useState(false)
    return (
        <div className="flex justify-center flex-nowrap w-full sm:flex-wrap mt-10">
            <div className="flex overflow-x-auto gap-5 px-4">
                {Object.values(homeSection).map((img, index) => (
                    <Image onClick={()=> setCarouselOpen(!carouselOpen)} key={index} src={img} alt={`Experiencia en 7 Cielos Rooftop ${index + 1}`} className="w-70 h-auto sm:w-90" width={500} height={500} />
                ))}
            </div>
            {carouselOpen && <CarouselImg homeSection={homeSection} state={carouselOpen}/>}
        </div>
    )
}