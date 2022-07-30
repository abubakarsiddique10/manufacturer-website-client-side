import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
    const [tools, setTools] = useState([]);
    const maxTols = tools.slice(0, 8);

    useEffect(() => {
        fetch('https://immense-temple-92933.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <section className="background pt-24">
            <div className="container">
                <h1 className="text-4xl text-center mb-12 font-medium">Our Different Hand Tools</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        maxTols.map(tool => <Tool tool={tool} key={tool._id} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Tools;