import Faq from "@/components/ui/Faq";
import Hero from "@/components/ui/Hero";
import Aboute from "@/components/ui/Aboute";
import SpecialProducts from "@/components/ui/SpecialProducts";
import Collections from "@/components/ui/Collections";
import Categories from "@/components/ui/Categories";
import Reviw from "@/components/ui/Reviw";
import Featured from "../../components/ui/Featured"
const Home = () => {
    return (
        <div className=" lg:space-y-10 ">
            <Hero/>
            <Aboute />
            <SpecialProducts />
            <Collections />
            <Categories />
            <Reviw />
            <Featured/>
            <Faq />    

        </div>
    );
};

export default Home;