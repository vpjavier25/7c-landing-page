"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)

            let current = "";
            const viewportHeightNoScrollbar = document.documentElement.clientHeight;
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link')

            sections.forEach(section => {
                const sectionPosition = section.getBoundingClientRect().top;
                if (sectionPosition < viewportHeightNoScrollbar / 2) {
                    current = section.getAttribute('id') || "";
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("border-b-2", "border-[var(--primamry)]");
                if (current && link.getAttribute('href')?.includes(current)) {
                    link.classList.add("border-b-2", "border-[var(--primamry)]");
                }
            });
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header className={`flex items-center justify-between  fixed top-0 right-0 z-50 w-full transition duration-300 ease-in-out ${isScrolled ? 'p-4 lg:p-4 bg-header lg:flex-row sm:gap-20 2xl:gap-40 lg:py-4 lg:justify-center' : isMenuOpen ? 'bg-header p-4 lg:p-4 gap-10 lg:flex-col lg:pt-10 lg:justify-center' : 'p-4 lg:p-4 gap-10 lg:flex-col lg:pt-10 lg:justify-center'}`}>
                <Image src="/logo.png" alt="Logo" width={150} height={100} />
                <nav className="flex items-center justify-between pr-5 sm:p-4 font-gotham font-medium">
                    <ul className="hidden lg:w-full lg:flex lg:flex-wrap lg:gap-15 2xl:gap-40 lg:text-gray-400">
                        <a href="#home" className='nav-link' ><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">HOME</li></a>
                        <a href="#menu" className='nav-link' onClick={() => setIsMenuOpen(!isMenuOpen)}><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">MENÚ</li></a>
                        <a href="#ubicacion" className='nav-link'><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">UBICACIÓN</li></a>
                        <a href="#contacto" className='nav-link'><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">CONTACTO</li></a>
                        <a href="#politicas" className='nav-link'><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">POLÍTICAS DE PRIVACIDAD</li></a>
                    </ul>
                    <button className={`lg:hidden flex flex-col gap-1 z-200`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className={`w-10 h-1 bg-white transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-10 h-1 bg-white transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                    </button>
                </nav>
            </header>
            {isMenuOpen && (
                <>
                    <button className='z-100 flex flex-col gap-1 visible lg:invisible -translate-y-10' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className='w-10 h-1 bg-white transition duration-300 ease-in-out rotate-45 translate-y-2'></span>
                        <span className='w-10 h-1 bg-white transition duration-300 ease-in-out rotate-45'></span>
                    </button>
                    <ul className="flex flex-col justify-center items-center gap-5 text-gray-400 fixed pt-25 top-0 right-0 z-10 bg-header py-5 lg:hidden w-full">
                        <a href="#home" className='nav-link' onClick={() => setIsMenuOpen(!isMenuOpen)}><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">HOME</li></a>
                        <a href="#menu" className='nav-link' onClick={() => setIsMenuOpen(!isMenuOpen)}><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">MENÚ</li></a>
                        <a href="#ubicacion" className='nav-link' onClick={() => setIsMenuOpen(!isMenuOpen)}><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">UBICACIÓN</li></a>
                        <a href="#contacto" className='nav-link' onClick={() => setIsMenuOpen(!isMenuOpen)}><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">CONTACTO</li></a>
                        <a href="#politicas" className='nav-link' onClick={() => setIsMenuOpen(!isMenuOpen)}><li className="hover:text-white transition-colors cursor-pointer hover:underline hover:decoration-[var(--primamry)] hover:decoration-2 hover:underline-offset-4">POLÍTICAS DE PRIVACIDAD</li></a>
                    </ul>
                </>
            )}
        </>

    )
}       