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