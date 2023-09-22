import Link from "next/link";

export default function Brands() {

    return (
        <div className="w-full min-h-[300px] bg-white">
            <div className="p-20">
                <p className="text-2xl text-center">Trusted by brands all over the world</p>
                <div className="flex flex-col xs:items-center md:flex md:flex-row gap-10 mt-14 px-48 md:justify-center">
                    <Link href={'/'}><img className="h-10 min-w-[80px]" src="./images/brand1.png" /></Link>
                    <Link href={'/'}><img className="h-10 min-w-[80px]" src="./images/brand2.png" /></Link>
                    <Link href={'/'}><img className="h-10 min-w-[80px]" src="./images/brand3.png" /></Link>
                    <Link href={'/'}><img className="h-10 min-w-[80px]" src="./images/brand4.png" /></Link>
                </div>
            </div>
        </div>
    );
}