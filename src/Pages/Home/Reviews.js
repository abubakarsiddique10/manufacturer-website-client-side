import React, { useEffect, useState } from "react";
import Review from "./Review";
const Reviews = () => {
    const [reviews, setRevies] = useState([]);
    useEffect(() => {
        fetch('https://immense-temple-92933.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setRevies(data))
    }, [])
    const maxReviews = reviews.concat().reverse()
    return (
        <section className="pt-20 background">
            <div className="container">
                <h1 className="text-4xl text-center font-medium mb-14">Happy Customers Said</h1>
                <div className="grid grid-cols-1 text-center md:text-left lg:grid-cols-2 gap-5">
                    {
                        maxReviews.map(review => <Review review={review} key={review._id} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Reviews;