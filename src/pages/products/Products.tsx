import ProductCard from "@/components/ui/ProductCard";
import ProductsHero from "@/components/ui/ProductsHero";
import ProductsPaginations from "@/components/ui/ProductsPaginations";
import SearchFilterSort from "@/components/ui/SearchFilterSort";


const Products = () => {
    return (
        <div className=" mt-6">
            <ProductsHero />
            <div>
                <div className="bg-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Our <span className="text-orange-500">Products</span>
                        </h2>
                        <SearchFilterSort />
                        <ProductCard />
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