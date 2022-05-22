import React from "react";
import Header from "../components/Header";
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <div className="">
                    {children}
                </div>
            </main>
        </>
    )
}
export default Layout;