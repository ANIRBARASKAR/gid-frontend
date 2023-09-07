import { useEffect } from "react";

const ProfileMap = () => {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 23.777176;
        const lon = 90.399452;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div className="container mx-auto mt-6">
            <div className="border border-gray-400 p-4">
                <p className="font-bold text-[#001356] mb-4">Venue</p>
                <iframe id="iframeId" height="400px" width="100%"></iframe>
            </div>
        </div>
    );
};

export default ProfileMap;