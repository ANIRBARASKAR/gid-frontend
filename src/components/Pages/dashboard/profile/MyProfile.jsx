import Profile from "./Profile";
import ProfileReviews from "./ProfileReviews";
import RecentEvents from "./RecentEvents";

const MyProfile = () => {
    return (
        <div className="mt-5 lg:ml-[300px]">
            <div className="grid lg:grid-cols-2 md:gap-4 lg:gap-12">
                <div>
                    <Profile />
                </div>
                <div>
                    <ProfileReviews />
                </div>
            </div>
            <RecentEvents />
        </div>
    );
};

export default MyProfile;