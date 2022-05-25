import React from "react";
import { useNavigate } from "react-router-dom";
const Tool = ({ tool }) => {
    const { name, image, quantity, available, description, price } = tool;

    const navigate = useNavigate();
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:w-lg bg-base-100 shadow-xl">
            <figure><img src={image} className="h-auto object-cover w-48" alt="Shoes" /></figure>
            <div className="card-body p-6">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="flex justify-between font-semibold">
                    <p>Minimum: <span className="text-lg">{quantity}</span></p>
                    <p className="text-right">Available: <span className="text-lg">{available}</span></p>
                </div>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">Per Price: <span className="text-xl font-bold">${price}</span></h5>
                    <button onClick={() => handlePurchase(tool._id)} className="btn btn-primary px-6 rounded-0">purchase</button>
                </div>
            </div>
        </div>
    )
}
export default Tool;