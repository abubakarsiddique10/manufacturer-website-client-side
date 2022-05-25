import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dasbborad = () => {
    return (
        <section>
            <div className="container">
                <h1>Welcome Dasbborad</h1>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        <Outlet></Outlet>
                        <label for="my-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            <li><Link to="/dashboard">Dasbborad</Link></li>
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Dasbborad;