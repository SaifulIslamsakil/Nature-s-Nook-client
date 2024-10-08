import { Link } from "react-router-dom";
import { Button } from "./button";

const Collections = () => {
    const collections = [
        {
            id: "01",
            name: "Shows",
            image: "https://i.ibb.co/9sk8Nkt/SS23-Rossignol-Online-Shop-banner-SHOES.webp"
        },
        {
            id: "02",
            name: "Camping",
            image: "https://i.ibb.co/KDt1Yr2/2024-Classic-Air-Orange-High33-large.webp"
        },
        {
            id: "03",
            name: "Skiing",
            image: "https://i.ibb.co/xm4bpSr/skiing-how-to.webp"
        },
        {
            id: "03",
            name: "Skiing",
            image: "https://i.ibb.co/HB9QJkC/LA-INDO-NEW6-TREK-e5e585b0-aaa2-4f9f-8744-0847cb7e597e.webp"
        },
    ]
    return (
        <div className=" p-5 pt-10 space-y-10 bg-white">
            <h2 className=" text-3xl font-semibold text-center">Signature <span className=" text-orange-500">Collections</span></h2>
            <p className=" text-justify md:text-center text-gray-700">Explore the epitome of adventure with our premier collections tailored for outdoor enthusiasts. Unleash your wanderlust with our meticulously curated assortment, ranging from high-performance hiking apparel to cutting-edge skiwear, and from high quality camping equipment to rugged hiking shoes and backpacks. Designed to withstand the elements while providing unparalleled comfort and functionality, our best-selling collections ensure you're ready to conquer any terrain with confidence. Elevate your outdoor experience with gear meticulously crafted for every expedition, promising durability, innovation, and style.</p>
            <div className=" grid  md:grid-cols-2 lg:grid-cols-4 gap-5 md:pt-10">
                {
                    collections.map(ele => <div key={ele.id} className=" relative hover:shadow-xl">
                        <img className=" h-96 w-full object-cover" src={ele.image} alt="" />
                        <div className=" absolute bottom-5 left-5 space-y-3">
                            <p className=" text-3xl font-semibold text-white">{ele.name} </p>
                            <Link to={`/products?filter=${ele.name}`}><Button className=" uppercase bg-orange-500 text-white">Shop now</Button></Link>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Collections;