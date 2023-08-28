import CourseDetails from "./CourseDetails";
import EventDetailsHeader from "./EventDetailsHeader";
import EventGallery from "./EventGallery";
import GuideLines from "./GuideLines";
import Ratings from "./Ratings";
import RegisterDetails from "./RegisterDetails";
import Reviews from "./Reviews";
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
                    <Reviews />
                </div>
                <div className="col-span-1">
                    <RegisterDetails />
                    <EventGallery />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;