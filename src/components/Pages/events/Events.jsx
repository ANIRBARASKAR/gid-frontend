import Competition from "./Competition";
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
        </div>
    );
};

export default Events;