import { AiOutlineFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

export default function Footer() {

    return (
        <div className="bg-[#111827] min-h-[350px] ">
            <div className="p-16">
                <div className="flex flex-col items-center gap-5 alg:flex alg:flex-row p-6 border-b border-gray-700">
                    <img className="bg-transparent w-36" src='/images/footer-logo.png' />
                    <div className="w-3/4 flex items-center justify-center alg:justify-end mt-5">
                        <ul className="flex flex-col md:flex md:flex-row gap-10 text-neutral-400">
                            <li className="border-r-2 border-dashed pr-6 text-sm">Start</li>
                            <li className="border-r-2 border-dashed pr-6 text-sm">Team</li>
                            <li className="border-r-2 border-dashed pr-6 text-sm">Services</li>
                            <li className="border-r-2 border-dashed pr-6 text-sm">Projects</li>
                            <li className="pr-5 text-sm">Testimonials</li>
                        </ul>
                    </div>
                </div>
                <div className='flex m-10 justify-between items-center'>
                    <p className='text-slate-400 text-sm'>© 2024. All rights reserved.</p>
                    <div className='flex gap-2 p-2'>
                        <AiOutlineFacebook className="text-4xl bg-[#1f2937] text-green-600 rounded-md p-1" />
                        <AiFillInstagram className='text-4xl bg-[#1f2937] text-green-600 rounded-md p-1' />
                        <AiFillTwitterCircle className='text-4xl bg-[#1f2937] text-green-600 rounded-md p-1' />
                    </div>
                </div>
            </div>
        </div>
    );
}