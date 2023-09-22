import Link from "next/link";

export default function Signup() {

    return (
        <div className="min-h-screen">
            <div className="flex flex-col gap-5 items-center lg:flex lg:flex-row w-full p-20">
                <div className="w-full md:w-3/5 p-7">
                    <img src="./images/singup-logo.png" />
                    <p className="text-6xl font-semibold leading-snug">
                        So much more than a business analytics tool
                    </p>
                    <p className="my-5 text-slate-500 mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <Link className="px-7 py-4 font-semibold text-white bg-[#059669] rounded-s-xl rounded-e-lg rounded-br-none" href={'/'}>Get Started</Link>
                </div>
                <div className="text-center w-[450px] p-10">
                    <div className="bg-white w-full h-[380px] rounded-3xl rounded-br-none shadow-md">
                        <p className="pt-5 mb-2 text-slate-500">Sign Up</p>
                        <p className="text-2xl mb-3">Create an account</p>
                        <form className="w-11/12 mx-auto">
                            <div className="flex gap-2">
                                <input placeholder="First Name" type="text" className="w-1/2 p-3 bg-slate-100 rounded-lg" />
                                <input placeholder="Last Name" type="text" className="w-1/2 p-3 bg-slate-100 rounded-lg" />
                            </div>
                            <input className="w-full mt-2 p-3 bg-slate-100 rounded-lg" placeholder="hello@example.com" type="email" />
                            <textarea className="w-full mt-2 p-3 bg-slate-100 rounded-lg" placeholder="Message" />
                            <button className="w-full mt-5 py-4 font-semibold text-white bg-[#059669] rounded-s-xl rounded-e-lg">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}