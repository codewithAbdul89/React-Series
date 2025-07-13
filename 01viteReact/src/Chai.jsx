import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
const statement='Click now!'
function Abdul() {
    return (
        React.createElement(
            'a',
            {
                href: 'https://www.google.com',
                target: '_blank'
            },
            statement
        )
    )
}




export default Abdul