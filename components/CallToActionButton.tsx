"use client"
import { useEffect, useState, ReactNode } from "react"

const CallToActionButton = ({ children }: { children: ReactNode }) => {

    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // bajando → ocultar
                setHidden(true)
            } else {
                // subiendo → mostrar
                setHidden(false)
            }

            lastScrollY = window.scrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <a href="https://www.apparta.co/7-cielos/reservas?utm_medium=instagram" target="_blank">
            <button
                className={`flex gap-2 fixed bottom-3 right-3 z-50 
                bg-primary text-background font-gotham font-medium border-2 px-4 py-2 
                cursor-pointer text-xs/6
                transform transition-all duration-300
                
                hover:scale-110 hover:shadow-2xl
                
                ${hidden ? "translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
                `}
            >
                {children}

                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" className="size-6">
                    <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

                <span className="absolute top-[-7px] right-[-7px] flex size-6">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex size-6 rounded-full bg-emerald-500"></span>
                </span>
            </button>
        </a>
    )
}

export default CallToActionButton