import React from 'react'

function Input({
    labelClassName,
    label,
    type = "text",
    className = "",
    ...props
}) {
    return (
        <div className='flex flex-col space-y-2'>
            {/* Label */}

            {
                label && (
                    <label
                        className={`${labelClassName}`}>{label}</label>
                )
            }


            {/* Input */}

            <input type={type}
                {...props}
                className={`${className} w-full`}
            />

        </div>
    )
}

export default Input