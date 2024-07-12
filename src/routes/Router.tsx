import MainLayout from "@/components/layout/mainLayout/MainLayout";
import Home from "@/pages/home/Home";
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
            }
        ]
    }
])

export default Router