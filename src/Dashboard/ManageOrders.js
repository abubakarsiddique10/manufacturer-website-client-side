import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";
const ManageOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    console.log(products)
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/booked?email=${email}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('You have meked Admin')
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Orders</th>
                            <th>Status</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.orderQuantity}</td>
                                <td>Panding</td>
                                <td>UnPaid</td>
                                {product.role == "admin" ? <td><button className="btn btn-sm bg-primary text-white border-none">Admin</button></td> : <td><button onClick={() => makeAdmin(product.email)} className="btn btn-sm bg-primary text-white border-none">MakeAdmin</button></td>}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ManageOrders;