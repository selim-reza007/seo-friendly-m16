import Comments from "@/components/Comments";
import CommentsBottom from "@/components/CommentsBottom";
import Signup from "@/components/Signup";

export default function Testimonials() {

    return (
        <div className="w-full py-16">
            <div className="text-center leading-10">
                <p className="font-bold text-green-700">Dolor sit amet consectutar</p>
                <h1 className="text-5xl font-extrabold">Testimonials</h1>
            </div>
            <Comments />
            <CommentsBottom />
            <Signup />
        </div>
    );
}