import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
    const [tools, setTools] = useState([]);
    console.log(tools)
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const tool =
        [
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/23jjfMk/tool1.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            },
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/jwBFjH0/tool2.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            },
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/hCBnvsW/tool3.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            },
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/CnYVz27/tool5.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            },
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/d5Hj3vr/tool4.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            },
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/pr7CQSL/tool6.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            },
            {
                "name": "The Machine Screw",
                "image": "https://i.ibb.co/gr4sNkW/tool7.png",
                "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
                "quantity": 10,
                "available": 500,
                "price": 5
            }
        ]

    return (
        <section className="background py-20">
            <div className="container">
                <h1 className="text-4xl text-center mb-8 font-medium">Our Different Hand Tools</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        tools.map(tool => <Tool tool={tool} key={tool._id} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Tools;