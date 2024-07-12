import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSystemUpdateAlt } from "react-icons/md"
// import { useState } from "react";
// const productsData = [
//     // Sample data
//     { id: 1, image: 'https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp', name: 'Product 1', price: '$100', category: 'Category 1' },
//     { id: 2, image: 'https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp', name: 'Product 2', price: '$200', category: 'Category 2' },
// ];
const ProductManagement = () => {

    return (
        <div className=" p-6">
            <div className="container mx-auto p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <caption className="text-left mb-4 text-lg font-semibold">A list of your recent invoices.</caption>
                        <thead>
                            <tr>
                                <th className="w-[100px] py-2 px-4 border-b">Image</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Price</th>
                                <th className="py-2 px-4 border-b text-right">Amount</th>
                                <th className="py-2 px-4 border-b text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" text-center">
                                <td className="py-2 px-4 border-b font-medium">
                                    <img className=" w-24 h-24 mx-auto object-cover" src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="" />
                                </td>
                                <td className="py-2 px-4 border-b">Paid</td>
                                <td className="py-2 px-4 border-b">Credit Card</td>
                                <td className="py-2 px-4 border-b text-right">$250.00</td>
                                <td className="py-2 px-4 border-b text-right space-x-2">
                                    <Button className=" font-bold text-xl"><MdOutlineSystemUpdateAlt /></Button>
                                    <Button className=" bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl"><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>
                            <tr className=" text-center">
                                <td className="py-2 px-4 border-b font-medium">
                                    <img className=" w-24 h-24 mx-auto object-cover" src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="" />
                                </td>
                                <td className="py-2 px-4 border-b">Paid</td>
                                <td className="py-2 px-4 border-b">Credit Card</td>
                                <td className="py-2 px-4 border-b text-right">$250.00</td>
                                <td className="py-2 px-4 border-b text-right space-x-2">
                                    <Button className=" font-bold text-xl"><MdOutlineSystemUpdateAlt /></Button>
                                    <Button className=" bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl"><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProductManagement;