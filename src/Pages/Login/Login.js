import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const Login = () => {
    const navigate = useNavigate();
    const loacation = useLocation();

    // login with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // signin with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    let from = loacation.state?.from?.pathname || '/';
    if (user || gUser) {
        navigate(from, { replace: true });
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);

        fetch(`https://immense-temple-92933.herokuapp.com/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
            })
        event.target.reset()

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
                        <div className="mt-1">
                            <button className="cursor-pointer text-right ">Forget Password</button>
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            {error && <p className="text-red-500">{error.message}</p>}
                        </div>
                    </div>

                    <div>
                        <input className="w-full btn bg-primary text-white border-none" type="submit" value="Submit" />
                    </div>

                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="w-full btn mb-2 bg-primary text-white border-none">Sign in with Google</button>

                <p className="text-center mt-1">Not a Member ? <Link to="/signIn">Please SignUp</Link></p>
            </div>
        </section>
    )
}
export default Login;

//https://immense-temple-92933.herokuapp.com

// https://git.heroku.com/immense-temple-92933.git

