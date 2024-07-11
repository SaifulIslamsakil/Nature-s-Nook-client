import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from './button';
const Hero = () => {
    return (
        <div className=' mt-5'>
            <Carousel autoPlay={true}>
                <div>
                    <img src="https://i.ibb.co/j4n0V2y/slider3-f5c65b77-2177-4700-8e23-2342afc0dd69-2000x.webp" />
                    <div className=' hidden lg:block py-10 bg-black bg-opacity-60 w-[480px] absolute bottom-32 left-32 space-y-4 rounded-lg'>
                        <h1 className=' text-yellow-500 text-3xl font-semibold'>Explore Your Destinantion</h1>
                        <h3 className='text-white text-xl'>Exprince In Live</h3>
                        <Button className=' bg-orange-500'>Shop now</Button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/JQgDkm8/slider1-d6617dc9-5c34-4bf1-a32e-3df167668e21-2000x.webp" />
                    <div className=' hidden lg:block py-10 bg-black bg-opacity-60 w-[480px] absolute bottom-32 left-32 space-y-4 rounded-lg'>
                        <h1 className=' text-yellow-500 text-3xl font-semibold'>Explore Your Destinantion</h1>
                        <h3 className='text-white text-xl'>Exprince In Live</h3>
                        <Button className=' bg-orange-500'>Shop now</Button>
                    </div>
                </div>
                <div className=' relative'>
                    <img src="https://i.ibb.co/WWfWLCn/slider2-9f305fca-5d30-4456-b297-cccd1fdd59c8-2000x.webp" />
                    <div className=' hidden lg:block py-10 bg-black bg-opacity-60 w-[480px] absolute bottom-32 right-32 space-y-4 rounded-lg'>
                        <h1 className=' text-yellow-500 text-3xl font-semibold'>Explore Your Destinantion</h1>
                        <h3 className='text-white text-xl'>Exprince In Live</h3>
                        <Button className=' bg-orange-500'>Shop now</Button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;