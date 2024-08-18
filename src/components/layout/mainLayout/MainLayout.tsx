import { Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const MainLayout = () => {
    const location = useLocation()
    return (
        <div>
            <Navbar />
            <Outlet />
            {
                location.pathname !== "/aboute" &&  <Footer />
            }
           
        </div>
    );
};

export default MainLayout;