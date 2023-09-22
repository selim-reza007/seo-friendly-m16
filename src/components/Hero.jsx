export default function Hero() {

    return (
        <div className="w-full h-auto">
            <div className="w-full grid grid-cols-1 pt-5 lg:flex flex-row place-items-center lg:p-20">
                <div className="w-full text-center md:text-start md:w-1/2 md:p-10">
                    <p className="font-semibold text-green-600 text-lg">Dolor sit amet consectutar</p>
                    <h1 className="mt-3 mb-5 text-5xl font-extrabold leading-snug">Build & Launch without problems</h1>
                    <p className="text-slate-500 leading-10 md:p-0 p-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.consectetur adipiscing elit.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col gap-2 md:flex-row items-center">
                        <img className="rounded-xl w-4/6 h-64" src="./images/top1.png" />
                        <img className="rounded-xl h-64 md:w-2/6 w-4/6" src="./images/bottom1.png" />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row items-center mt-2">
                        <img className="rounded-xl h-64 md:w-2/6 w-4/6" src="./images/top2.png" />
                        <img className="rounded-xl w-4/6 h-64" src="./images/bottom2.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}