import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <section className="h-screen flex justify-center items-center">
            <div className="bg-white shadow-2xl p-12 w-full max-w-[450px]">
                <h1 className="text-center font-bold text-3xl mb-5">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="flex justify-between">
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            <p className="cursor-pointer text-right">Forget Password</p>
                        </div>

                    </div>

                    <div>
                        <input className="w-full btn bg-primary text-white" type="submit" value="Submit" />
                    </div>
                </form>
                <div className="divider">OR</div>
                <button className="w-full btn mb-2 bg-primary text-white">Sign in with Google</button>
            </div>
        </section>
    )
}
export default Login;

