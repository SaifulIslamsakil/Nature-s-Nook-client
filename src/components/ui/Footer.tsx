const Footer = () => {
    
    return (
        <footer className="bg-[#140a04] pt-8 text-gray-200">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">CONTACT</h3>
          <p className="text-sm">Adventure Shop</p>
          <p className="text-sm">Triq Dun Karm, Birkirkara, BKR 4021, Malta, Europe</p>
          <p className="text-sm">+356 2144 3386</p>
          <p className="text-2xl font-bold mt-3">Nature's <span className=" text-orange-500">Nooks</span></p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">OPENING HOURS</h3>
          <p className="text-sm">Mon - Fri: 9:30 AM - 7:00 PM</p>
          <p className="text-sm">Saturday: 9:30 AM - 1:00 PM</p>
          <p className="text-sm">Sunday: CLOSED</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 text-gray-200">
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul className="list-none space-y-2">
            <li className="text-sm"><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li className="text-sm"><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            <li className="text-sm"><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
            <li className="text-sm"><a href="#" className="hover:text-orange-500">Refund Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
          <p className="text-sm">Sign up for exclusive offers, original stories, events and more.</p>
          <div className=" space-y-3 md:space-y-0 md:flex space-x-2 my-2 ">
            <input type="email" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1" placeholder="Your email" />
            <button className="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-700 ">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="text-center p-2 text-sm">
        © 2024 Adventure Shop
      </div>
    </footer>
    );
};

export default Footer;