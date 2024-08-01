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
import { TCategory } from "@/interface/interface";

type Inputs = {
    name: string;
    category: string;
    price: number;
    inStock: number;
    type: string;
    img1: string;
    img2: string;
    img3: string;
    description: string;
}

const ProductForm = ({ setFormTigger }: { setFormTigger: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { data } = useGetCategoryQuery(undefined);
    const categories: TCategory[] = data?.data || [];

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        // Handle form submission logic here, e.g., API call
        console.log(formData);

        // Optionally, you can reset the form after submission
        // reset();
    };

    return (
        <div className="bg-white rounded-lg p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Product</CardTitle>
                    <CardDescription>Deploy your new product in one-click.</CardDescription>
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
                                <Select>
                                    <SelectTrigger  id="framework">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent  {...register("category")}  position="popper">
                                        {categories.map((item) => (
                                            <SelectItem key={item._id} value={item.name}>
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
                                <Select >
                                    <SelectTrigger {...register("type")}>
                                        <SelectValue   placeholder="Select Type" />
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
