import Attendess from "./Attendess";
// import DashboardChart from "./DashboardChart";
import EventSummery from "./EventSummery";
import Summery from "./Summery";


const OrgDashboard = () => {
    return (
        <div className="lg:pr-6">
            <EventSummery />
            <Summery />
            <Attendess />
            {/* <DashboardChart /> */}
        </div>
    );
};

export default OrgDashboard;