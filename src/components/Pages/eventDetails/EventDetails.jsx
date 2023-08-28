import CourseDetails from "./CourseDetails";
import EventDetailsHeader from "./EventDetailsHeader";
import GuideLines from "./GuideLines";
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
                </div>
                <div className="col-span-1">
                
                </div>
            </div>
        </div>
    );
};

export default EventDetails;