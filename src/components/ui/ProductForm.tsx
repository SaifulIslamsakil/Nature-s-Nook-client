import { Button } from "./button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";
import { Textarea } from "./textarea";
import { useGetCategoryQuery } from "@/redux/feature/category/categoryApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs, TCategory } from "@/interface/interface";
import { useState } from "react";
import { useCreateProductMutation, useProductUpdateMutation } from "@/redux/feature/product/productApi";
import Swal from "sweetalert2";

type Tprops = {
    setFormTigger: React.Dispatch<React.SetStateAction<boolean>>,
    formAction: string
}
const ProductForm = ({ setFormTigger, formAction }: Tprops) => {
    const { data } = useGetCategoryQuery(undefined);
    const [createProduct] = useCreateProductMutation()
    const [updateProduct] = useProductUpdateMutation()
    const [category, setCategory] = useState<string>("")
    const [type, setType] = useState<string>("")
    const categories: TCategory[] = data?.data || [];
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        let response
        const productInfo = {
            name: formData.name,
            category: category,
            description: formData.description,
            image: ["https://i.ibb.co/zbMk8jR/download-12.jpg", "https://i.ibb.co/529PtDv/download-11.jpg", "https://i.ibb.co/XVP18Lq/download-15.jpg"],
            price: Number(formData.price),
            inStock: Number(formData.inStock),
            productType: type,
        }
        if (formAction.split(",")[0] === "update product") {
            const updateProductInfo = {
                ...productInfo, id: formAction.split(",")[1]
            }
            response = await updateProduct(updateProductInfo)
        } else {
            response = await createProduct(productInfo)
        }

        if (response?.data?.success) {
            Swal.fire({
                title: "Good job!",
                text: response?.data?.message,
                icon: "success"
            });

            setFormTigger(false)
        }
    };

    return (
        <div className="bg-white rounded-lg p-4">
            <Card>
                <CardHeader>
                    <CardTitle className=" uppercase">{formAction.split(",")[0]}</CardTitle>
                    <CardDescription>Deploy your product in one-click.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="grid grid-cols-12 w-full items-center gap-4 space-y-2">
                            <div className="flex flex-col space-y-1.5 col-span-6">
                                <Label>Name</Label>
                                <Input id="name" {...register("name")} placeholder="Name of your product" />
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-6">
                                <Label>Category</Label>
                                <Select onValueChange={setCategory}>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent position="popper" >
                                        {categories.map((item) => (
                                            <SelectItem key={item._id} value={item.name} >
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-4">
                                <Label>Price</Label>
                                <Input {...register("price")} id="price" type="number" placeholder="Price" />
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-4">
                                <Label>InStock</Label>
                                <Input {...register("inStock")} id="stock" type="number" placeholder="Product Stock" />
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-4">
                                <Label>Type</Label>
                                <Select onValueChange={setType}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="offered">Offered</SelectItem>
                                        <SelectItem value="special">Special</SelectItem>
                                        <SelectItem value="featured">Featured</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-4">
                                <Label>1st Img</Label>
                                <Input {...register("img1")} id="img1" type="file" placeholder="Name of your project" />
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-4">
                                <Label>2nd Img</Label>
                                <Input {...register("img2")} id="img2" type="file" placeholder="Name of your project" />
                            </div>
                            <div className="flex flex-col space-y-1.5 col-span-4">
                                <Label>3rd Img</Label>
                                <Input {...register("img3")} id="img3" type="file" placeholder="Name of your project" />
                            </div>
                            <div className="grid col-span-12 gap-1.5">
                                <Label>Description</Label>
                                <Textarea {...register("description")} id="description" placeholder="Type your message here." />
                            </div>
                        </div>
                        <div className="col-span-12 flex justify-between pt-4">
                            <Button onClick={() => setFormTigger(false)} variant="outline">
                                Cancel
                            </Button>
                            <Button type="submit">Submit</Button>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </div>
    );
};

export default ProductForm;
