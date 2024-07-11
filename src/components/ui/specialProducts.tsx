import { Card, CardContent } from "./card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";


const specialProducts = () => {

    const products = [
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
        {
            id: 1,
            name: "Sirac Plus 65L Backpack",
            image: "https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp",
            price: "$100",
            description:"Whether you’re heading out on your first backpacking adventure or need a high comfort pack that will keep you organised out on the mountain, the Sirac Plus 65 is sturdy, stable and offers convenient storage features. The adjustable Air Contour™ X back system is designed to optimise your comfort, using strategically positioned foam panels which cushion your back and form air channels to keep you cool and dry."
        },
       
        
      
        // Add more products as needed
    ];
    return (
        <div className=" py-14">
            <h2 className=" text-center font-semibold text-3xl">Special <span className=" text-orange-500">Products</span></h2>
            <div className="py-10 flex justify-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-6xl"
                >
                    <CarouselContent>
                        {products.map((product) => (
                            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4 ">
                                <div className="">
                                    <Card className=" hover:shadow-xl">
                                        <CardContent className="flex flex-col p-3 Productsp-1 space-y-3 ">
                                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md " />
                                            <h3 className="text-lg font-semibold">{product.name.length > 10 ? product.name.slice(0 ,20 )+" ..." : product.name}</h3>
                                            <p className="text-gray-700">{product?.description?.length > 100 ? product.description?.slice(0,100)+"...." : ""}</p>
                                            <p className="text-orange-500 text-xl font-semibold">{product.price}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-7 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75" />
                    <CarouselNext className="absolute -right-7 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75" />
                </Carousel>
            </div>
        </div>
    );
};

export default specialProducts;