const Featured = () => {

    const featuredProducts = [
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },
        { id: 1, name: 'High-End Tent', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg', price: '$250', description: 'A premium quality tent for all weather conditions.' },

    ];
    return (
        <div className="max-w-7xl mx-auto p-5 ">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Featured <span className="text-orange-500">Products</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:pt-10">
                {featuredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                            <p className="text-gray-500">{product.description}</p>
                            <p className="mt-2 text-xl font-bold text-gray-800">{product.price}</p>
                            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;