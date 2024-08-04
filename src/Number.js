import React, { useState } from 'react'

const Number = () => {
    const [number, setNumber] = useState(0)

    const sum = () => {
        setNumber(number + 1)
    }
    
    const clear = () => {
        setNumber(0)
    }

    return (
        <div style={{ background: "green" }}>
            <h2 > Number</h2>
            Click: <button onClick={sum}>{number}</button>
            <button onClick={clear}> Clear </button>
        </div>
    )
}

export default Number