import { TCategory } from "@/interface/interface";
import { useGetCategoryQuery } from "@/redux/feature/category/categoryApi";
import React from 'react';
import { Link } from "react-router-dom";



const Categories: React.FC = () => {
    const { data, error, isLoading } = useGetCategoryQuery(undefined);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading categories.</p>;
    const categories: TCategory[] = data?.data || [];
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">
                Explore Our <span className="text-orange-500">Categories</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:pt-10">
                {categories.map((category) => (
                    <Link key={category._id} to={`/products?${category.name}`}>
                        <div  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl">
                            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{category.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
