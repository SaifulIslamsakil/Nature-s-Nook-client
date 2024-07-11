import Carousel from "react-multi-carousel";

const specialProducts = () => {
    // const arr = [
    //     {
    //         img: "https://i.ibb.co/dmdZ0h6/img1.webp"

    //     },
    // ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }


    const products = [
        {
            image:"https://i.ibb.co/dmdZ0h6/img1.webp",
            title: 'Product 1',
            price: '$100'
        },
        {
            image: 'product2.jpg',
            title: 'Product 2',
            price: '$150'
        },
        {
            image: 'product3.jpg',
            title: 'Product 3',
            price: '$200'
        },
        {
            image: 'product4.jpg',
            title: 'Product 4',
            price: '$250'
        },
        // Add more products as needed
    ]
    return (
        <div className=" py-14">
            <h2 className=" text-center font-semibold text-3xl">Special Products</h2>
            <div className=" p-20">
                <Carousel responsive={responsive} infinite autoPlay>
                    {
                        products.map(items => <div className="product-card">
                            <img src={items.image} alt={items.title} className="product-image" />
                            <h3 className="product-title">{items.title}</h3>
                            <p className="product-price">{items.price}</p>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default specialProducts;