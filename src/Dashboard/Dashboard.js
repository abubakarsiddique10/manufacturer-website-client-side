import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
const Dasbborad = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);
    console.log(user)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booked/${user.email}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => setAdmin(data.admin))
        }
    }, [])
    return (
        <section className="">
            <div className="container">
                <h1 className="text-3xl text-center font-medium my-2">Welcome to Dasbborad</h1>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        <Outlet></Outlet>
                        <label for="my-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer" class="drawer-overlay"></label>
                        <ul class="menu overflow-y-auto w-48 bg-base-100 text-base-content">
                            {!admin ? <>
                                <li><Link to="/dashboard">Dasbborad</Link></li>
                                <li><Link to="/dashboard/addReview">Add Review</Link></li>
                            </> :
                                <>
                                    <li><Link to="/dashboard/ManageOrders">Manage All Orders</Link></li>
                                    <li><Link to="/dashboard/ManageProducts">Manage Products</Link></li>
                                    <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                                </>}
                            <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Dasbborad;