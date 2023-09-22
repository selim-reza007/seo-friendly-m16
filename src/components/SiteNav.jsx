"use client";
import { AiOutlineClose, AiOutlineOrderedList } from 'react-icons/ai';
import { useState } from 'react';
import Link from "next/link";


export default function SiteNav() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <div className="">
            <div className="flex p-6 border border-b-2">
                <img src='/images/logo.png' />
                <div className="w-3/4 flex items-center justify-end md:justify-center ml-12">
                    <ul className="hidden md:flex gap-10 text-neutral-500 justify-center">
                        <Link href={'/'}>
                            <li className="border-r-2 border-dashed pr-6 text-sm">Start</li>
                        </Link>
                        <Link href={'/ourteam'}>
                            <li className="border-r-2 border-dashed pr-6 text-sm">Team</li>
                        </Link>
                        <Link href={"/services"}>
                            <li className="border-r-2 border-dashed pr-6 text-sm">Services</li>
                        </Link>
                        <Link href={"/projects"}>
                            <li className="border-r border-dashed pr-6 text-sm">Projects</li>
                        </Link>
                        <Link href={"/testimonials"}><li className="pr-5 text-sm">Testimonials</li></Link>
                    </ul>
                    <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                        {nav ? <AiOutlineClose className=' text-2xl' /> :
                            <AiOutlineOrderedList className=' text-2xl' />
                        }
                    </div>
                </div>
            </div>

            <div className={nav ? "fixed left-0 top-0 w-[55%] h-full border-r border-gray-400 bg-[#ffffff] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <img className='m-5' src='/images/logo.png' />
                <ul className="p-4 gap-3 uppercase">

                    <Link href={'/'}>
                        <li className=" pr-6 text-sm px-3 py-2 border-b">Start</li>
                    </Link>
                    <Link href={'/ourteam'}>
                        <li className=" pr-6 text-sm px-3 py-2 border-b">Team</li>
                    </Link>
                    <Link href={"/services"}>
                        <li className=" pr-6 text-sm px-3 py-2 border-b">Services</li>
                    </Link>
                    <Link href={"/projects"}>
                        <li className="pr-6 text-sm px-3 py-2 border-b">Projects</li>
                    </Link>
                    <Link href={"/testimonials"}><li className="pr-5 text-sm px-3 py-2">Testimonials</li></Link>
                </ul>
            </div>

        </div>
    );
}