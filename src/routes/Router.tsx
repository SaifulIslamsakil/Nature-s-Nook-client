import MainLayout from "@/components/layout/mainLayout/MainLayout";
import Aboute from "@/pages/aboute/Aboute";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import NotFoundPage from "@/pages/not-found/NotFound";
import ProductManagement from "@/pages/productManagement/ProductManagement";
import Products from "@/pages/products/Products";
import ProductDetiles from "@/pages/productsDetiles/ProductDetiles";
import { createBrowserRouter } from "react-router-dom"

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"product/product-detiles/:id",
                element:<ProductDetiles/>
            },
            {
                path:"product-management",
                element:<ProductManagement/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"checkout",
                element:<Checkout/>
            },
            {
                path:"/aboute",
                element:<Aboute/>
            }
        ]
    }
])

export default Router