import React from "react";
import Banner from "./Banner";
import BestSell from "./BestSell";
import NewProducts from "./NewProducts";
import OurPolicy from "./OurPolicy";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";
const Home = () => {
    return (<>
        <Banner />
        <OurPolicy />
        <Tools />
        <NewProducts />
        <Summary />
        <Reviews />
        <BestSell />
    </>
    )
}
export default Home;