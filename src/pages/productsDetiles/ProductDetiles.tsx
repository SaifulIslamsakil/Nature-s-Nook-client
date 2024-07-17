import { Button } from '@/components/ui/button';
import { TProduct } from '@/interface/interface';
import { useGetSingelProductQuery } from '@/redux/feature/product/productApi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetiles = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const {id} = useParams()
    const { data} = useGetSingelProductQuery(id)
    const product:TProduct = data?.data
    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main Product Image */}
                    <div className="col-span-1">
                        <img className="w-full h-96 object-cover rounded-md shadow-md" src={product?.image[1]} alt="Product" />
                        <div className="flex mt-4 space-x-2">
                            {product?.image.map((img, index) => (
                                <img key={index} className="w-20 h-20 object-cover rounded-md shadow-md cursor-pointer" src={img} alt={`Thumbnail ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="col-span-1 p-4">
                        <h1 className="text-3xl font-semibold text-gray-900">{product?.name}</h1>
                        <p className="text-xl text-gray-700 mt-2">${product?.price}</p>
                        <p className="mt-2 text-gray-500">Tax included | <span className="text-blue-500 cursor-pointer">Shipping</span> calculated at checkout.</p>
                        <p className="mt-4 text-gray-700">By <span className="text-blue-500 cursor-pointer">Jack Wolfskin</span></p>
                        <div className="mt-4">
                            <label className="text-gray-700">Quantity:</label>
                            <div className="flex items-center mt-2">
                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="p-2 border border-gray-300 rounded-l-md">-</button>
                                <input type="text" readOnly value={quantity} className="w-12 text-center border-t border-b border-gray-300" />
                                <button onClick={() => setQuantity(quantity + 1)} className="p-2 border border-gray-300 rounded-r-md">+</button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button variant="outline" className="w-full py-4 rounded-md hover:bg-black hover:text-white">ADD TO CART</Button>
                            <button className="w-full text-white bg-orange-500 py-3 rounded-md shadow-md hover:bg-orange-600 mt-4">Buy with PayPal</button>
                        </div>
                        <div className="mt-4 text-blue-500 cursor-pointer">
                            <p>Pickup available at <span className="underline">Adventure Shop</span></p>
                            <p>Usually ready in 24 hours</p>
                        </div>
                        <div className="mt-4 space-y-2">
                            <details className="border-t pt-2">
                                <summary className="cursor-pointer">Description</summary>
                                <p className="mt-2 text-gray-600">{product?.description}</p>
                            </details>
                            <details className="border-t pt-2">
                                <summary className="cursor-pointer">Shipping & Returns</summary>
                                <p className="mt-2 text-gray-600">Information about shipping and returns.</p>
                            </details>
                            <details className="border-t pt-2">
                                <summary className="cursor-pointer">How to Care</summary>
                                <p className="mt-2 text-gray-600">Care instructions for the product.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ProductDetiles;