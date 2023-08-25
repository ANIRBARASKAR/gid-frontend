import Competition from "./Competition";
import CulturalEvent from "./CulturalEvent";
import EventHeader from "./EventHeader";
import Festival from "./Festival";
import Seminar from "./Seminar";

const Events = () => {
    return (
        <div>
            <EventHeader />
            <Competition />
            <Festival />
            <Seminar />
            <CulturalEvent />
        </div>
    );
};

export default Events;