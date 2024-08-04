import React, { useState } from 'react'

const User = () => {
    const [nameUser, serNameUser] = useState([
        { id: 1, name: "coral", city: "herzlia", colorBack: "pink" },
        { id: 2, name: "gabi", city: "tlv", colorBack: "red" },
        { id: 3, name: "arik", city: "ranaana", colorBack: "blue" }
    ])
    return (
        <div>
            <h2>User</h2>
            {nameUser.map((user) =>
                <div key={user.id} style={{ background: user.colorBack }}>
                    {` Name: ${user.name}, City: ${user.city}`}
                </div>
            )}
        </div>
    )
}

export default User