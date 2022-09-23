// Code Keypad Component Here

import React from 'react'

function Keypad() {
    function handleSubmit(event) {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={handleSubmit} />
    )
}

export default Keypad