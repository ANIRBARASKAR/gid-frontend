import AdmEventSummery from "./AdmEventSummery";
import AdmHomeTable from "./AdmHomeTable";
import AdmSummery from "./AdmSummery";
import OrderSummery from "./OrderSummery";
import UserSummery from "./UserSummery";

const AdmDashboardHome = () => {
    return (
        <div>
            <AdmEventSummery />
            <AdmSummery />
            <OrderSummery />
            {/* Here will be the chart component */}
            <UserSummery />
            <AdmHomeTable />
        </div>
    );
};

export default AdmDashboardHome;