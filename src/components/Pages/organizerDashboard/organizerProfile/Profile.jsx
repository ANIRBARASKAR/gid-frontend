import MyProfile from "./MyProfile";
import PastEvent from "./PastEvent";

const Profile = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <MyProfile />
            <PastEvent />
        </div>
    );
};

export default Profile;