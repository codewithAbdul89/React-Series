import React from 'react'

function Button({
    children,
    bgColor = 'bg-blue-600',
    textColor = 'white',
    type = 'button',
    className = "",
    ...props 
}) {

    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}
        `}
            {...props}
            type={type}
        >
            {
                children
            }
        </button>
    )
}

export default Button