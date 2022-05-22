import React from "react";
import banner from '../../assets/images/banner2.png';
import Button from "../../components/Button";
const Banner = () => {
    return (
        <section className="">
            <div className="container">
                <div className="hero-content justify-between p-0 flex-col lg:flex-row-reverse box-border items-center min-h-[520px] py-[80px]">
                    <img src={banner} className="max-w-sm lg:max-w-lg rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold mt-6 lg:mt-0 ">Your New Smile Starts Here</h1>
                        <p className="py-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;