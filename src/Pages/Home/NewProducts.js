import React from "react";
import img1 from "../../assets/images/tools/tool1.png";
import img2 from "../../assets/images/tools/tool2.png";
import img3 from "../../assets/images/tools/tool3.png";
import img4 from "../../assets/images/tools/tool4.png";
import img5 from "../../assets/images/tools/tool5.png";
import img6 from "../../assets/images/tools/tool6.png";
import img7 from "../../assets/images/tools/tool7.png";
import img8 from "../../assets/images/tools/tool1.png";
import NewProduct from "./NewProduct";
const NewProducts = () => {
    const tools = [
        {
            card1: { "name": "Machine 1", "img": img1 },
            card2: { "name": "abu 2", "img": img2 },
            card3: { "name": "Machine 3", "img": img3 },
            card4: { "name": "Machine 4", "img": img4 },
        },
        {
            card1: { "name": "Machine 5", "img": img1 },
            card2: { "name": "abu 6", "img": img2 },
            card3: { "name": "Machine 7", "img": img3 },
            card4: { "name": "Machine 8", "img": img4 },
        },
        {
            card1: { "name": "Machine 9", "img": img1 },
            card2: { "name": "abu 10", "img": img2 },
            card3: { "name": "Machine 11", "img": img3 },
            card4: { "name": "Machine 12", "img": img4 },
        },

    ]
    return (
        <section className="background py-20">
            <div className="container">
                <h1 className="text-4xl text-center mb-8 font-medium">Our New Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        tools.map(tool => <NewProduct tool={tool} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default NewProducts;