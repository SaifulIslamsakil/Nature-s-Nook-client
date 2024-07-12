import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './pagination';

const ProductsPaginations = () => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className=" text-orange-500 md:text-lg hover:bg-orange-500 hover:text-white duration-75" href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className=" hover:bg-orange-500 hover:text-white border  " href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className=" hover:bg-orange-500 hover:text-white border  " href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className=" hover:bg-orange-500 hover:text-white border  " href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className=" hidden md:flex hover:bg-orange-500 hover:text-white border  " href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className=" hidden md:flex hover:bg-orange-500 hover:text-white border  " href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis className=" hidden md:flex" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className=" text-orange-500 md:text-lg hover:bg-orange-500 hover:text-white duration-75" href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default ProductsPaginations;