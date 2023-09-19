import ProgressBar from "@ramonak/react-progress-bar";

const ManageLineProgress = () => {
    const completed = 46;
    return (
        <div>
            <div className="flex justify-between  text-[#001356] font-medium">
                {completed}%
                <p className="text-xs">105 participation</p>
            </div>
            <ProgressBar className="w-[100%]" completed={46} />
        </div>
    );
};

export default ManageLineProgress;