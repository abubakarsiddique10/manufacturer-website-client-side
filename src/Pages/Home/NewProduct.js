import React from "react";
const NewProduct = ({ tool }) => {
    const { card1, card2, card3, card4 } = tool;
    return (
        <div className="grid grid-cols-2 gap-4 bg-white">
            <div className="card lg:w-lg h-auto">
                <figure className="px-5">
                    <img src={card1.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center py-0">
                    <h2 className="card-title py-0">{card1.name}</h2>
                </div>
            </div>
            <div className="card lg:w-lg h-auto">
                <figure className="px-5">
                    <img src={card2.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center py-0">
                    <h2 className="card-title">{card2.name}</h2>
                </div>
            </div>
            <div className="card lg:w-lg h-auto">
                <figure className="px-5">
                    <img src={card3.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center pt-0 pb-8">
                    <h2 className="card-title">{card3.name}</h2>
                </div>
            </div>
            <div className="card lg:w-lg h-auto">
                <figure className="px-5">
                    <img src={card4.img} />
                </figure>
                <div className="card-body items-center text-center pt-0 pb-8">
                    <h2 className="card-title">{card4.name}</h2>
                </div>
            </div>
        </div>
    )
}
export default NewProduct;