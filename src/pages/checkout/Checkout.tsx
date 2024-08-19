import { Input } from "@/components/ui/input";
import { TProduct } from "@/interface/interface";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type TInputValue = {
    name: string;
    email: string;
    address: string;
    state: string;
    city: string;
    zipCode: string;
    cardNumber: string;
    nameOnCard: string;
    date: string;
    cvv: string;

}

const Checkout = () => {
    const state: TProduct[] = useAppSelector((state: RootState) => state.addToCart);
    const navigate = useNavigate()
    const calculateTotal = (): number => {
        return state.reduce((total, item) => total + item.price * item.quantity!, 0);
    };
    const { register, handleSubmit } = useForm<TInputValue>()
    const onsubmit: SubmitHandler<FieldValues> = (data) => {

    }
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (state.length > 0) {
                event.preventDefault();
                event.returnValue = '';  // Modern browsers require setting returnValue to show a custom message.
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [state, navigate]);
    return (
        <div className="container mx-auto p-5 bg-slate-50">
            {
                state.length > 0 ? (<div>
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                <div >
                    {/* Billing Address Section */}
                    <form onClick={handleSubmit(onsubmit)} className="space-y-4 flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-bold mb-4">Billing Address</h2>
                            <div className="space-y-1">
                                <div>
                                    <Label className="block mb-1 font-medium">Full Name</Label>
                                    <Input {...register("name", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                </div>
                                <div>
                                    <Label className="block mb-1 font-medium">Email</Label>
                                    <Input {...register("email", { required: true })} type="email" className="w-full px-4 py-2 border rounded" />
                                </div>
                                <div>
                                    <Label className="block mb-1 font-medium">Address</Label>
                                    <Input {...register("address", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                </div>
                                <div>
                                    <Label className="block mb-1 font-medium">City</Label>
                                    <Input {...register("city", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <Label className="block mb-1 font-medium">State</Label>
                                        <Input {...register("state", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <Label className="block mb-1 font-medium">Zip Code</Label>
                                        <Input {...register("zipCode", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Information Section */}
                        <div className="flex-1 bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                            <div className="space-y-1">
                                <div>
                                    <Label className="block mb-1 font-medium">Card Number</Label>
                                    <Input {...register("cardNumber", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                </div>
                                <div>
                                    <Label className="block mb-1 font-medium">Name on Card</Label>
                                    <Input {...register("nameOnCard", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <Label className="block mb-1 font-medium">Expiration Date</Label>
                                        <Input {...register("date", { required: true })} type="text" className="w-full px-4 py-2 border rounded" placeholder="MM/YY" />
                                    </div>
                                    <div className="flex-1">
                                        <Label className="block mb-1 font-medium">CVV</Label>
                                        <Input {...register("cvv", { required: true })} type="text" className="w-full px-4 py-2 border rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Section */}
                        <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>$20.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>$40.00</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${(calculateTotal() + 60).toFixed(2)} </span>
                                </div>
                            </div>
                            <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Place Order</button>
                        </div>
                    </form>
                </div>
            </div>):(
                <div className="h-52 flex justify-center items-center flex-col space-y-2 text-orange-500">
                    <p className="text-xl font-semibold">Your Cart Is Empty</p>
                    <Link to="/products" className="hover:underline">
                        Add Product
                    </Link>
                </div>
            )
            }
        </div>
    );
};

export default Checkout;