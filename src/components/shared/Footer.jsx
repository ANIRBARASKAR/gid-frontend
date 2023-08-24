
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
                    <p className="mt-1 text-white">Subscribe to stay tuned for new web design and latest updates. Lets do it! </p>
                </div>
            </div>
            <div className="w-full h-1 bg-white mt-5"></div>

            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {/* ONE */}
                    <div>
                        <img src="https://i.ibb.co/2hgBK1d/LOGO-PNG-2.png" alt="" />
                        <div className="mt-16">
                            <p className="text-white">Follow us</p>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co/L08BRHF/Vector.png" alt="" />
                                <img src="https://i.ibb.co/5j2Zqhh/Vector-1.png" alt="" />
                                <img src="https://i.ibb.co/gRq5NF2/hh.png" alt="" />
                                <img src="https://i.ibb.co/Y36j9sx/Vector-2.png" alt="" />
                                <img src="https://i.ibb.co/8YfWY2h/Vector-3.png" alt="" />
                                <img src="https://i.ibb.co/KFGs83q/Vector-4.png" alt="" />
                                <img src="https://i.ibb.co/cDcgBs1/instagram.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* TWO */}
                    <div>
                        <p className="text-white font-medium text-lg">Product</p>
                        <div className="w-10 h-1 bg-yellow-600 mt-2"></div>
                        <div className="mt-3 text-white leading-8">
                            <p>Landing Page</p>
                            <p>Popup Builder</p>
                            <p>Web-design</p>
                            <p>Content</p>
                            <p>Integrations</p>
                        </div>
                    </div>
                    {/* THREE */}
                    <div>
                        <p className="text-white font-medium text-lg">Use Cases</p>
                        <div className="w-10 h-1 bg-yellow-600 mt-2"></div>
                        <div className="mt-3 text-white leading-8">
                            <p>Web-designers</p>
                            <p>Marketers</p>
                            <p>Small Business</p>
                            <p>Website Builder</p>
                        </div>
                    </div>
                    {/* FOUR */}
                    <div>
                        <p className="text-white font-medium text-lg">Company</p>
                        <div className="w-10 h-1 bg-yellow-600 mt-2"></div>
                        <div className="mt-3 text-white leading-8">
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>FAQs</p>
                            <p>Teams</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    {/* FIVE */}
                    <div>
                        <p className="text-white font-medium text-lg">Company</p>
                        <div className="w-10 h-1 bg-yellow-600 mt-2"></div>
                        <div className="mt-3 text-white leading-8">
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>FAQs</p>
                            <p>Teams</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <hr />
                    <p className="text-white text-center mt-2">© 2021 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;