import { Button } from '@/components/ui/button';
import Loder from '@/components/ui/Loder';
import ProductRatingAndReview from '@/components/ui/ProductRatingAndReview';
import { TProduct } from '@/interface/interface';
import { addToCart } from '@/redux/feature/addToCart/addToCartSilice';
import { useGetProductQuery, useGetSingelProductQuery } from '@/redux/feature/product/productApi';
import { useAppDispatch } from '@/redux/hooks';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Rating from 'react-rating';

// Assuming `TRatingData` is defined in your interface file
interface TRatingData {
    rating: number;
    totalRatings: number;
    ratingDistribution: Array<{ star: number; count: number }>;
    reviews: Array<{
        user: string;
        verified: boolean;
        comment: string;
        images: string[];
    }>;
}

const ProductDetiles: React.FC = () => {
    const [count, setCount] = useState<number>(1);
    const [mainImage, setMainImage] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const { data: productData, error, isLoading } = useGetSingelProductQuery(id as string);
    const product: TProduct | null = productData?.data || null;

    useEffect(() => {
        if (product && product.image && product.image.length > 0) {
            setMainImage(product.image[0]);
        }
    }, [product]);

    const filter = `filter=${product?.category}`;
    const { data } = useGetProductQuery(filter);
    const relatedProduct: TProduct[] = data?.data || [];
    const notMacthProduct = relatedProduct.filter(ele => ele.name !== product?.name);

    if (isLoading) return <p className="flex justify-center items-center h-52"><Loder /></p>;
    if (error) return <p className="flex justify-center items-center h-52 text-orange-500">Something Went Wrong. Please Try Again...</p>;

    const addProductInCart = () => {
        if (product && product.inStock < count) {
            return toast.error("This product is out of stock");
        } else if (product) {
            try {
                const productData = { ...product, quantity: count };
                dispatch(addToCart(productData));
                navigate("/products");
                toast.success("Your product was added to the cart");
            } catch (error) {
                toast.error("This product is already in your cart");
            }
        }
    };

    const ratingData: TRatingData = {
        rating: 4.1,
        totalRatings: 3015,
        ratingDistribution: [
            { star: 5, count: 1924 },
            { star: 4, count: 347 },
            { star: 3, count: 205 },
            { star: 2, count: 129 },
            { star: 1, count: 410 },
        ],
        reviews: [
            {
                rating:3.2,
                user: 'Muntasir',
                verified: true,
                comment: ' Thanks Natures Nooks for this wonderful light at such a low price. Highly recommended.',
                images: ['https://i.ibb.co/9sk8Nkt/SS23-Rossignol-Online-Shop-banner-SHOES.webp', 'https://i.ibb.co/9sk8Nkt/SS23-Rossignol-Online-Shop-banner-SHOES.webp', ],
            },
            {
                user: 'Muntasir',
                verified: true,
                comment: ' Thanks Natures Nooks for this wonderful light at such a low price. Highly recommended.',
                images: ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'],
            },
            {
                user: 'Muntasir',
                verified: true,
                comment: ' Thanks Natures Nooks for this wonderful light at such a low price. Highly recommended.',
                images: ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'],
            },
        ],
    };

    return (
        <div className="space-y-5 bg-slate-50">
            <div className="max-w-7xl mx-auto px-5 py-5 shadow-md bg-white">
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
                            {product?.image && product.image.map((img, id) => (
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
                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold text-gray-900">{product?.name}</h1>
                            <p className="text-xl">Category: {product?.category}</p>
                            <p>Product Quantity: {product?.inStock}</p>
                            <div className="flex items-center">
                                <Rating
                                    initialRating={2}
                                    readonly
                                    emptySymbol={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27l5.18 3.73-1.64-6.39L21 9.24l-6.49-.51L12 2.5 9.49 8.73 3 9.24l4.46 5.37L5.82 21z" />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-yellow-400">
                                            <path d="M12 17.27l5.18 3.73-1.64-6.39L21 9.24l-6.49-.51L12 2.5 9.49 8.73 3 9.24l4.46 5.37L5.82 21z" />
                                        </svg>
                                    }
                                    fractions={2}
                                />
                                <span className="ml-2 text-gray-600">{"5"} Ratings</span>
                            </div>
                            <p className="mt-2 text-gray-500">Tax included | <span className="text-blue-500 cursor-pointer">Shipping</span> calculated at checkout.</p>
                            <p className="mt-4 text-gray-700">By <span className="text-blue-500 cursor-pointer">Jack Wolfskin</span></p>
                        </div>
                        <div>
                            <p className="text-2xl text-gray-700 mt-2 font-semibold">${product?.price}</p>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-700">Quantity:</label>
                            <div className="flex items-center mt-2">
                                <button onClick={() => setCount(count - 1)} disabled={count <= 1} className="p-2 border border-gray-300 rounded-l-md">-</button>
                                <input type="text" readOnly value={count} className="w-12 text-center border-t border-b border-gray-300" />
                                <button onClick={() => setCount(count + 1)} className="p-2 border border-gray-300 rounded-r-md">+</button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button disabled={product!.inStock! <= 1} onClick={addProductInCart} variant="outline" className="w-full py-4 rounded-md hover:bg-black hover:text-white">ADD TO CART</Button>
                            <Button disabled={product!.inStock! <= 1 || product!.inStock! < count} className="w-full text-white bg-orange-500 py-3 rounded-md shadow-md hover:bg-orange-600 mt-4">Buy with Stripe</Button>
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
            <div>
                <ProductRatingAndReview
                    rating={ratingData.rating}
                    totalRatings={ratingData.totalRatings}
                    ratingDistribution={ratingData.ratingDistribution}
                    reviews={ratingData.reviews}
                    notMacthProduct={relatedProduct}
                />
            </div>
        </div>
    );
};

export default ProductDetiles;
