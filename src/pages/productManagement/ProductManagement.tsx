import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSystemUpdateAlt } from "react-icons/md"
import { useGetProductQuery, useProductDeleteMutation } from "@/redux/feature/product/productApi";
import { FaPlus } from "react-icons/fa6";
import { TProduct } from "@/interface/interface";
import ProductForm from "@/components/ui/ProductForm";
import { useState } from "react";
const ProductManagement = () => {
    const [formTigger, setFormTigger] = useState(false)
    const [deleteProduct] = useProductDeleteMutation()
    const { data, isLoading } = useGetProductQuery("")
    const product: TProduct[] = data?.data
    const handelProductDelete = async (id: string) => {
        deleteProduct(id)

    }
    return (
        <div className=" p-6 relative">
            <div className="container mx-auto p-4">
                <div className=" flex justify-between items-center">
                    <p className="text-left mb-4 text-xl font-semibold">A list of your recent invoices.</p>
                    <p onClick={()=> setFormTigger(true)} className="text-left mb-4 flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-lg"><span >Add New</span><FaPlus /> </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="w-[100px] py-2 px-4 border-b">Image</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Category</th>
                                <th className="py-2 px-4 border-b text-right">Price</th>
                                <th className="py-2 px-4 border-b text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? "lodding...." : product.map(item => <tr key={item._id} className=" text-center hover:shadow-lg hover:bg-slate-50">
                                    <td className="py-2 px-4 border-b font-medium">
                                        <img className=" w-24 h-24 mx-auto object-cover" src={item?.image[0]} alt="" />
                                    </td>
                                    <td className="py-2 px-4 border-b text-lg font-semibold">{item?.name}</td>
                                    <td className="py-2 px-4 border-b">{item?.category}</td>
                                    <td className="py-2 px-4 border-b text-right text-lg font-semibold text-orange-500">${item?.price}</td>
                                    <td className="py-2 px-4 border-b text-right space-x-2">
                                        <Button className=" font-bold text-xl"><MdOutlineSystemUpdateAlt /></Button>
                                        <Button onClick={() => handelProductDelete(item?._id)} className=" bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl"><RiDeleteBin6Line /></Button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`w-full h-full bg-black bg-opacity-50 absolute -top-52 left-0 flex items-center justify-center ${formTigger? "block":"hidden"}`}>
                <ProductForm setFormTigger={setFormTigger} />
            </div>
        </div>
    );
};

export default ProductManagement;