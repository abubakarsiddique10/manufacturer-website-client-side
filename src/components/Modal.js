import React from "react";
const Modal = ({ deleteOrder, orders, setOrders }) => {
    const handleDelete = id => {
        fetch(`http://localhost:5000/booked/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const newOrders = orders.filter(order => order._id !== id);
                setOrders(newOrders)
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are your sure you want to delete {deleteOrder.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete(deleteOrder._id)} htmlFor="delete-confirm" className="btn">Delete</label>
                        <label htmlFor="delete-confirm" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;