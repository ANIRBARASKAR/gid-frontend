import CourseDetails from "./CourseDetails";
import EventDetailsHeader from "./EventDetailsHeader";
import GuideLines from "./GuideLines";

const EventDetails = () => {
    return (
        <div>
            <EventDetailsHeader />
            <div className="grid grid-cols-4 gap-16 container mx-auto">
                <div className="col-span-3">
                    <CourseDetails />
                    <GuideLines />
                </div>
                <div className="col-span-1">
                
                </div>
            </div>
        </div>
    );
};

export default EventDetails;