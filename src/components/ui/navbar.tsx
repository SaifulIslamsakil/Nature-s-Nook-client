import { Button } from "./button";
import { Input } from "./input";
import { IoIosCall } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navbar = () => {
    const menuItems = [
        {
            name : "Home",
            path : "/"
        },
        {
            name : "About Us",
            path : "/"
        },
        {
            name : "Products",
            path : "/"
        },
        {
            name : "Offred",
            path : "/"
        },
        {
            name : "blog",
            path : "/"
        },
        {
            name : "Offred",
            path : "/"
        },
        {
            name : "Sign In",
            path : "/"
        },
        {
            name : "Register",
            path : "/"
        },
    ]

    return (
        <nav>
            <div className=" bg-black p-3 space-y-1">
                <p className=" text-orange-300">Free Standard Shipping for Orders Over $50. <span className=" underline">Learn More</span></p>
                <div className=" text-white flex justify-between items-center gap-5 p-5">
                    <div className=" flex-1">
                        <h1 className=" text-3xl font-bold">Nature's <span className=" text-orange-500">Nooks</span></h1>
                    </div>
                    <div className=" flex-1">
                        <div className="flex w-full max-w-sm items-center space-x-2 text-black">
                            <Input className=" w-full" type="search" placeholder="Search now...." />
                            <Button className="bg-orange-500" type="submit">Search</Button>
                        </div>
                    </div>
                    <div className="">
                        <ul className=" flex gap-2">
                            <li className=" flex items-center gap-1 hover:text-orange-500"> <span className=" text-lg"><BiSolidMessageRoundedDots /></span> Chat with us</li>
                            <li className=" flex items-center gap-1 hover:text-orange-500"> <span className=" text-lg"><IoIosCall /></span> 1-800-123-4567</li>
                            <li className=" flex items-center gap-1 hover:text-orange-500 text-orange-500 text-2xl"> <span className=" text-lg"><FaCartShopping /></span> (0)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-black ">
                <div className=" flex items-center gap-5 border p-5 text-lg">
                    <div className="flex items-center gap-2">
                        <p className=" text-orange-600 text-xl"><RiMenuUnfoldLine /></p>
                        <p>Shop by Category</p>
                    </div>
                    <span>
                        <IoIosArrowDown />
                    </span>

                </div>
                <div className=" p-5 border flex-1 flex justify-end">
                    <ul className=" flex gap-6 text-lg ">
                       {
                        menuItems.map(item=> <li className=" hover:text-orange-500"><NavLink to={item.path}></NavLink>{item.name}</li> )
                       }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;