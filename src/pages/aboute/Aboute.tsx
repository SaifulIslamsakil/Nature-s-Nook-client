import { MailIcon, PhoneIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Aboute = () => {
    const teamMembers = [
        // Sample team members
        { id: 1, name: 'Alice Johnson', role: 'CEO', image: 'https://via.placeholder.com/150', bio: 'Alice is the CEO and founder of the company.' },
        { id: 2, name: 'Bob Smith', role: 'CTO', image: 'https://via.placeholder.com/150', bio: 'Bob is the CTO and leads the technology team.' },
        { id: 3, name: 'Carol White', role: 'CFO', image: 'https://via.placeholder.com/150', bio: 'Carol manages the financial operations of the company.' },
      ];
    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>

                {/* Contact Information Section */}
                <div className="bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="flex items-center mb-2">
                        <PhoneIcon className="h-6 w-6 text-gray-700 mr-2" />
                        <span>+1 234 567 890</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <MailIcon className="h-6 w-6 text-gray-700 mr-2" />
                        <span>info@company.com</span>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* < className="h-6 w-6 text-gray-700 mr-2" /> */}
                        <span>123 Main Street, Anytown, USA</span>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <div className="h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093713!2d144.95373531531682!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e28b410bf381!2sRialto%20Towers!5e0!3m2!1sen!2sau!4v1610515824703!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="rounded"
                        ></iframe>
                    </div>
                </div>

                {/* Social Media Links Section */}
                <div className="bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-blue-600"><FaFacebook size={30} /></a>
                        <a href="https://twitter.com" className="text-blue-400"><FaTwitter size={30} /></a>
                        <a href="https://instagram.com" className="text-pink-600"><FaInstagram size={30} /></a>
                    </div>
                </div>

                {/* Mission Statement Section */}
                <div className="bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700">Our mission is to provide the best services and products to our customers while maintaining a commitment to quality and innovation. We strive to make a positive impact on the community and the world.</p>
                </div>

                {/* Team Members Section */}
                <div className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {teamMembers.map(member => (
                            <div key={member.id} className="bg-gray-100 p-4 rounded shadow">
                                <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded mb-4" />
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-700 mb-2">{member.role}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboute;