import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductsHero = () => {
    return (
        <div>
            <div className="grid grid-cols-12 grid-rows-6 gap-4 overflow-hidden">
                {/* Image 1 */}
                <div className="col-span-6 lg:col-span-8 row-span-6 overflow-hidden">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        className="rounded-md shadow-md"
                    >
                        <div>
                            <img className="h-96 object-cover" src="https://i.ibb.co/552TngY/s-l400.jpg" alt="Carousel Image 1" />
                        </div>
                        <div>
                            <img className="h-96 object-cover" src="https://i.ibb.co/FnKdCX5/outbound-quickcamp-instant-cabin-tent-8-person-a69c4165-1367-4591-8171-c69180311ad5-jpgrendition.jpg" alt="Carousel Image 2" />
                        </div>
                        <div>
                            <img className="h-96 object-cover" src="https://i.ibb.co/Fb5WW4x/download-5.jpg" alt="Carousel Image 2" />
                        </div>

                    </Carousel>
                </div>
                {/* Image 2 */}
                <div className="col-span-6 lg:col-span-4 row-span-3 overflow-hidden">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        className="rounded-md shadow-md"
                    >
                        <div>
                            <img className="h-[182px] object-cover" src="https://i.ibb.co/9sk8Nkt/SS23-Rossignol-Online-Shop-banner-SHOES.webp" alt="Carousel Image 3" />
                        </div>
                        <div>
                            <img className="h-[182px] object-cover" src="https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp" alt="Carousel Image 1" />
                        </div>
                        <div>
                            <img className="h-[182px] object-cover" src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="Carousel Image 2" />
                        </div>
                    </Carousel>
                </div>
                {/* Image 3 with Carousel */}
                <div className="col-span-6 lg:col-span-4 row-span-3 overflow-hidden">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        className="rounded-md shadow-md"
                    >
                        <div>
                            <img className=" h-[182px] object-cover" src="https://i.ibb.co/JQgDkm8/slider1-d6617dc9-5c34-4bf1-a32e-3df167668e21-2000x.webp" alt="Carousel Image 3" />
                        </div>
                        <div>
                            <img className=" h-[182px] object-cover" src="https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp" alt="Carousel Image 1" />
                        </div>
                        <div>
                            <img className=" h-[182px] object-cover" src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" alt="Carousel Image 2" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default ProductsHero;