import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

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

    const handleDelete = id => {
        const permission = window.confirm('are you delete Product');
        if (permission) {
            fetch(`http://localhost:5000/booked/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const newOrders = orders.filter(order => order._id !== id);
                    setOrders(newOrders)
                })
        }
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
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
                                <td>{order.price}</td>
                                <td>
                                    {order.paid ?
                                        <button className="btn btn-sm">Paid</button>
                                        : <button onClick={() => handlePayment(order._id)} className="btn btn-sm">Pay</button>}
                                </td>
                                <td><button onClick={() => handleDelete(order._id)} className="btn btn-sm ">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyOrders;