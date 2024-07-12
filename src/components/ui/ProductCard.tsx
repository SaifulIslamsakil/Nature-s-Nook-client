const ProductCard = () => {
    return (
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Product 1 */}
        <div className="border rounded-md shadow-md overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/600x400"
                alt="Product 1"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">Product 1</h3>
                <p className="mt-2 text-gray-600">$49.99</p>
            </div>
        </div>
        {/* Product 2 */}
        <div className="border rounded-md shadow-md overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/600x400"
                alt="Product 2"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">Product 2</h3>
                <p className="mt-2 text-gray-600">$59.99</p>
            </div>
        </div>
        {/* Product 3 */}
        <div className="border rounded-md shadow-md overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/600x400"
                alt="Product 3"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">Product 3</h3>
                <p className="mt-2 text-gray-600">$69.99</p>
            </div>
        </div>
        {/* Product 4 */}
        <div className="border rounded-md shadow-md overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/600x400"
                alt="Product 4"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">Product 4</h3>
                <p className="mt-2 text-gray-600">$79.99</p>
            </div>
        </div>
        {/* Add more products as needed */}
    </div>
    );
};

export default ProductCard;