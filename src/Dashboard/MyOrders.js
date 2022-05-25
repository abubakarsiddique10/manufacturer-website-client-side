import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [])

    const handlePayment = (id) => {
        console.log(id)
        navigate(`/dashboard/payment/${id}`)
    }
    return (
        <div>
            <h1>This my MyOrders {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.orderQuantity}</td>
                                <td><button onClick={() => handlePayment(order._id)} className="btn btn-sm">Pay</button></td>
                                <td><button className="btn btn-sm ">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyOrders;