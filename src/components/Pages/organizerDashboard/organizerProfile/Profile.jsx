import MyProfile from "./MyProfile";
import PastEvent from "./PastEvent";
import ProfileMap from "./ProfileMap";
import ProfileRatings from "./ProfileRatings";
import ProfileReviews from "./ProfileReviews";

const Profile = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <MyProfile />
            <PastEvent />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="col-span-3">
                    <ProfileMap />
                </div>
                <div className="col-span-1">
                    <ProfileRatings />
                    <ProfileReviews />
                </div>
            </div>
        </div>
    );
};

export default Profile;