import { NavLink } from "react-router-dom";


const Menu = () => {
    const menuItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Us",
            path: "/a"
        },
        {
            name: "Products",
            path: "/v"
        },
        {
            name: "Offred",
            path: "/b"
        },
        {
            name: "Blog",
            path: "/f"
        },
        {
            name: "Camping",
            path: "/g"
        },
        {
            name: "Sign In",
            path: "/gf"
        },
        {
            name: "Register",
            path: "/ll"
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