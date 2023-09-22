import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import Signup from "@/components/Signup";
import Statistics from "@/components/Statistics";

export default function Home() {

  return (
    <div>
        <Hero />
        <Signup />
        <Statistics />
        <OurTeam />
        <Brands />
    </div>
  )
}