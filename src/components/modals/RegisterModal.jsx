import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';

const RegisterModal = ({ onClose }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-xl leading-6 font-semibold text-[#001356]" id="modal-headline">
                                    Register Your Team
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
                                        <label className='text-[#001356] font-medium' htmlFor="team_name">Team Name:</label> <br />
                                        <input className='outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="text" id="team_name" name="team_name" required placeholder='Enter Title' /> <br /> <br />

                                        <h3 className="text-xl leading-6 font-semibold text-[#001356]" id="modal-headline">
                                            Register Your Team
                                        </h3>
                                        <div className='mt-5'>
                                            <div className='flex items-center gap-6'>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="name">Name:</label><br />
                                                    <input className='outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="text" id="name" name="name" required placeholder='Enter title' /><br /><br />
                                                </div>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="email">Email:</label><br />
                                                    <input className='outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="email" id="email" name="email" required placeholder='Enter Your Email' /><br /><br />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-6'>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="mobile">Mobile No:</label><br />
                                                    <input className='outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="tel" id="mobile" name="mobile" required placeholder='+91' /><br /><br />
                                                </div>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="organization">Organization:</label><br />
                                                    <input className='outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="text" id="organization" name="organization" required placeholder='Enter Organization Name' /><br /><br />
                                                </div>
                                            </div>
                                            <div>
                                                <label className='text-[#001356] font-medium'>Gender</label><br />
                                                <div className='flex items-center gap-4 mt-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <input type="radio" id="male" name="gender" value="male" required />
                                                        <label htmlFor="male">Male</label><br />
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input type="radio" id="female" name="gender" value="female" required />
                                                        <label htmlFor="female">Female</label><br />
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input type="radio" id="others" name="gender" value="others" required />
                                                        <label htmlFor="female">Others</label><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <label className='text-[#001356] font-medium'>Qualification Type</label><br />
                                                <div className='flex items-center gap-4 mt-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <input type="radio" id="male" name="gender" value="male" required />
                                                        <label htmlFor="male">Male</label><br />
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input type="radio" id="female" name="gender" value="female" required />
                                                        <label htmlFor="female">Female</label><br />
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input type="radio" id="others" name="gender" value="others" required />
                                                        <label htmlFor="female">Others</label><br />
                                                    </div>
                                                </div>
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
RegisterModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
export default RegisterModal;