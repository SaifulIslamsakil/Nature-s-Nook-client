import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Aboute = () => {
    const teamMembers = [
        // Sample team members
        { id: 1, name: 'Alice Johnson', role: 'CEO', image: 'https://i.ibb.co/vVdBRpM/shutterstock-105623048-0.jpg', bio: 'Alice is the CEO and founder of the company.' },
        { id: 2, name: 'Bob Smith', role: 'CTO', image: 'https://i.ibb.co/Lt0Cc08/images-12.jpg', bio: 'Bob is the CTO and leads the technology team.' },
        { id: 3, name: 'Carol White', role: 'CFO', image: 'https://i.ibb.co/RjR4Vn3/images-13.jpg', bio: 'Carol manages the financial operations of the company.' },
    ];
    return (
        <div>
            <div >
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    className="rounded-md shadow-md"
                >
                    <div>
                        <img className="h-[440px] object-cover" src="https://i.ibb.co/552TngY/s-l400.jpg" alt="Carousel Image 1" />
                    </div>
                    <div>
                        <img className="h-[440px] object-cover" src="https://i.ibb.co/FnKdCX5/outbound-quickcamp-instant-cabin-tent-8-person-a69c4165-1367-4591-8171-c69180311ad5-jpgrendition.jpg" alt="Carousel Image 2" />
                    </div>
                    <div>
                        <img className="h-[440px] object-cover" src="https://i.ibb.co/Fb5WW4x/download-5.jpg" alt="Carousel Image 2" />
                    </div>

                </Carousel>
            </div>
            <div>
                <div className="h-80">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093713!2d144.95373531531682!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e28b410bf381!2sRialto%20Towers!5e0!3m2!1sen!2sau!4v1610515824703!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded"
                    ></iframe>
                </div>
            </div>
            <div className=" mx-auto   text-slate-700 space-y-10 border">
                <div className="mt-10">
                    <h2 className="text-3xl font-bold mb-4 text-center pb-5 text-orange-500 cursor-pointer">Aboute Us</h2>
                    <div className="flex-col-reverse lg:flex-row flex items-center justify-between rounded mb-4 gap-5  p-5 ">
                        <div className=" flex-1 space-y-5 cursor-pointer">
                            <p className=" text-lg ">Let Us Make Your Trip Memorable</p>
                            <h2 className=" text-2xl md:text-5xl font-bold text-orange-500">California's Premier Camping Destination</h2>
                            <p className=" text-justify">At The Mountain, it is our mission to serve as the ultimate campground hosts, ensuring your satisfaction and creating a getaway that uniquely memorable. We achieve this mission by providing meticulously maintained facilities, accommodating service, and fun.</p>
                            <div className="lg:pt-5 space-y-5">
                                <div className=" space-y-5 md:space-y-0 md:flex items-center gap-5">
                                    <div className=" flex-1 flex gap-2 border-b pb-5">
                                        <p className=" text-3xl  text-orange-500"><FaLocationDot /></p>
                                        <div>
                                            <p className="text-2xl font-bold">Campout Restort</p>
                                            <p>530 Grove St,</p>
                                            <p>Sonoma, CA 95448</p>
                                        </div>
                                    </div>
                                    <div className=" flex-1 flex gap-2 border-b pb-5">
                                        <p className=" text-3xl text-orange-500"><FiClock /></p>
                                        <div>
                                            <p className="text-2xl font-bold">Office Hours</p>
                                            <p>Mon - Fri: 9:00am - 5:00pm</p>
                                            <p>Sat & Sun: 10:00am - 6:00pm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-5 md:space-y-0 md:flex items-center gap-5">
                                    <div className=" flex-1 flex gap-2 border-b pb-5">
                                        <p className=" text-3xl  text-orange-500"><PhoneIcon /></p>
                                        <div>
                                            <p className="text-2xl font-bold">Main Office</p>
                                            <p>(123) 456.7890</p>
                                        </div>
                                    </div>
                                    <div className=" flex-1 flex gap-2 border-b  pb-5">
                                        <p className=" text-3xl text-orange-500"><MailIcon /></p>
                                        <div>
                                            <p className="text-2xl font-bold">
                                                Email</p>
                                            <p>contact@website.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className=" w-3/4 lg:w-4/5 mx-auto" src="https://i.ibb.co/S0j9stn/the-national-park-service-park-ranger-wearing-a-mask-because-of-the-covid-19-pandemic-cabrillo-t20-r.jpg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="p-4 rounded space-y-10">
                    <h2 className="text-3xl font-bold  text-center text-orange-500">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {teamMembers.map(member => (
                            <div key={member.id} className=" shadow-lg rounded ">
                                <img src={member.image} alt={member.name} className="w-full h-60 object-cover rounded " />
                                <div className=" p-3">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-gray-700 ">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Map Section */}

                {/* Mission Statement Section */}
                <div className="p-4">
                    <h2 className="text-3xl font-bold mb-4 text-center text-orange-500">Our Mission</h2>
                    <p className="text-gray-700">Our mission is to provide the best services and products to our customers while maintaining a commitment to quality and innovation. We strive to make a positive impact on the community and the world.</p>
                </div>

                {/* Team Members Section */}

                <div>
                    <div style={{ backgroundImage: "url(https://i.ibb.co/NC9bwCr/home-2-img1.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-[80vh] object-cover">
                        <div className=" bg-[#140a04] w-full h-full bg-opacity-75 flex flex-col justify-center pl-10 space-y-4">
                            <p className=" text-4xl font-bold text-white">Where will your <br /> journey take you?</p>
                            <p className=" text-white text-xl">Jump into the wild and leave the daily grind behind.</p>
                            <Button className=" bg-orange-500 hover:bg-orange-700 w-44 text-center">View Accommodations</Button>
                        </div>
                    </div>
                    <footer className="bg-[#140a04] p-8 text-center sm:text-left text-white">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center pt-10">
                            {/* Stays Section */}
                            <div className=" border-r border-white ">
                                <h3 className="text-2xl mb-4 font-bold">Stays</h3>
                                <ul className="space-y-5">
                                    <li className="mb-2"><a href="#" className="hover:underline">Vista Cabin</a></li>
                                    <li className="mb-2"><a href="#" className="hover:underline">Tent Sites</a></li>
                                    <li className="mb-2"><a href="#" className="hover:underline">RV Sites</a></li>
                                    <li className="mb-2"><a href="#" className="hover:underline">East Forest</a></li>
                                </ul>
                            </div>

                            {/* Address Section */}
                            <div className=" space-y-4">
                                <h3 className="text-3xl mb-4 font-bold text-orange-500 ">Campout</h3>
                                <p className=" text-xl font-bold">ADDRESS</p>
                                <p>530 Grove St,</p>
                                <p>Sonoma, CA 95448</p>
                                <p className=" text-xl font-bold">PHONE</p>
                                <p>(123) 662-5553</p>
                                <div className=" flex justify-center gap-3">
                                    <span className=" text-orange-500 text-lg hover:text-orange-700" ><FaFacebook /></span>
                                    <span className=" text-orange-500 text-lg hover:text-orange-700" ><FaInstagram /></span>
                                    <span className=" text-orange-500 text-lg hover:text-orange-700" ><FaTwitter /></span>
                                    <span className=" text-orange-500 text-lg hover:text-orange-700" ><FaYoutube /></span>
                                </div>
                            </div>

                            {/* Experiences Section */}
                            <div className=" border-l border-white">
                                <h3 className="text-2xl mb-4 font-bold ">Experiences</h3>
                                <ul className=" space-y-5">
                                    <li className="mb-2"><a href="#" className="hover:underline">Hiking</a></li>
                                    <li className="mb-2"><a href="#" className="hover:underline">Mountain Biking</a></li>
                                    <li className="mb-2"><a href="#" className="hover:underline">Aerial Tours</a></li>
                                    <li className="mb-2"><a href="#" className="hover:underline">Golfing</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className=" text-gray-400 mt-8 text-center">©Copyright Developed by YourCompanyName</p>
                    </footer>
                </div>

            </div>

        </div>
    );
};

export default Aboute;