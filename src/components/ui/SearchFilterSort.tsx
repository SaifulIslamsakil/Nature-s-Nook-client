import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { useGetCategoryQuery } from "@/redux/feature/category/categoryApi";
import { TCategory } from "@/interface/interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

type SearchFilterSortProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

type FormValues = {
  searchValue: string;
}

const SearchFilterSort: React.FC<SearchFilterSortProps> = ({ setQuery }) => {
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchParams] = useSearchParams();
  const filterFormCategory = searchParams.get('filter');

  const { register, handleSubmit } = useForm<FormValues>();
  const { data } = useGetCategoryQuery(undefined);

  useEffect(() => {
    if (filterFormCategory) {
      setFilter(filterFormCategory)
    }
    if (filter) {
      setQuery(`filter=${filter}`);
    }
    if (sort) {
      setQuery(`sort=${sort}`);
    }
    if (search) {
      setQuery(`search=${search}`);
    }
  }, [filter, sort, search, setQuery, filterFormCategory]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSearch(data.searchValue);
  }

  const categories: TCategory[] = data?.data || [];

  return (
    <div className="mb-8 flex lg:justify-between flex-col md:flex-row items-center gap-4">
      <form onChange={handleSubmit(onSubmit)} className="flex items-center w-full md:w-1/3">
        <input
          {...register("searchValue")}
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
        />
        <button type="submit" className="text-lg bg-orange-500 p-3 text-white rounded-r-md">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="md:flex space-y-3 md:space-y-0 items-center gap-4 w-full md:w-1/3 z-50">
        <div className="flex items-center gap-2">
          <BiFilterAlt className="text-lg text-gray-600" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-10">
                {filter ? filter : "Category"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white shadow-xl border">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
                {categories.map((item) => (
                  <DropdownMenuRadioItem key={item._id} value={item.name} className="hover:bg-orange-500 hover:text-white px-5 py-3">
                    {item.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <MdSort className="text-lg text-gray-600" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-10">
                {sort ? sort : "Sort By Price"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white shadow-xl border">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="Regular Price" className="hover:bg-orange-500 hover:text-white px-5 py-3">
                  Regular Price
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="High to Low" className="hover:bg-orange-500 hover:text-white px-5 py-3">
                  High to Low
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Low to High" className="hover:bg-orange-500 hover:text-white px-5 py-3">
                  Low to High
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSort;
