import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";;
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    console.log(order)
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    console.log(order)
    return (
        <div className>
            <div class="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
                <div class="card-body">
                    <h2 class="card-title">Hello, {order.name}</h2>
                    <p>Products Quantity {order}</p>
                    <span>Please Pay: {order.price}</span>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
                <div class="card-body">

                </div>
            </div>
        </div>
    )
}
export default Payment;