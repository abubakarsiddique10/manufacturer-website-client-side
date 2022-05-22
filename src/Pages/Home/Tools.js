import React from "react";
import img1 from '../../assets/images/tools/tool1.png';
import img2 from '../../assets/images/tools/tool2.png';
import img3 from '../../assets/images/tools/tool3.png';
import img4 from '../../assets/images/tools/tool4.png';
import img5 from '../../assets/images/tools/tool5.png';
import img6 from '../../assets/images/tools/tool6.png';
import img7 from '../../assets/images/tools/tool7.png';
import img8 from '../../assets/images/tools/tool1.png';
import Tool from "./Tool";
const Tools = () => {

    const tools = [
        {
            "name": "The Machine Screw",
            "image": img1,
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": "100",
            "available": "200",
            "price": "10",
        },
        {
            "name": "The Machine Screw",
            "image": img2,
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": "100",
            "available": "200",
            "price": "10",
        },
        {
            "name": "The Machine Screw",
            "image": img3,
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": "100",
            "available": "200",
            "price": "10",
        },
        {
            "name": "The Machine Screw",
            "image": img4,
            "description": "Add an extra dose of style with this raw look henley t-shirt from the house of Tinted.",
            "quantity": "100",
            "available": "200",
            "price": "10",
        },
    ]

    return (
        <section className="background py-20">
            <div className="container">
                <h1 className="text-4xl text-center mb-8 font-medium">Our Different Hand Tools</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        tools.map(tool => <Tool tool={tool} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Tools;