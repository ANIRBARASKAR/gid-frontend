import { FaYoutube } from "react-icons/fa";

const Videos = () => {
    return (
        <div className="border border-gray-600 rounded-lg mt-5 p-4">
            <p className="font-semibold text-xl text-[#001356]   ">Videos</p>
            <div className="mt-5">
                <div className="flex gap-4">
                    <img src="https://i.ibb.co/s5m640d/image-53.png" alt="" />
                    <div>
                        <p className="text-base font-bold">How to plan an Event</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi eu augue luctus sagittis.</p>
                        <button className="text-sm flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-lg mt-8">
                            Watch on
                            <FaYoutube className="text-red-600" />
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <img src="https://i.ibb.co/s5m640d/image-53.png" alt="" />
                    <div>
                        <p className="text-base font-bold">How to plan an Event</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi eu augue luctus sagittis.</p>
                        <button className="text-sm flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-lg mt-8">
                            Watch on
                            <FaYoutube className="text-red-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;