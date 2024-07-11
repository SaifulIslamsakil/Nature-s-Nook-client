import Hero from "@/components/ui/hero";
import Aboute from "@/components/ui/aboute";
import SpecialProducts from "@/components/ui/specialProducts";
import Categories from "@/components/ui/categories";
const Home = () => {
    return (
        <div className="mt-5 ">
            <Hero/>
            <Aboute />
            <SpecialProducts />
            <Categories />

        </div>
    );
};

export default Home;