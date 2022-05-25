import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const manuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {!user ? <li><Link to="/login">Login</Link></li> : <button onClick={logout} className="text-left pl-4">Sign Out</button>}
    </>


    return (
        <header className="bg-primary text-white sticky z-50 top-0">
            <nav>
                <div className="navbar justify-between px-4 mx-auto max-w-7xl">
                    <div className="navbar-start">
                        <Link to='/' className="btn btn-ghost normal-case text-xl px-0">Hardware Zone</Link>
                    </div>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0 text-primary">
                            {manuItems}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {manuItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;