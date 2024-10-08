import { NavLink } from "react-router-dom";


const Menu = () => {
    const menuItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Us",
            path: "/aboute"
        },
        {
            name: "Products",
            path: "/products"
        },
        {
            name: "Products manages",
            path: "/product-management"
        },
        {
            name: "My Cart",
            path: "/cart"
        },
        {
            name: "Camping",
            path: "/Camping"
        },
        {
            name: "Register",
            path: "/Register"
        },
    ]

    return (
        <ul className=" space-y-6 lg:flex lg:space-y-0 gap-6 text-lg text-center ">
            {
                menuItems.map(menu => <li className=" hover:text-orange-500"><NavLink
                    to={menu.path}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-orange-600 border-b-2 border-orange-600 pb-1 " : "hover:text-orange-600 hover:border-b-2 hover:border-orange-600 pb-1 duration-200"
                    }
                >
                    {menu.name}
                </NavLink></li>)
            }
        </ul>
    );
};

export default Menu;