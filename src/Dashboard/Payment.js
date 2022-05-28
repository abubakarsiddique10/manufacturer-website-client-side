import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; import CheckoutForm from "./CheckoutForm";
;

const stripePromise = loadStripe('pk_test_51L1MX0FVsslLtOw8WUuAvww3deCWTD1vXCZ7WPdqT8XdkwU9emggM8CsUMxpX5n8uWP7KygNLJILkP6InvzkmbGb001mI9b6d5');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    console.log(order)
    return (
        <div className>
            <div className="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Hello, {order.name}</h2>
                    <p>Products Quantity {order.orderQuantity}</p>
                    <span>Please Pay: ${order.price}</span>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    )
}
export default Payment;