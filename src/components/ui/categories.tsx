
const Categories = () => {

    const categories = [
        { id: 1, name: 'Tents and Shelters', image: 'https://i.ibb.co/q1Mywr5/Camping-a8324cf0-f9af-4e90-a8b3-5bec29e88dc4.webp' },
        { id: 2, name: 'Sleeping Gear', image: 'https://i.ibb.co/hddBndf/images-6.jpg' },
        { id: 3, name: 'Backpacks and Bags', image: 'https://i.ibb.co/Qkh5xLb/backpacks-2048px-9944.webp' },
        { id: 4, name: 'Cooking Gear', image: 'https://i.ibb.co/zQhLk2X/images-7.jpg' },
        { id: 5, name: 'Clothing and Footwear', image: 'https://i.ibb.co/RvwK8FS/images-8.jpg' },
        { id: 6, name: 'Navigation and Electronics', image: 'https://i.ibb.co/yS1TLmW/images-9.jpg' },
        { id: 7, name: 'First Aid and Safety', image: 'https://i.ibb.co/5k9J6Nb/first-aid-kit.jpg' },
        { id: 8, name: 'Hydration', image: 'https://i.ibb.co/Nxq8ZD8/90421145.jpg' },
        // Add more categories as needed
    ];
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">Explore Our <span className=" text-orange-500"> Categories</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:pt-10">
                {categories.map(category => (
                    <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl">
                        <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;