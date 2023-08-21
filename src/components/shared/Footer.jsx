const Footer = () => {
    return (
        <div className="bg-[#001356] mt-8 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 pt-4">
                <div className="md:col-span-1 mx-2 md:mx-0">
                    <h3 className="font-semibold text-3xl text-white">Subscribe</h3>
                </div>
                <div className="md:col-span-2 mx-2 md:mx-0">
                    <input className="w-full relative px-4 py-3" type="email" name="" id="" placeholder="Enter Your Email Address" />
                    <button className="bg-[#001356] text-white absolute ml-[-125px] mt-2 px-6 py-1">subscribe</button>
                    <p className="mt-1 text-white">Subscribe to stay tuned for new web design and latest updates. Let's do it! </p>
                </div>
            </div>
            <div className="w-full h-1 bg-white mt-5"></div>

            <div>
                
            </div>
        </div>
    );
};

export default Footer;