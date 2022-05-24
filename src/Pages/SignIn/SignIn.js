import React from "react";
const SignIn = () => {
    return (
        <section className="">
            <div className="container h-screen flex justify-center items-center">

                <div className="bg-white shadow-2xl p-12 max-w-[450px]">
                    <h1 className="text-center font-bold text-3xl mb-5">Login</h1>
                    <form>
                        <input type="text" placeholder="Name" className="w-full h-12 text-lg mb-4 p-3 outline-0 border" />
                        <input type="text" placeholder="Email" className="w-full h-12 text-lg mb-4 p-3 outline-0 border" />
                        <input type="password" placeholder="Password" className="w-full h-12 text-lg mb-4 p-3 outline-0 border" />
                        <input className="w-full btn bg-dark" type="submit" value="Submit" />
                    </form>
                    <div class="divider">OR</div>
                    <button className="w-full btn mb-2">Sign in with Google</button>
                </div>
            </div>
        </section>
    )
}
export default SignIn;

