import { useEffect } from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";

const ProfileMap = () => {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 23.777176;
        const lon = 90.399452;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div className="container mx-auto mt-6">
            <div className="border border-gray-400 p-4 rounded-md">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-[#001356] mb-4">Venue</p>
                    <AiOutlineArrowsAlt size={20} />
                </div>
                <iframe id="iframeId" height="400px" width="100%"></iframe>
            </div>
        </div>
    );
};

export default ProfileMap;