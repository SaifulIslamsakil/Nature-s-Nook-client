const Checkout = () => {
    return (
        <div className="container mx-auto p-5 bg-slate-50">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="flex flex-col lg:flex-row gap-4">

                {/* Billing Address Section */}
                <div className="flex-1 bg-white p-4 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-4">Billing Address</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Full Name</label>
                            <input type="text" className="w-full px-4 py-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input type="email" className="w-full px-4 py-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Address</label>
                            <input type="text" className="w-full px-4 py-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">City</label>
                            <input type="text" className="w-full px-4 py-2 border rounded" />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block mb-1 font-medium">State</label>
                                <input type="text" className="w-full px-4 py-2 border rounded" />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 font-medium">Zip Code</label>
                                <input type="text" className="w-full px-4 py-2 border rounded" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Payment Information Section */}
                <div className="flex-1 bg-white p-4 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Card Number</label>
                            <input type="text" className="w-full px-4 py-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Name on Card</label>
                            <input type="text" className="w-full px-4 py-2 border rounded" />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block mb-1 font-medium">Expiration Date</label>
                                <input type="text" className="w-full px-4 py-2 border rounded" placeholder="MM/YY" />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 font-medium">CVV</label>
                                <input type="text" className="w-full px-4 py-2 border rounded" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* Order Summary Section */}
                <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$500.00</span>
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
                            <span>$560.00</span>
                        </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Place Order</button>
                </div>

            </div>
        </div>
    );
};

export default Checkout;