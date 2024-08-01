import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";


const Cart = () => {
    const state = useAppSelector((state: RootState) => state.addToCart)
    const calculateTotal = () => {
        return state.reduce((total, item) => total + item.price * item.inStock, 0);
    };
    return (
        <div>
            {
                state.length > 0 ? <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">My Cart</h1>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="w-[100px] py-2 px-4 border-b">Image</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Price</th>
                                    <th className="py-2 px-4 border-b">Quantity</th>
                                    <th className="py-2 px-4 border-b">Total</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state?.map(item => (
                                    <tr key={item._id}>
                                        <td className="py-2 px-4 border-b">
                                            <img src={item?.image[0]} alt={item.name} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="py-2 px-4 border-b">{item?.name}</td>
                                        <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b">{item.inStock}</td>
                                        <td className="py-2 px-4 border-b">${(item.price * item.inStock).toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b space-x-3">
                                            <Button>Edit</Button>
                                            <Button className="bg-orange-500 text-white rounded hover:bg-orange-600">Remove</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Total Items:</span>
                            <span>{state?.reduce((total, item) => total + item.inStock, 0)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Total Price:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <Link to="/checkout"><Button className="w-full bg-orange-500 text-white rounded hover:bg-orange-600 ">Proceed to Checkout</Button></Link>
                    </div>
                </div>
            </div> : <div>
                <p>card in empty</p>
            </div>
            } 
        </div>
    );
};

export default Cart;