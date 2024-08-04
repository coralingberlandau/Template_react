import React, { useState } from 'react'
import girl2 from './assets/girl2.png'
import logoboy from './assets/logoboy.png'
import girl from './assets/girl.jpeg'

const Student = () => {
    const [student, setStudent] = useState([
        { id: 1, name: "waga", age: "25", picture: logoboy, colorBack: "red" },
        { id: 2, name: "coco", age: "29", picture: girl2, colorBack: "green" },
        { id: 3, name: "lee", age: "32", picture: girl, colorBack: "blue" },
    ])
    return (
        <div>
            <h2>Student</h2>
            {student.map((stu) => (
                <div key={stu.id} style={{ backgroundColor: stu.colorBack }}>
                    <p> {` Name: ${stu.name}, Age: ${stu.age}` }</p>
                    <img src={stu.picture} width={100} alt={`${stu.user}'s picture`}/>

                </div>
            ))}
        </div>
    )
}

export default Student