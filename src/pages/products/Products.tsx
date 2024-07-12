import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import ProductsHero from "@/components/ui/ProductsHero";
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
                    </div>
                </div>
            </div>
            <div className="my-5">

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious className=" text-orange-500 md:text-lg hover:bg-orange-500 hover:text-white duration-75" href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className=" hover:bg-orange-500 hover:text-white border  " href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className=" hover:bg-orange-500 hover:text-white border  " href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className=" hover:bg-orange-500 hover:text-white border  " href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className=" hidden md:flex hover:bg-orange-500 hover:text-white border  " href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className=" hidden md:flex hover:bg-orange-500 hover:text-white border  " href="#">5</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis className=" hidden md:flex" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext className=" text-orange-500 md:text-lg hover:bg-orange-500 hover:text-white duration-75" href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>

    );
};

export default Products;