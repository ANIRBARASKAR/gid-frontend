import CourseDetails from "./CourseDetails";
import EventDetailsHeader from "./EventDetailsHeader";
import EventGallery from "./EventGallery";
// import GoogleMap from "./GoogleMap";
import GuideLines from "./GuideLines";
import Ratings from "./Ratings";
import RegisterDetails from "./RegisterDetails";
import Reward from "./Reward";

const EventDetails = () => {
    return (
        <div>
            <EventDetailsHeader />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 container mx-auto mt-8">
                <div className="col-span-3">
                    <CourseDetails />
                    <GuideLines />
                    <Reward />
                    <Ratings />
                </div>
                <div className="col-span-1">
                    <RegisterDetails />
                    {/* <GoogleMap /> */}
                    <EventGallery />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;