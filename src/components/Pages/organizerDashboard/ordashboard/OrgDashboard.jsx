import Attendess from "./Attendess";
import EventSummery from "./EventSummery";
import Summery from "./Summery";


const OrgDashboard = () => {
    return (
        <div className="lg:pr-6">
            <EventSummery />
            <Summery />
            <Attendess />
        </div>
    );
};

export default OrgDashboard;