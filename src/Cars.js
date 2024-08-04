import React, { useState } from 'react'

const Cars = () => {
    const [cars, setCars] = useState([
        { id: 1, type: "mazda", model: 2002, color: "black", colorGof: "black" },
        { id: 2, type: "polo", model: 2023, color: "green", colorGof: "green" },
        { id: 3, type: "kia", model: 2011, color: "pink", colorGof: "pink" },
    ])
    return (
        <div>
            <h2> Cars </h2>
            {cars.map((car) => (
                <div key={car.id} style={{ color: car.colorGof }}>
                    <p> {`Type:${car.type}, Model:${car.model}, Color: ${car.color}`}</p>
                </div>
            ))}
        </div>
    )
}
export default Cars