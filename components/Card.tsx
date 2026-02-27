import React from 'react'
import Image from 'next/image'

const Card = ({ image }: { image: string }) => {
    return (
        <div className='flex flex-col items-center justify-center p-4 relative border-2 border-primary w-90 h-120'>
            <div className='absolute -top-4 -left-4  bg-background border-2 border-primary w-8 h-8 rounded-full border-b-transparent border-l-transparent border-r-primary border-t-transparent rotate-45 grow'></div>
            <div className='absolute -top-4 -right-4  bg-background border-2 border-primary w-8 h-8 rounded-full border-b-primary border-l-transparent border-r-transparent border-t-transparent rotate-45'></div>
            <div className='absolute -bottom-4 -left-4  bg-background border-2 border-primary w-8 h-8 rounded-full border-b-transparent border-l-transparent border-r-transparent border-t-primary rotate-45'></div>
            <div className='absolute -bottom-4 -right-4  bg-background border-2 border-primary w-8 h-8 rounded-full border-b-transparent border-l-primary border-r-transparent border-t-transparent rotate-45'></div>
            <Image src={image} alt="Card" width={100} height={100} />
        </div>
    )
}

export default Card