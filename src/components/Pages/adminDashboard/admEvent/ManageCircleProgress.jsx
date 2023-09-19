import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ManageCircleProgress = () => {
    const percentage = 75
    return (
        <div className="flex items-center gap-4">
            <div className="progress-container" style={{ width: 40, height: 40 }}>
                <div className="progress">
                    <CircularProgressbar
                        className="custom-progress"
                        value={70}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: '#001356',
                            textColor: '#000',
                            trailColor: '#ADADAD',
                        })}
                    />
                </div>
            </div>
            <div className="percentage-label">
                <p className="text-lg font-semibold text-[#001356]">{percentage}%</p>
            </div>
        </div>
    );
};

export default ManageCircleProgress;