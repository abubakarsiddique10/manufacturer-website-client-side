import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignIn = () => {
    // create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // sign in with google
    const [signInWithGoogle, GUser, gLoading, gError] = useSignInWithGoogle(auth);
    let errorMessage;

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        const email = data.email;
        const password = data.password;
        createUserWithEmailAndPassword(email, password);
        event.target.reset();
    }

    if (error || gError) {
        errorMessage = <p>{error.message || gError.message}</p>
    }
    return (
        <section className="h-screen flex justify-center items-center">
            <div className="bg-white shadow-2xl p-12 w-full max-w-[450px]">
                <h1 className="text-center font-bold text-3xl mb-5">Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full h-12 text-lg p-3 outline-0 border"
                            {...register("name")}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-12 text-lg p-3 outline-0 border"
                            {...register("email", { required: true })}
                        />
                        {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-12 text-lg p-3 outline-0 border"
                            {...register("password", { required: true })}
                        />
                        <div className="flex justify-between mt-1">
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            {error && <span className="text-red-500">{errorMessage}</span>}
                        </div>

                    </div>

                    <div>
                        <input className="w-full btn bg-primary text-white border-none" type="submit" value="Submit" />
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="w-full btn mb-2 bg-primary text-white border-none">Sign in with Google</button>
                <p className="text-center mt-1">Already have an account ? <Link to="/login">Login Now</Link></p>
            </div>
        </section>
    )
}
export default SignIn;

