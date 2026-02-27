import React from 'react'


interface Props {
    children: React.ReactNode
    color: "dark" | "light"
    type?: "button" | "submit" | "reset"
}

const Button = ({ children, ...props }: Props) => {

    const buttonStyles = {
        dark: "bg-primary text-background px-4 py-2 font-gotham font-medium border-solid border-2 px-8 py-3 cursor-pointer hover:bg-primary/80 transition-colors text-xs/6",
        light: "bg-background text-white px-4 py-2 border-primary border-solid border-2 px-8 py-3 cursor-pointer hover:bg-primary/80 transition-colors text-xs/6",
    }

    return (
        <button className={`${buttonStyles[props.color]} flex items-center justify-center gap-2`}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" strokeWidth={1.5} stroke={props.color === "dark" ? "#000000" : "#ffffff"} className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </button>
    )
}

export default Button