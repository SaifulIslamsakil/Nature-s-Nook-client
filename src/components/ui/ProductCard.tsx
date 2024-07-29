import { TProduct } from "@/interface/interface";
import { Link } from "react-router-dom";
import { Button } from "./button";

const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img src={product.image[0]} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                <p className="text-gray-500 text-justify">{product.description.length > 100 ? product.description.slice(0, 100) + "......" : product.description}</p>
                <p className="text-xl font-semibold text-gray-800">${product.price}</p>
                <div className=" flex justify-between">
                        <Button className=" bg-orange-500 ">Add To Cart</Button>
                    <Link to={`/product/product-detiles/${product._id}`}>
                        <Button className=" hover:bg-orange-500 ">See More</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;