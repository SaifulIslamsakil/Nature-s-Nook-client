import MainLayout from "@/components/layout/mainLayout/MainLayout";
import Cart from "@/pages/cart/Cart";
import Home from "@/pages/home/Home";
import ProductManagement from "@/pages/productManagement/ProductManagement";
import Products from "@/pages/products/Products";
import ProductDetiles from "@/pages/productsDetiles/ProductDetiles";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/products/product-detiles",
                element:<ProductDetiles/>
            },
            {
                path:"/products/product-management",
                element:<ProductManagement/>
            },
            {
                path:"/products/cart",
                element:<Cart/>
            }
        ]
    }
])

export default Router