import React from "react";
import Banner from "./Banner";
import BestSell from "./BestSell";
import NewProducts from "./NewProducts";
import OurPolicy from "./OurPolicy";
import Tools from "./Tools";
const Home = () => {
    return (<>
        <Banner />
        <OurPolicy />
        <Tools />
        <NewProducts />
        <BestSell />
    </>
    )
}
export default Home;