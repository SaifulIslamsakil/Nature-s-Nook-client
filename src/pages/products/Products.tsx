import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products = () => {
    return (
        <div className=" mt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-12 grid-rows-6 gap-4">
                    {/* Image 1 */}
                    <div className="col-span-6 lg:col-span-8 row-span-6">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-md shadow-md"
                        >
                            <div>
                                <img src="https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp" alt="Carousel Image 1" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="Carousel Image 2" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/JQgDkm8/slider1-d6617dc9-5c34-4bf1-a32e-3df167668e21-2000x.webp" alt="Carousel Image 3" />
                            </div>
                        </Carousel>
                    </div>
                    {/* Image 2 */}
                    <div className="col-span-6 lg:col-span-4 row-span-3">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-md shadow-md"
                        >
                            <div>
                                <img src="https://i.ibb.co/JQgDkm8/slider1-d6617dc9-5c34-4bf1-a32e-3df167668e21-2000x.webp" alt="Carousel Image 3" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp" alt="Carousel Image 1" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="Carousel Image 2" />
                            </div>
                        </Carousel>
                    </div>
                    {/* Image 3 with Carousel */}
                    <div className="col-span-6 lg:col-span-4 row-span-3">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-md shadow-md"
                        >
                            <div>
                                <img src="https://i.ibb.co/JQgDkm8/slider1-d6617dc9-5c34-4bf1-a32e-3df167668e21-2000x.webp" alt="Carousel Image 3" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp" alt="Carousel Image 1" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="Carousel Image 2" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;