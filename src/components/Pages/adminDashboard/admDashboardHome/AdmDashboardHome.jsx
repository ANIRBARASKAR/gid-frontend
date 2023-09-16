import AdmEventSummery from "./AdmEventSummery";
import AdmSummery from "./AdmSummery";
import OrderSummery from "./OrderSummery";

const AdmDashboardHome = () => {
    return (
        <div className="lg:ml-[300px] lg:pr-6">
            <AdmEventSummery />
            <AdmSummery />
            <OrderSummery />
            {/* Here will be the chart component */}
        </div>
    );
};

export default AdmDashboardHome;