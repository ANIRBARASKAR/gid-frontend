import MyProfile from "./MyProfile";
import PastEvent from "./PastEvent";
import ProfileMap from "./ProfileMap";
import ProfileRatings from "./ProfileRatings";
import ProfileReviews from "./ProfileReviews";
import Videos from "./Videos";

const Profile = () => {
    return (
        <div className="mt-5 lg:ml-[300px] lg:pr-6">
            <MyProfile />
            <PastEvent />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="col-span-3">
                    <ProfileMap />
                    <Videos />
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