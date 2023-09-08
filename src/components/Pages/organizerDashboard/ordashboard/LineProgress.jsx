import ProgressBar from "@ramonak/react-progress-bar";
const LineProgress = () => {
    const completed = 80;
    
    return (
        <div>
            <div className="flex justify-between  text-[#001356] font-medium">
                {completed}%
                <p className="text-xs">105 participation</p>
            </div>
            <ProgressBar className="w-[100%]" completed={80}  />
        </div>
    );
};

export default LineProgress;