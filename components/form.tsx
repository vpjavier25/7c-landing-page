"use client"

import { useActionState } from "react"
import { appendToSpreadsheet } from "../utils/action"
import Button from './Button'

export default function Form() {

    const handleFormSubmit = async (prevState: any, formData: FormData) => {

        try {
            const data = {
                nombre: formData.get("nombre"),
                email: formData.get("email"),
                telefono: formData.get("telefono"),
                mensaje: formData.get("mensaje"),
            }
            await appendToSpreadsheet(data)
            return { status: "success" }
        } catch (error) {
            return { status: "error" }
        }

    }

    const [state, formAction, isPending] = useActionState(handleFormSubmit, { status: "idle" })

    return (
        <form action={formAction} autoComplete="on" className='flex flex-col gap-10 justify-center items-center w-full bg-linear-[to_top,#232323_5%,#000000_95%]'>
            <div className='grid grid-cols-1 gap-2 sm:w-120 items-center sm:grid-cols-[50px_minmax(900px,_1fr)] sm:gap-5'>
                <label htmlFor="name" className='text-gray-500'>Nombre:</label>
                <input autoComplete="name" id="name" name="nombre" className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' type="text" placeholder="Nombre" />
                <label htmlFor="email" className='text-gray-500'>Email:</label>
                <input autoComplete="email" id="email" name="email" className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' type="email" placeholder="Email" />
                <label htmlFor="phone" className='text-gray-500'>Teléfono:</label>
                <input autoComplete="tel" id="phone" name="telefono" className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' type="tel" placeholder="Teléfono" />
                <label htmlFor="message" className='text-gray-500'>Mensaje:</label>
                <textarea autoComplete="message" id="message" name="mensaje" className='border-2 border-primary w-full sm:mt-5 px-4 py-2 sm:w-100 sm:mt-0' placeholder="Mensaje"></textarea>
            </div>

            <Button type="submit" color="dark">{isPending ? "ENVIANDO..." : "ENVIAR"}</Button>
        </form>
    )
}