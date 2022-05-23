import React from "react";
import icon1 from "../../assets/images/icons/icon1.png";
import icon2 from "../../assets/images/icons/icon2.png";
import icon3 from "../../assets/images/icons/icon3.png";
import icon4 from "../../assets/images/icons/icon4.png";
import SinglePolicy from "./SinglePolicy";
const OurPolicy = () => {
    const ourPolicy = [
        {
            "icon": icon1,
            "title": "Free Shipping",
            "info": "Free shipping on all US order",
        },
        {
            "icon": icon2,
            "title": "Support 24/7",
            "info": "Contact us 24 hours a day",
        },
        {
            "icon": icon3,
            "title": "100% Money Back",
            "info": "You have 30 days to Return",
        },
        {
            "icon": icon4,
            "title": "Payment Secure",
            "info": "We ensure secure payment",
        },
    ]
    return (
        <section className="background pt-20">
            <div className="container">
                <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        ourPolicy.map(policy => <SinglePolicy policy={policy} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default OurPolicy;