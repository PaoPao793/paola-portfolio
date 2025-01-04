import React from "react";

interface ButtonProps {
    text: string;
    link: string;
    className?: string;
}

export default function Button({ text, link, className }: ButtonProps) {
    return (
        <a 
            href={link}
            className={`bg-chesnut-dark text-white font-bold py-2 px-4 rounded-full hover:bg-wine-dark hover:text-gray-100 transition ${className || ""}`}>
            {text}
        </a>
    );
}
