import CourseDetails from "./CourseDetails";
import EventDetailsHeader from "./EventDetailsHeader";
import GuideLines from "./GuideLines";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import Reward from "./Reward";

const EventDetails = () => {
    return (
        <div>
            <EventDetailsHeader />
            <div className="grid grid-cols-4 gap-16 container mx-auto">
                <div className="col-span-3">
                    <CourseDetails />
                    <GuideLines />
                    <Reward />
                    <Ratings />
                    <Reviews />
                </div>
                <div className="col-span-1">
                
                </div>
            </div>
        </div>
    );
};

export default EventDetails;