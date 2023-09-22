export default function CommentsBottom() {

    return (
        <div className="w-full mt-32">
            <div className="mt-5 max-w-6xl mx-auto">
                {/* Container */}
                <div className="text-center">
                    <p className="text-green-700 font-semibold">Dolor sit amet consectutar</p>
                    <p className="text-5xl font-bold leading-snug mt-3">
                        Build & Launch <br /> without problems
                    </p>
                </div>

                <div className="min-h-[100px]  mt-16 px-10 md:px-28 ">
                    {/* Number */}
                    <p className="border-t-4 border-green-600 mt-28"></p>
                    <div className="flex justify-between relative top-[-50px] ">
                        <p className="pb-14 pt-8 pl-10 pr-12 rounded-full bg-green-600 text-white font-bold text-xl w-12 h-12 mb-5">1</p>

                        <p className="pb-14 pt-8 pl-10 pr-12 bg-green-600 text-white font-bold text-xl rounded-full w-12 h-12 mb-5">2</p>

                        <p className="pb-14 pt-8 pl-10 pr-12 rounded-full bg-green-600 text-white font-bold text-xl w-12 h-12 mb-5">3</p>
                    </div>
                </div>

                <div className="max-w-6xl flex gap-10 mt-[-40px]">
                    {/* text content */}
                    <div className="w-1/3 text-center">
                        <p className="text-2xl font-bold">Lorem ipsum dolor sit amet consectutar</p>
                        <p className="text-slate-500 leading-9 mt-5">
                            Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.
                        </p>
                    </div>

                    <div className="w-1/3 text-center">
                        <p className="text-2xl font-bold">Lorem ipsum dolor sit amet consectutar</p>
                        <p className="text-slate-500 leading-9 mt-5">
                            Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.
                        </p>
                    </div>

                    <div className="w-1/3 text-center">
                        <p className="text-2xl font-bold">Lorem ipsum dolor sit amet consectutar</p>
                        <p className="text-slate-500 leading-9 mt-5">
                            Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}