import React from "react";
import banner from '../../assets/images/banner2.png';
import Button from "../../components/Button";
const Banner = () => {
    return (
        <section className="bg-[#08151B] text-white">
            <div className="container">
                <div className="hero-content justify-between p-0 flex-col lg:flex-row-reverse box-border items-center min-h-[675px] py-[80px] gap-10">
                    <img src="https://i.ibb.co/MnM0mvh/1-removebg-preview.png" className="sm:max-w-sm lg:max-w-lg rounded-lg max-w-[200px]" />
                    <div>
                        <h1 className="text-[44px] font-bold mt-6 lg:mt-0">Shop our Best Brands of Tools</h1>
                        <p className="pb-7 mt-4 text-xl lg:pr-20">Hand Tools. Get the best collection of Hand Tools & Hardware Fittings in the Bangladesh at hardwarezone.com. We have been selling Hand Tools for the past 40 years. We know what is good & what is not. Let us help you select the right tool for what you want to do!</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;

