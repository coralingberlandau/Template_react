import React, { useState } from 'react'

const Animals = () => {

    const [name, setName] = useState([
        { id: 1, name: "luck", type: "dog", age: 3, colorG: "pink" },
        { id: 2, name: "momo", type: "cat", age: 5, colorG: "green" },
        { id: 3, name: "waga", type: "bird", age: 2, colorG: "blue" }
    ])
    return (
        <div>
            <h2>Animals </h2>

            {name.map((nam) => (

                <div key={nam.id} style={{ color: nam.colorG }}>
                    <p> {`Name: ${nam.name}, Type ${nam.type}, Age: ${nam.age}`} </p>
                </div>
            ))}

        


    </div>
    )
}

export default Animals