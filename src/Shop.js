import React, { useState } from 'react'

const Shop = () => {
    const [products, setProduct] = useState([
        { id: 1, name: "balon", price: 5, colorGof: "pink" },
        { id: 2, name: "vanila", price: 17, colorGof: "blue" },
        { id: 3, name: "snack", price: 25, colorGof: "green" },
        { id: 4, name: "ice-cream", price: 30, colorGof: "yellow" }
    ])
    return (
        <div>

            <h2> Shop </h2>
            {products.map((product) => ( 
                <div key={product.id} style={{color: product.colorGof}}>
                    <p>  { ` Name: ${product.name}, Price: ${product.price}`}</p>
                </div>
            ))}
        </div>
    )
}

export default Shop