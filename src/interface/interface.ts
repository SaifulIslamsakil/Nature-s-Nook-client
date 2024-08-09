export type TCategory = {
    _id: number; 
    name: string;
    image: string;
};

export type TProduct = {
    _id: string;
    name: string;
    category: string;
    description: string;
    image: string[];
    price: number;
    inStock: number;
    productType: "special" | "Special" | "offerd";
    isDeleted: boolean;
}
export type Inputs = {
    name: string;
    price: number;
    inStock: number;
    img1: string;
    img2: string;
    img3: string;
    description: string;
}