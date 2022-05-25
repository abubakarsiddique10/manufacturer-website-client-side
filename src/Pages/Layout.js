import React from "react";
import Footer from "../components/Footer";
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
            {/*  <Footer /> */}
        </>
    )
}
export default Layout;