"use client"

import { useState, useEffect } from 'react'
import Button from './Button'

export default function Form() {
    return (
        <form action="" className='flex flex-col gap-10 justify-center items-center w-full'>
            <div className='grid grid-cols-1 gap-2 sm:w-120 items-center sm:grid-cols-[50px_minmax(900px,_1fr)] sm:gap-5'>
            <label htmlFor="name" className='text-gray-500'>Nombre:</label>
            <input className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' type="text" placeholder="Nombre" />
            <label htmlFor="email" className='text-gray-500'>Email:</label>
            <input className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' type="email" placeholder="Email" />
            <label htmlFor="phone" className='text-gray-500'>Teléfono:</label>
            <input className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' type="tel" placeholder="Teléfono" />
            <label htmlFor="message" className='text-gray-500'>Mensaje:</label>
            <textarea className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' placeholder="Mensaje"></textarea>
            </div>
         
            <Button type="submit" color="dark">ENVIAR</Button>
        </form>
    )
}