const Cart = () => {
    const cartItems = [
        // Sample data
        { id: 1, image: 'https://via.placeholder.com/100', name: 'Product 1', price: 100, quantity: 2 },
        { id: 2, image: 'https://via.placeholder.com/100', name: 'Product 2', price: 200, quantity: 1 },
    ];
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <div>
            <div className="container mx-auto p-4">
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
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 border-b">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="py-2 px-4 border-b">{item.name}</td>
                                        <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b">{item.quantity}</td>
                                        <td className="py-2 px-4 border-b">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="px-4 py-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">Edit</button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
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
                            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Total Price:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <button className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;