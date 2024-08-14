import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import ProductRatingAndReview from '@/components/ui/ProductRatingAndReview';
import { TProduct } from '@/interface/interface';
import { addToCart } from '@/redux/feature/addToCart/addToCartSilice';
import { useGetProductQuery, useGetSingelProductQuery } from '@/redux/feature/product/productApi';
import { useAppDispatch } from '@/redux/hooks';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetiles = () => {
    const [count, setCount] = useState<number>(1)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { id } = useParams();
    const { data: productData, error, isLoading } = useGetSingelProductQuery(id);
    const [mainImage, setMainImage] = useState<string>('');
    const product: TProduct = productData?.data || [];
    const filter = `filter=${product.category}`;
    const { data } = useGetProductQuery(filter);
    const relatedProduct: TProduct[] = data?.data || [];
    const notMacthProduct = relatedProduct.filter(ele => ele.name !== product.name);
    const { name, price, image, description } = product;
    if (!mainImage && product.image && product.image.length > 0) {
        setMainImage(product.image[0]);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !productData) {
        return <div>Error loading product data.</div>;
    }

    const addProductInCart = () => {
        if (product.inStock < count) {
            return toast.error("this product out of stock")
        } else {
            try {
                const productData = { ...product, quantity: count }
                dispatch(addToCart(productData))
                navigate("/products")
                toast.success("your product added to cart")

            } catch (error) {
                if(error){
                    return toast.error("this product allrady add your card")
                }
            }
           
        }
    }

    return (
        <div className="space-y-5 bg-slate-50">
            <div className="max-w-7xl mx-auto px-5  py-5 shadow-md bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main Product Image */}
                    <div className="col-span-1">
                        {mainImage ? (
                            <img className="w-full h-96 object-cover rounded-md shadow-md" src={mainImage} alt="Product" />
                        ) : (
                            <div className="w-full h-96 bg-gray-200 rounded-md shadow-md flex items-center justify-center">
                                <p className="text-gray-500">No image available</p>
                            </div>
                        )}
                        <div className="flex mt-4 space-x-2">
                            {image && image.map((img, id) => (
                                <img
                                    key={id}
                                    className="w-20 h-20 object-cover rounded-md shadow-md cursor-pointer"
                                    src={img}
                                    alt={`Thumbnail ${id + 1}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="col-span-1 p-4">
                        <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
                        <p className="text-xl text-gray-700 mt-2">${price}</p>
                        <p className="mt-2 text-gray-500">Tax included | <span className="text-blue-500 cursor-pointer">Shipping</span> calculated at checkout.</p>
                        <p className="mt-4 text-gray-700">By <span className="text-blue-500 cursor-pointer">Jack Wolfskin</span></p>
                        <div className="mt-4">
                            <label className="text-gray-700">Quantity:</label>
                            <div className="flex items-center mt-2">
                                <button onClick={() => setCount(count - 1)} disabled={count <= 0} className="p-2 border border-gray-300 rounded-l-md">-</button>
                                <input type="text" readOnly value={count} className="w-12 text-center border-t border-b border-gray-300" />
                                <button onClick={() => setCount(count + 1)} className="p-2 border border-gray-300 rounded-r-md">+</button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button disabled={product?.inStock <= 0} onClick={addProductInCart} variant="outline" className="w-full py-4 rounded-md hover:bg-black hover:text-white">ADD TO CART</Button>
                            <Button disabled={product?.inStock <= 0 || product?.inStock < count} className="w-full text-white bg-orange-500 py-3 rounded-md shadow-md hover:bg-orange-600 mt-4">Buy with Stripe</Button>
                        </div>
                        <div className="mt-4 text-blue-500 cursor-pointer">
                            <p>Pickup available at <span className="underline">Adventure Shop</span></p>
                            <p>Usually ready in 24 hours</p>
                        </div>
                        <div className="mt-4 space-y-2">
                            <details className="border-t pt-2">
                                <summary className="cursor-pointer">Description</summary>
                                <p className="mt-2 text-gray-600">{description}</p>
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
            <div>
                <ProductRatingAndReview />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-5">
                {notMacthProduct.map(item => <ProductCard key={item._id} product={item} />)}
            </div>

        </div>
    );
};

export default ProductDetiles;
