
const EventGallery = () => {
    return (
        <div className="container mx-auto mt-10">
            <div>
                <div className="font-bold text-[#001356] border border-gray-400 p-4">
                    <p>Event Galllery</p>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <img src="https://i.ibb.co/jJNdy4n/image-54.png" alt="" />
                        <img src="https://i.ibb.co/d2kcPzg/image-55.png" alt="" />
                        <img src="https://i.ibb.co/jJNdy4n/image-54.png" alt="" />
                        <img src="https://i.ibb.co/d2kcPzg/image-55.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div>
                    <img className="relative w-[124px] h-[119px] md:h-[239px] md:w-[249px]" src="https://i.ibb.co/ns2KKTP/Rectangle-1783.png" alt="" />
                    <span className="absolute text-white ml-[80px] mt-[-110px]">ADVERTISE 1</span>
                </div>
            </div>
        </div>
    );
};

export default EventGallery;