import AddGroupEvent from "./groupEventCreate/AddGroupEvent";
import GroupEventTable from "./groupEventCreate/GroupEventTable";

const GroupEventDetails = () => {
    
    return (
        <div className="mt-5 lg:ml-[300px] lg:pr-6">
            <AddGroupEvent />
            <GroupEventTable />
        </div>
    );
};

export default GroupEventDetails;