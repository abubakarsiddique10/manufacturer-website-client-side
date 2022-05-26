import React from "react";
const Review = ({ review }) => {
    const { name, image, description, companyName } = review;
    return (
        <div className="card lg:card-side md:card-side bg-base-100 py-12 px-10  rounded-none ">
            <div className="avatar mr-5 mt-2">
                <div className="w-20 h-20 mx-auto mb-4 lg:mb-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} />
                </div>
            </div>
            <div className="md:ml-4 flex justify-center flex-col">
                <h2 className="font-bold text-2xl">{name}</h2>
                <h5 className="text-lg font-medium">{companyName}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Review;