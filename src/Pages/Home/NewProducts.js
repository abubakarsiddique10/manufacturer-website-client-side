import React, { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
const NewProducts = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://immense-temple-92933.herokuapp.com/newproducts')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <section className="background pt-24">
            <div className="container">
                <h1 className="text-4xl text-center mb-12 font-medium">Our New Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        tools.map(tool => <NewProduct tool={tool} key={tool._id} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default NewProducts;