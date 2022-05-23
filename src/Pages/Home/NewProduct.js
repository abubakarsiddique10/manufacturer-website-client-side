import React from "react";
const NewProduct = ({ tool }) => {
    const { card1, card2, card3, card4 } = tool;
    return (
        <div className="grid grid-cols-2 gap-4 bg-white">
            <div class="card lg:w-lg h-auto">
                <figure class="px-5">
                    <img src={card1.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center py-0">
                    <h2 class="card-title py-0">{card1.name}</h2>
                </div>
            </div>
            <div class="card lg:w-lg h-auto">
                <figure class="px-5">
                    <img src={card2.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center py-0">
                    <h2 class="card-title">{card2.name}</h2>
                </div>
            </div>
            <div class="card lg:w-lg h-auto">
                <figure class="px-5">
                    <img src={card3.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center pt-0 pb-8">
                    <h2 class="card-title">{card3.name}</h2>
                </div>
            </div>
            <div class="card lg:w-lg h-auto">
                <figure class="px-5">
                    <img src={card4.img} />
                </figure>
                <div class="card-body items-center text-center pt-0 pb-8">
                    <h2 class="card-title">{card4.name}</h2>
                </div>
            </div>
        </div>
    )
}
export default NewProduct;