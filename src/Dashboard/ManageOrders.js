import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-temple-92933.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const makeAdmin = (email) => {
        fetch(`https://immense-temple-92933.herokuapp.com/booked?email=${email}`, {
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