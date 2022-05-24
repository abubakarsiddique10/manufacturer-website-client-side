import React from "react";
import Review from "./Review";
import icon1 from "../../assets/images/icons/icon1.png";
const Reviews = () => {
    const reviews = [
        {
            "img": icon1,
            "name": "Fannie Moreno",
            "founder": "Founder Xarmarin",
            "feedback": "I would say I highly recommend this to my friends, acquaintances and family members. The attitude and services are always dedicated.",
        },
        {
            "img": icon1,
            "name": "Fannie Moreno",
            "founder": "Founder Xarmarin",
            "feedback": "I would say I highly recommend this to my friends, acquaintances and family members. The attitude and services are always dedicated.",
        },
        {
            "img": icon1,
            "name": "Fannie Moreno",
            "founder": "Founder Xarmarin",
            "feedback": "I would say I highly recommend this to my friends, acquaintances and family members. The attitude and services are always dedicated.",
        },
    ]
    return (
        <section className="py-20 background">
            <div className="container">
                <h1 className="text-4xl text-center font-medium mb-10">Happy Customers Said</h1>
                <div className="grid grid-cols-1 text-center md:text-left lg:grid-cols-2 gap-5">
                    {
                        reviews.map(review => <Review review={review} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Reviews;