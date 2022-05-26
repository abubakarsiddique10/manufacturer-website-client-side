import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dasbborad = () => {
    return (
        <section className="">
            <div className="container">
                <h1 className="text-3xl text-center font-medium">Welcome to Dasbborad</h1>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        <Outlet></Outlet>
                        <label for="my-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer" class="drawer-overlay"></label>
                        <ul class="menu overflow-y-auto w-44 bg-base-100 text-base-content">
                            <li><Link to="/dashboard">Dasbborad</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                            <li><Link to="/dashboard/myProfile">My Profile</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Dasbborad;