import React, { useEffect, useState } from "react";
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-temple-92933.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    const handleDelete = id => {
        const permission = window.confirm('are you delete Product');
        if (permission) {
            fetch(`https://immense-temple-92933.herokuapp.com/tools/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const newProducts = products.filter(product => product._id !== id);
                        setProducts(newProducts)
                    }
                })
        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={product.image} alt="Prduct" />
                                        </div>
                                    </div></td>
                                <td>{product.name}</td>
                                <td>{product.available}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-sm ">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ManageProducts;