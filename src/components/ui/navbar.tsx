import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { AiOutlineMenuFold } from "react-icons/ai";
import Menu from "./Menu";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useAppSelector((state: RootState) => state.addToCart)
  const [menuToggle, setMenuToggle] = useState<boolean>(false)

  return (
    <nav>
      <div className="bg-[#1d0f06] space-y-1 p-2">
        <p className="hidden lg:block text-orange-300">
          Free Standard Shipping for Orders Over $50. <span className="underline">Learn More</span>
        </p>
        <div className="px-2 py-4 md:px-4 lg:p-5 text-white flex justify-between items-center gap-5">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              Nature's <span className="text-orange-500">Nooks</span>
            </h1>
          </div>
          
          <div className="hidden lg:block">
            <ul className="flex gap-2">
              <li className="flex items-center gap-1 hover:text-orange-500">
                <span className="text-lg"><BiSolidMessageRoundedDots /></span> Chat with us
              </li>
              <li className="flex items-center gap-1 hover:text-orange-500">
                <span className="text-lg"><IoIosCall /></span> 1-800-123-4567
              </li>
              <Link to="cart">
                <li className="flex items-center gap-1 hover:text-orange-500 text-orange-500 text-2xl">
                  <span className="text-lg"><FaCartShopping /></span> ({state.length})
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <p onClick={() => setMenuToggle(!menuToggle)} className="lg:hidden text-white text-2xl">
              {menuToggle ? <ImCross /> : <AiOutlineMenuFold />}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-black relative">
        <div className="hidden lg:flex items-center gap-5 border p-6 text-lg">
          <div className="flex items-center gap-2">
            <p className="text-orange-600 text-xl"><RiMenuUnfoldLine /></p>
            <p>Shop by Category</p>
          </div>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <div className="hidden lg:flex p-6 border flex-1 justify-end">
          <Menu />
        </div>
        <div className={`${menuToggle ? 'block' : 'hidden'} w-full lg:hidden md:w-80 h-screen bg-white shadow-2xl absolute border p-5 z-50 left-0 top-0`}>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar