import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';
import { BsCheck2Circle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SubmitQuizeModal = ({ onClose }) => {
    const navigate = useNavigate();
    const handleResult = () =>{
        navigate("/result");
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full lg:max-w-[25%]"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className='flex justify-end items-center'>
                                {/* <h3 className="text-xl leading-6 font-semibold text-[#001356]" id="modal-headline">
                                    Join Team
                                </h3> */}
                                <button className='bg-[#001356] rounded-full'
                                    onClick={onClose}
                                >
                                    <RxCross2 className='text-white' size={15} />
                                </button>
                            </div>
                            <div className="mt-2 w-full">
                                {/* All CONTENT WILL BE HERE . */}
                                <div className='mt-5'>
                                    <form action="">
                                        <div>
                                            <div className='flex items-center gap-2'>
                                                <BsCheck2Circle className='text-green-600' size={20} />
                                                <h1 className='text-[#001356] text-[22px] font-medium'>Are You want to submit the Exam ?</h1>
                                            </div>
                                            <p className='text-gray-400 font-medium text-center'>You will not able to recover this exam again !</p>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button onClick={handleResult} className="bg-[#001356] text-white px-4 py-1 rounded-md mt-4" style={{
                                                boxShadow: "0px -4px 4px 0px #000D3D inset"
                                            }}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
SubmitQuizeModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default SubmitQuizeModal;