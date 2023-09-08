import ProgressBar from "@ramonak/react-progress-bar";
const LineProgress = () => {
    const completed = 80;
    
    return (
        <div>
            <div className="">
                {completed}%
            </div>
            <ProgressBar className="w-[100%]  h-10" completed={80}  />
        </div>
    );
};

export default LineProgress;