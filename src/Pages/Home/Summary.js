import React from "react";
const img = "https://ibb.co/2hgH3cc"
const Summary = () => {
    return (
        <section className="background pt-24">
            <div className="container">
                <div>
                    <h1 className="text-4xl text-center font-medium">Welcome To</h1>
                    <h1 className="text-4xl text-center font-medium">Hardware Zone</h1>
                    <p className="text-xl text-center max-w-[800px] mx-auto mt-3">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-5 py-4 md:gap-y-5 justify-center lg:gap-10 mt-5">
                    <div className="p-5 text-center">
                        <figure><img className="mx-auto mb-1" src="https://i.ibb.co/xC5KjYN/industry.png" alt="Album" /></figure>
                        <h2 className="font-bold text-5xl">15+</h2>
                        <p className="text-lg mt-1">Years of Experience</p>
                    </div>
                    <div className="p-5 text-center">
                        <figure><img className="mx-auto pr-5" src="https://i.ibb.co/s2zN17L/repairing-service.png" alt="Album" /></figure>
                        <h2 className="font-bold text-5xl">20k+</h2>
                        <p className="text-lg mt-1">Products per Month</p>
                    </div>
                    <div className="p-5 text-center">
                        <figure><img className="mx-auto mb-1 pr-4" src="https://i.ibb.co/zGBcSv1/team.png" alt="Album" /></figure>
                        <h2 className="font-bold text-5xl">800+</h2>
                        <p className="text-lg mt-1">Our Happy Clients</p>
                    </div>
                    <div className="p-5 text-center">
                        <figure><img className="mx-auto pr-5 mb-1" src="https://i.ibb.co/kBQv2qq/feedback.png" alt="Album" /></figure>
                        <h2 className="font-bold text-5xl">500+</h2>
                        <p className="text-lg mt-1">Clients Feedbacks</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Summary;

