import Attendess from "./Attendess";
import EventSummery from "./EventSummery";
import Summery from "./Summery";


const OrgDashboard = () => {
    return (
        <div>
            <EventSummery />
            <Summery />
            <Attendess />
        </div>
    );
};

export default OrgDashboard;