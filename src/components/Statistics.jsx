import { AiOutlineShoppingCart, AiOutlineSolution, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiHappyAlt } from 'react-icons/bi';

export default function Statistics() {

    return (
        <div className="w-full bg-white ">
            <div className='flex flex-col lg:flex lg:flex-row max-w-6xl h-auto py-16 lg:h-[300px] items-center mx-auto justify-center gap-16'>
                {/* container div */}
                <div className='text-center min-w-[150px] flex flex-col gap-7'>
                    {/* content div */}
                    <AiOutlineShoppingCart className='text-5xl w-16 h-16 p-3 bg-[#d1fae5] text-green-600 rounded-md mx-auto' />
                    <div>
                        <p className='font-bold text-2xl'>250 324</p>
                        <p className='text-slate-500'>Followers</p>
                    </div>
                </div>

                <div className='text-center min-w-[150px] flex flex-col gap-7'>
                    {/* content div */}
                    <AiOutlineSolution className='text-5xl w-16 h-16 p-3 bg-[#d1fae5] text-green-600 rounded-md mx-auto' />
                    <div >
                        <p className='font-bold text-2xl'>6 510</p>
                        <p className='text-slate-500'>Solved Problems</p>
                    </div>
                </div>

                <div className='text-center min-w-[150px] flex flex-col gap-7'>
                    {/* content div */}
                    <AiOutlineFundProjectionScreen className='text-5xl w-16 h-16 p-3 bg-[#d1fae5] text-green-600 rounded-md mx-auto' />
                    <div >
                        <p className='font-bold text-2xl'>14 350</p>
                        <p className='text-slate-500'>Happy Customers</p>
                    </div>
                </div>

                <div className='text-center min-w-[150px] flex flex-col gap-7'>
                    {/* content div */}
                    <BiHappyAlt className='text-5xl w-16 h-16 p-3 bg-[#d1fae5] text-green-600 rounded-md mx-auto' />
                    <div >
                        <p className='font-bold text-2xl'>149 324</p>
                        <p className='text-slate-500'>Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}