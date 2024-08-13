import ProductCard from "@/components/ui/ProductCard";
import ProductsHero from "@/components/ui/ProductsHero";
import ProductsPaginations from "@/components/ui/ProductsPaginations";
import SearchFilterSort from "@/components/ui/SearchFilterSort";
import { TProduct } from "@/interface/interface";
import { useGetProductQuery } from "@/redux/feature/product/productApi";
import { useState } from "react";
const Products = () => {
    const [query, setQuery] = useState("")    
    const { data, isLoading } = useGetProductQuery(query)
    const product: TProduct[] = data?.data || []
    return (
        <div className=" mt-6 border">
            <ProductsHero />
            <div>
                <div className="bg-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Our <span className="text-orange-500">Products</span>
                        </h2>
                        <SearchFilterSort setQuery={setQuery} />
                        <div className="grid  md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {
                              !isLoading?  product?.map(item => <ProductCard key={item._id} product={item} />) :"Lodding...."
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <ProductsPaginations />
            </div>
        </div>

    );
};

export default Products;