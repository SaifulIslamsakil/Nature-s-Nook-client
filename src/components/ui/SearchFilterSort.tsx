import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { useGetCategoryQuery } from "@/redux/feature/category/categoryApi";
import { TCategory } from "@/interface/interface";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface SearchFilterSortProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const SearchFilterSort: React.FC<SearchFilterSortProps> = ({ setQuery }) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm();
  const { data } = useGetCategoryQuery(undefined);

  const handelResetFilter = () => {
    setSearch("");
    setQuery("");
  };
  useEffect(() => {
    if (filter) {
      setQuery(`filter=${filter}`);
    }
    if (sort) {
      setQuery(`sort=${sort}`);
    }
    if (search) {
      setQuery(`searchParams=${search}`);
    }
  }, [filter, sort, search, setQuery]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setSearch(data.searchValue);
  };


  const category: TCategory[] = data?.data || []
  return (
    <div className="mb-8 flex lg:justify-between flex-col lg:flex-row items-center gap-4 ">
      <form action="search" onChange={handleSubmit(onSubmit)} className=" flex-1 flex items-center w-full lg:w-1/3">
        <input
          {...register("searchValue")}
          type="text"
          placeholder="Search..."
          className="w-3/4 px-4 py-2 border rounded-l-md focus:outline-none"
        />
        <button className=" text-lg bg-orange-500 hover:bg-orange-700 p-3 text-white rounded-r-md">
          <AiOutlineSearch />
        </button>
      </form>
      <div className=" flex-1 justify-end md:flex space-y-3 md:space-y-0 items-center gap-4 w-full md:w-1/3 z-50">
        <div className=" flex items-center gap-2">
          <BiFilterAlt className="text-lg text-gray-600 " />
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-10 ">{filter ? filter : "Category"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white shadow-xl border  ">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
                {
                  category?.map(item => <DropdownMenuRadioItem value={item?.name} className="hover:bg-orange-500 hover:text-white px-5 py-3">{item.name}</DropdownMenuRadioItem>)
                }
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <MdSort className="text-lg text-gray-600" />
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-10 ">{sort ? sort : "Sor By Price"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white shadow-xl border  ">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="Regular Price" className="hover:bg-orange-500 hover:text-white px-5 py-3">Regular Price</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="High to Low" className="hover:bg-orange-500 hover:text-white px-5 py-3">High to Low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Low to High" className="hover:bg-orange-500 hover:text-white px-5 py-3">Low to High</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Button onClick={handelResetFilter} className="bg-orange-500 hover:bg-orange-700">Reset All </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSort;