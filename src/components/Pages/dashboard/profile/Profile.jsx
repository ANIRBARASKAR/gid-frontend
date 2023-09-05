import { useNavigate } from "react-router-dom";

const Profile = () => {

const navigative = useNavigate();
const handleNavigate = () => {
    navigative("/edit-profile");
}

    return (
        <div>
            <h1 className="text-[#001356] text-[26px] font-semibold">My Profile</h1>
            <div className="bg-white lg:p-6 grid-cols-1 grid md:grid-cols-2 mt-8 rounded-lg mx-6" style={{
                boxShadow: "0px 4px 10px 0px #0000001A"
            }}>
                <div className="text-[14px] text-[#001356] font-medium">
                    <img className="" src="https://i.ibb.co/j4HRznb/Ellipse-1501.png" alt="" />
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <img src="https://i.ibb.co/FmCDcQZ/Vector-1.png" alt="" />
                            <p>+1012 3456 789</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img src="https://i.ibb.co/hCMnJS8/Vector-2.png" alt="" />
                            <p>demo@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img src="https://i.ibb.co/LpZck64/check-circle.png" alt="" />
                            <p>33 Following</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img src="https://i.ibb.co/zbk0kPn/coffee.png" alt="" />
                            <p>13 event attended</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img src="https://i.ibb.co/Gpfn6PH/shield.png" alt="" />
                            <p>Organization Name</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img src="https://i.ibb.co/1ZyLZ5z/gift.png" alt="" />
                            <p>Member since 23/01/2021</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img src="https://i.ibb.co/nMrmXZ3/home.png" alt="" />
                            <p>London, England</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-[#001356] text-xl font-medium">Username</h1>
                    <p className="text-gray-500">xyz@gmail.com</p>
                    <div className="mt-1">
                        <p className="text-[#001356] font-semibold text-base">About</p>
                        <p className="text-gray-500 text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur. Morbi gravida dui amet blandit aliquet euismod in ridiculus. Fermentum scelerisque amet cursus massa morbi venenatis. Amet f</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[#001356] font-semibold text-base">Personal information</p>
                        <div className="text-gray-500 text-sm">
                            User Type : College Student
                            <p>Qualification : BCA (3rd Year)</p>
                            <p>Fisrt Name : xyz</p>
                            <p>Last Name : xyz</p>
                            <p>Date of Birth :01/010/1999</p>
                            <p>Address : xyz</p>
                            <p>Last Login : 20 minutes Ago</p>
                        </div>
                    </div>
                    <button onClick={handleNavigate} className="bg-[#001356] text-white px-6 py-2 mt-3 rounded-lg" style={{
                        boxShadow: "0px -4px 4px 0px #000D3D inset"
                    }}>Edit profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;