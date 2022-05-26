import React from "react";
import { useForm } from "react-hook-form";
const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStorageKey = '9c0f55e54619bcd0124acded6beb3fb1';

    const onSubmit = (data, event) => {
        const image = data.image[0];
        const formDate = new FormData();
        formDate.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: "POST",
            body: formDate,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const review = {
                        image: result.data.url,
                        name: data.name,
                        companyName: data.founder,
                        description: data.description,
                    }
                    fetch('http://localhost:5000/reviews', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({ review })
                    })
                }
            })
    }
    return (
        <section>
            <div className="container">
                <section>
                    <div className="container">
                        <div className="flex justify-center">
                            <div className="bg-white shadow-2xl p-12 w-full max-w-[450px]">
                                <h1 className="text-center font-bold text-3xl mb-5">Add Your Review</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="w-full h-12 text-lg p-3 outline-0 border"
                                            placeholder="Your Name"
                                            {...register("name")}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className="w-full h-12 text-lg p-3 outline-0 border"
                                            {...register("founder")}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            type="file"
                                            className="w-full h-12 text-lg p-3 outline-0 border"
                                            {...register("image")}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <textarea
                                            type="text"
                                            placeholder="Description"
                                            className="w-full h-28 text-lg p-3 outline-0 border"
                                            {...register("description")}
                                        ></textarea>
                                    </div>

                                    <div>
                                        <input
                                            className="w-full btn bg-primary text-white border-none"
                                            type="submit" value="Add Review" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default AddReview;