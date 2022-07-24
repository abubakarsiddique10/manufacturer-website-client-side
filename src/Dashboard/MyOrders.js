import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import auth from "../firebase.init";
const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(null);

    useEffect(() => {
        fetch(`https://immense-temple-92933.herokuapp.com/booking?email=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [])


    const handlePayment = (id) => {
        navigate(`/dashboard/payment/${id}`)
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
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
                                <td>
                                    <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm" className="btn modal-button btn btn-sm ">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <Modal deleteOrder={deleteOrder} orders={orders} setOrders={setOrders} />}
        </div>
    )
}
export default MyOrders;