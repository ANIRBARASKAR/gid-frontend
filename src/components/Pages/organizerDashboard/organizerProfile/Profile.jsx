import MyProfile from "./MyProfile";
import PastEvent from "./PastEvent";
import ProfileMap from "./ProfileMap";

const Profile = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <MyProfile />
            <PastEvent />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <ProfileMap />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Profile;