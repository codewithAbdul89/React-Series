import React from 'react'

function Button({
    type,
    className = '',
    buttonText,
    ...props
}) {
    return (
        <button
            {...props}
            className={`${className}`}
            type={type}>
            {buttonText}
        </button>
    )
}

export default Button