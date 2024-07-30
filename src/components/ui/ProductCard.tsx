import { TProduct } from "@/interface/interface";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/feature/addToCart/addToCartSilice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }: { product: TProduct }) => {
    const dispatch = useAppDispatch()
    const handelAddProductInCart = () => {
        dispatch(addToCart(product))
        toast.success("your product added to cart")
    }
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative">

            <Link to={`/product/product-detiles/${product._id}`}>
                <img src={product.image[0]} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-700 hover:underline">{product.name.slice(0, 20)}</h3>
                    <p className="text-gray-500 text-justify hover:underline h-24">{product.description.length > 70 ? product.description.slice(0, 70) + "......" : product.description}</p>
                    <p className=" absolute font-semibold top-40 rounded-l-2xl bg-orange-500 right-0 text-white py-1 px-2">${product.price}</p>
                </div>
            </Link>
            <div className=" flex justify-between pb-4 px-4 ">
                <Button onClick={handelAddProductInCart} className="  w-full bg-white border border-gray-200 hover:bg-gray-800 text-black hover:text-white duration-500  ">Add To Cart</Button>
            </div>

        </div >
    );
};

export default ProductCard;