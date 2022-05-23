import React from "react";
const SinglePolicy = ({ policy }) => {
    const { icon, title, info } = policy;
    return (
        <div class="card lg:card-side md:card-side bg-base-100 px-5 py-4  rounded-none">
            <figure><img src={icon} alt="Album" /></figure>
            <div class="md:ml-4 flex justify-center flex-col">
                <h2 class="font-medium">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}
export default SinglePolicy;