import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://immense-temple-92933.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [tool])
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, event) => {

        // get order details
        const bookingOrder = {
            name: user.displayName,
            email: user.email,
            phone: data.phone,
            orderQuantity: data.quantity,
            price: data.quantity * 5,
            address: data.address,
        }

        // update Available Stock
        const availableStock = tool.available;
        const quantity = parseInt(data.quantity);
        if (quantity <= availableStock && quantity >= 10) {
            const available = availableStock - quantity;
            fetch(`https://immense-temple-92933.herokuapp.com/tools/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ available })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        fetch('https://immense-temple-92933.herokuapp.com/booking', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({ bookingOrder })
                        })
                        setTool(data);
                        setError('');
                        toast("Your order has successfull");
                    }
                })
        }
        else if (quantity > availableStock) {
            setError(`You can buy up to ${tool.available} products`)
        }
        else if (quantity < 10) {
            setError("You have to purchase at least 10 products");
        }
    }
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-screen items-center border height">
                    <div className=" flex items-center">
                        <img src={tool.image} className="max-w-[300px] h-auto" />
                        <div>
                            <h5 className="text-2xl font-medium mb-2">Name: {tool.name}</h5>
                            <p className="text-lg font-medium">Available Stock: {tool.available}</p>
                            <p className="text-lg font-medium">Minimum Order: {tool.quantity}</p>
                            <p className="text-lg font-medium">Price: {tool.price}</p>
                            <p className="text-lg">{tool.description}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white shadow-2xl p-12 w-full max-w-[450px]">
                            <h1 className="text-center font-bold text-3xl mb-5">Purchase Now</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={user.displayName}
                                        className="w-full h-12 text-lg p-3 outline-0 border"
                                        disabled
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        value={user.email}
                                        placeholder="Email"
                                        className="w-full h-12 text-lg p-3 outline-0 border"
                                        disabled
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="w-full h-12 text-lg p-3 outline-0 border"
                                        {...register("phone")}
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Quantiy"
                                        className="w-full h-12 text-lg p-3 outline-0 border"
                                        {...register("quantity")}
                                    />
                                    {error && <p className="text-red-500">{error}</p>}
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="w-full h-12 text-lg p-3 outline-0 border"
                                        {...register("address")}
                                    />
                                </div>

                                <div>
                                    <input
                                        className="w-full btn bg-primary text-white border-none"
                                        disabled={error}
                                        type="submit" value="Purchase" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Purchase;