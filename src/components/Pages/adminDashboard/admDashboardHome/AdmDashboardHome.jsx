import AdmEventSummery from "./AdmEventSummery";
import AdmSummery from "./AdmSummery";

const AdmDashboardHome = () => {
    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <AdmEventSummery />
            <AdmSummery />
        </div>
    );
};

export default AdmDashboardHome;