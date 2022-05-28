import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";
const AddReview = () => {
    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStorageKey = '9c0f55e54619bcd0124acded6beb3fb1';

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profiles?email=${user.email}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => setProfile(data))
        }
    }, [profile])

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
                    const profile = {
                        email: user.email,
                        image: result.data.url,
                        phone: data.phone,
                        linkdin: data.linkdin,
                        location: data.location,
                        education: data.education,
                    }
                    fetch(`http://localhost:5000/profiles?email=${user.email}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({ profile })
                    })
                        .then(res => res.json())
                        .then(profile => {
                            if (profile.acknowledged) {
                                console.log(profile)
                                toast('Your Profile Seved')
                            }
                        })
                }
            })
    }
    return (
        <section>
            <div className="container">
                <div className="w-full flex justify-center flex-col items-center mt-4">
                    <div className="text-xl font-medium md:flex md:text-left  text-center items-center  justify-center w-full">
                        <div className="avatar mr-5 mt-2 mr-10">
                            <div className="w-20 h-20 mx-auto mb-4 lg:mb-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={profile.image} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold">Name: {user.displayName}</h1>
                            <h1>Email: {user.email}</h1>
                            <h1>Phone: {profile.phone}</h1>
                            <h1>Linkdin: {profile.linkdin}</h1>
                            <h1>Education: {profile.education}</h1>
                            <h1>Location: {profile.location}</h1>
                        </div>
                    </div>

                    <div className="bg-white shadow-2xl p-12 w-full max-w-[600px] mt-10">
                        <h1 className="text-center font-bold text-3xl mb-5">Add Your Information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full h-12 text-lg p-3 outline-0 border"
                                    placeholder="Phone Number"
                                    {...register("phone")}
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Linkdin Link"
                                    className="w-full h-12 text-lg p-3 outline-0 border"
                                    {...register("linkdin")}
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="City/District"
                                    className="w-full h-12 text-lg p-3 outline-0 border"
                                    {...register("location")}
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
                                    placeholder="Educational Qualifications"
                                    className="w-full h-28 text-lg p-3 outline-0 border"
                                    {...register("education")}
                                ></textarea>
                            </div>

                            <div>
                                <input
                                    className="w-full btn bg-primary text-white border-none"
                                    type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AddReview;

