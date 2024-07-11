import { Button } from "./button";

const Aboute = () => {
    return (
        <div className=" lg:flex justify-between gap-10 mb-10 ">
            <div className=" flex-1 px-5 relative">
                <img className=" w-full mb-3 lg:w-[550px]" src="https://i.ibb.co/8P5pYHS/h5-img01.jpg" alt="" />
                <img className=" hidden lg:block absolute -bottom-10 right-0 w-[380px]"  src="https://i.ibb.co/P1wCpML/About-img1.jpg" alt="" />
            </div>
            <div className=" space-y-5 lg:space-y-8 flex-1 px-5">
                <h4 className=" text-xl font-bold">About Trekky Store</h4>
                <h2 className=" text-2xl lg:text-3xl font-bold">Discover inspiration and resources to plan your next adventure.</h2>
                <p className="text-gray-700">For almost 50 years our advice and after-sales service, combined with extremely competitive prices, has served casual and serious outdoor lovers – will you be next?</p>
                <p className="text-gray-700">Our outdoor clothing shop features everything you can think of across men’s, women’s and kids’ for a comfortable camping, hiking or walking experience. We stock coats, shirts, trousers, base layers and waterproofs by leading brands in the outdoor industry.</p>
                <Button className=" bg-orange-500 mt-10" >EXPLORE NOW</Button>
            </div>
        </div>
    );
};

export default Aboute;