import MainLayout from "@/components/layout/mainLayout/MainLayout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                path:"/",
                element:<Home />
            }
        ]
    }
])

export default Router