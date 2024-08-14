import { Button } from "@/components/ui/button";
import {  useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { decrement, deleteProductInCart, increment } from "@/redux/feature/addToCart/addToCartSilice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Cart = () => {
    const dispatch = useDispatch()
    const state = useAppSelector((state: RootState) => state.addToCart)
    const calculateTotal = () => {
        return state.reduce((total, item) => total + item.price * item.quantity!, 0);
    };
    const checkStock = (id : string)=> {
        const findProduct = state.find(data=> data._id === id)
        if(findProduct!.inStock! <= findProduct!.quantity!){
            return toast.error("this product out of stock")
        }else{
            dispatch(increment(id))
        }
    }
    const deleteProductInTheCart = (id:string) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductInCart(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "deleted ",
                    icon: "success"
                });
            }
        });
    }
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
                                        <tr key={item._id} className="text-center text-lg cursor-pointer hover:bg-slate-50 hover:shadow-md">
                                            <td className="py-2 px-4 border-b">
                                                <img src={item?.image[0]} alt={item.name} className="w-16 h-16 object-cover" />
                                            </td>
                                            <td className="py-2 px-4 border-b font-semibold">{item?.name}</td>
                                            <td className="py-2 px-4 border-b">${item.price}</td>
                                            <td className="py-10 px-4 border-b flex items-center gap-4 "><button disabled={item!.quantity! <= 0} onClick={()=> dispatch(decrement(item?._id))} className=" font-semibold bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-lg"><IoIosArrowBack /></button>{item?.quantity}
                                                <button onClick={()=>checkStock(item?._id)} className=" font-semibold bg-orange-500 hover:bg-orange-700 text-white p-1 rounded-lg"><IoIosArrowForward /></button></td>
                                            <td className="py-2 px-4 border-b">${(item.price * item.quantity!).toFixed(2)}</td>
                                            <td className="py-2 px-4 border-b space-x-3">
                                                <Button onClick={()=> deleteProductInTheCart(item?._id)} className=" bg-orange-500 hover:bg-orange-700 text-xl"><RiDeleteBin6Line /></Button>
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
                                <span>{state?.reduce((total, item) => total + item.quantity!, 0)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Total Price:</span>
                                <span>${calculateTotal().toFixed(2)}</span>
                            </div>
                            <Link to="/checkout"><Button disabled={state.find(data=> data.quantity === 0 )} className="w-full bg-orange-500 text-white rounded hover:bg-orange-600 ">Proceed to Checkout</Button></Link>
                        </div>
                    </div>
                </div> : <div className="h-52 flex justify-center items-center flex-col space-y-2 text-orange-500">
                    <p className=" text-xl font-semibold"> Your Card Is Empty</p>
                    <Link to="/products" className=" hover:underline">Add product</Link>
                </div>
            }
        </div>
    );
};

export default Cart;