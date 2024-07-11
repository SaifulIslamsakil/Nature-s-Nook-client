import Hero from "@/components/ui/hero";
import Aboute from "@/components/ui/aboute";
import SpecialProducts from "@/components/ui/specialProducts";
import Categories from "@/components/ui/categories";
import Featured from "@/components/ui/featured";
import Collections from "@/components/ui/Collections";
import Faq from "@/components/ui/Faq";
import Reviw from "@/components/ui/Reviw";
const Home = () => {
    return (
        <div className="mt-5 ">
            <Hero/>
            <Aboute />
            <SpecialProducts />
            <Collections />
            <Categories />
            <Reviw />
            <Featured />
            <Faq />    

        </div>
    );
};

export default Home;