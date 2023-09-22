import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export default function OurTeam() {

    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                {/* Container div */}
                <div className="text-center p-20">
                    <p className="text-green-600 font-bold">Dolor sit amet consectutar</p>
                    <h1 className="font-extrabold text-5xl leading-snug">Check our awesome<br /> team members</h1>
                </div>
                <div className='grid grid-cols-1 gap-5 bxl:grid bxl:grid-cols-2 w-full px-5 mb-10 place-items-center'>
                    {/* card container */}
                    <div className="w-[530px] h-80 border rounded-xl flex bg-white shadow-lg bxl:mb-3">
                        {/* card */}
                        <div className="h-full w-2/6">
                            <img className="w-full h-full rounded-l-xl" src="./images/team1.png"/>
                        </div>
                        <div className="w-4/6 py-16 px-5 leading-8">
                            <p className="font-bold text-2xl">Danny Bailey</p>
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.
                            </p>
                            <div className='flex mt-5 ml-1 gap-3'>
                                {/* Social link */}
                                <AiFillFacebook className='text-3xl text-green-600'/>
                                <AiOutlineTwitter className='text-3xl text-green-600' />
                                <AiOutlineInstagram className='text-3xl text-green-600' />
                            </div>
                        </div>
                    </div>

                    <div className="w-[530px] h-80 border rounded-xl flex bg-white shadow-lg">
                        {/* card */}
                        <div className="h-full w-2/6">
                            <img className="w-full h-80 rounded-l-xl" src="./images/team2.png"/>
                        </div>
                        <div className="w-4/6 py-16 px-5 leading-8">
                            <p className="font-bold text-2xl">Danny Bailey</p>
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.
                            </p>
                            <div className='flex mt-5 ml-1 gap-3'>
                                {/* Social link */}
                                <AiFillFacebook className='text-3xl text-green-600'/>
                                <AiOutlineTwitter className='text-3xl text-green-600' />
                                <AiOutlineInstagram className='text-3xl text-green-600' />
                            </div>
                        </div>
                    </div>

                    <div className="w-[530px] h-80 border rounded-xl flex bg-white shadow-lg">
                        {/* card */}
                        <div className="h-full w-2/6">
                            <img className="w-full h-full rounded-l-xl" src="./images/team2.png"/>
                        </div>
                        <div className="w-4/6 py-16 px-5 leading-8">
                            <p className="font-bold text-2xl">Danny Bailey</p>
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.
                            </p>
                            <div className='flex mt-5 ml-1 gap-3'>
                                {/* Social link */}
                                <AiFillFacebook className='text-3xl text-green-600'/>
                                <AiOutlineTwitter className='text-3xl text-green-600' />
                                <AiOutlineInstagram className='text-3xl text-green-600' />
                            </div>
                        </div>
                    </div>

                    <div className="w-[530px] h-80 border rounded-xl flex bg-white shadow-lg">
                        {/* card */}
                        <div className="h-full w-2/6">
                            <img className="w-full h-full rounded-l-xl" src="./images/team1.png"/>
                        </div>
                        <div className="w-4/6 py-16 px-5 leading-8">
                            <p className="font-bold text-2xl">Danny Bailey</p>
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.
                            </p>
                            <div className='flex mt-5 ml-1 gap-3'>
                                {/* Social link */}
                                <AiFillFacebook className='text-3xl text-green-600'/>
                                <AiOutlineTwitter className='text-3xl text-green-600' />
                                <AiOutlineInstagram className='text-3xl text-green-600' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}