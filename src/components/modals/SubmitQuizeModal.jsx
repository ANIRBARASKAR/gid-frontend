import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';

const SubmitQuizeModal = ({ onClose }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full lg:max-w-[50%]"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-xl leading-6 font-semibold text-[#001356]" id="modal-headline">
                                    Join Team
                                </h3>
                                <button
                                    onClick={onClose}
                                >
                                    <RxCross2 className='text-red-600' size={30} />
                                </button>
                            </div>
                            <div className="mt-2 w-full">
                                {/* All CONTENT WILL BE HERE . */}
                                <div className='mt-5'>
                                    <form action="">
                                        <div className='flex justify-between items-center gap-8'>
                                            <div className='grid grid-cols-4 gap-4'>
                                                <div className='col-span-3'>
                                                    <label className='text-[#001356] font-medium' htmlFor="team_name">Team Code:</label> <br />
                                                    <input className='outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1 w-full' type="text" id="team_name" name="team_name" required placeholder='Enter Title' /> <br /> <br />
                                                </div>
                                                <div className='col-span-1 mt-6'>
                                                    <button className='text-white bg-[#284B80] px-4 py-1 rounded-md'>Join Team</button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[#001356]'>Your Team code is : <b>abc@123</b></p>
                                            </div>
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