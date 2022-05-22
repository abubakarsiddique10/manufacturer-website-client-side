import React from "react";
const Button = ({ children }) => {
    return (
        <button className="btn bg-primary text-white border-0">{children}</button>
    )
}
export default Button;