
import { TProduct } from '@/interface/interface';
import Rating from 'react-rating';
import ProductCard from '@/components/ui/ProductCard';
interface RatingDistribution {
    star: number;
    count: number;
}

interface Review {
    user: string;
    verified: boolean;
    comment: string;
    images: string[];
}

// Define the props for the RatingComponent
interface RatingComponentProps {
    rating: number;
    totalRatings: number;
    ratingDistribution: RatingDistribution[];
    reviews: Review[];
    notMacthProduct:TProduct[]
}

const ProductRatingAndReview: React.FC<RatingComponentProps> = ({ rating,
    totalRatings,
    ratingDistribution,
    reviews,
    notMacthProduct

}) => {
    return (
        <div className="  grid grid-cols-4 gap-3 pb-10  shadow-md ">
            <div className='col-span-4 lg:col-span-3 bg-white'>
                <p className=' p-5 bg-slate-100 text-xl font-semibold'>Ratings & Reviews of LED Sensor Dream Mushroom Lamp - Multicolor</p>
                <div className='p-5'>
                    <div className='md:flex items-center gap-10'>
                        <div>
                            <div className="text-6xl font-semibold flex items-center">
                                {rating}
                                <span className=" ml-1 text-gray-600">/5</span>
                            </div>
                            <div className="flex items-center pt-3">
                                <Rating
                                    initialRating={rating}
                                    readonly
                                    emptySymbol={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M12 17.27l5.18 3.73-1.64-6.39L21 9.24l-6.49-.51L12 2.5 9.49 8.73 3 9.24l4.46 5.37L5.82 21z" />
                                        </svg>
                                    }
                                    fullSymbol={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-yellow-400">
                                            <path d="M12 17.27l5.18 3.73-1.64-6.39L21 9.24l-6.49-.51L12 2.5 9.49 8.73 3 9.24l4.46 5.37L5.82 21z" />
                                        </svg>
                                    }
                                    fractions={2}
                                />
                                <span className="ml-2 text-gray-600">{totalRatings} Ratings</span>
                            </div>
                        </div>

                        {/* Star Rating Bar */}
                        <div className="mt-4 flex-1 space-y-4">
                            {ratingDistribution.map((item) => (
                                <div key={item.star} className="flex items-center space-x-2 my-1">
                                    <span className="text-sm">{item.star} stars</span>
                                    <div className="w-2/3 h-3 bg-gray-200 rounded-lg overflow-hidden">
                                        <div
                                            className="bg-yellow-400 h-full"
                                            style={{ width: `${(item.count / totalRatings) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-sm">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="mt-4">
                        <div className="text-lg font-medium">Product Reviews</div>
                        {reviews.map((review, index) => (
                            <div key={index} className="mt-2 p-4 border rounded-md">
                                <div className="flex items-center space-x-2">
                                    <div className="font-bold">{review.user}</div>
                                    {review.verified && <span className="text-sm text-green-500">Verified Purchase</span>}
                                </div>
                                <div className="mt-2 text-sm">
                                    {review.comment}
                                </div>
                                {/* Images */}
                                <div className="flex space-x-2 mt-2">
                                    {review.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="w-20 h-20 bg-gray-100">
                                            <img src={img} alt="review" className="object-cover w-full h-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=' col-span-4  space-y-2 px-5 grid md:grid-cols-3 md:gap-3  lg:grid-cols-1  md:space-y-0 lg:col-span-1 lg:space-y-2 '>
                        {
                            notMacthProduct.map(product => <ProductCard key={product?._id} product={product}/>)
                        }
            </div>
        </div>
    );
};

export default ProductRatingAndReview;