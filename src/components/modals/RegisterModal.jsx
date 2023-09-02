import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';

const RegisterModal = ({ onClose }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto mt-24">
            <div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-[95%] sm:max-w-lg sm:w-full"
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
                                        <input className='w-[48%] outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="text" id="team_name" name="team_name" required placeholder='Enter Title' /> <br /> <br />

                                        <h3 className="text-xl leading-6 font-semibold text-[#001356]" id="modal-headline">
                                            Register Your Team
                                        </h3>
                                        <div className='mt-5'>
                                            <div className='grid grid-cols-2 gap-8'>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="name">Name:</label><br />
                                                    <input className='w-full outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="text" id="name" name="name" required placeholder='Enter title' /><br /><br />
                                                </div>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="email">Email:</label><br />
                                                    <input className='w-full outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="email" id="email" name="email" required placeholder='Enter Your Email' /><br /><br />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-2 gap-8'>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="mobile">Mobile No:</label><br />
                                                    <input className='w-full outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="tel" id="mobile" name="mobile" required placeholder='+91' /><br /><br />
                                                </div>
                                                <div>
                                                    <label className='text-[#001356] font-medium' htmlFor="organization">Organization:</label><br />
                                                    <input className='w-full outline-none border-2 border-[#93A5BF] rounded-md px-2 py-1' type="text" id="organization" name="organization" required placeholder='Enter Organization Name' /><br /><br />
                                                </div>
                                            </div>
                                            {/* Gender */}
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
                                            {/* Qualification Type */}
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
                                            <div className='mt-4 border border-[#001356] rounded-md lg:w-[60%]'>
                                                <div className='px-2'>
                                                    <p className='text-[#001356] text-lg'>Select school student</p>
                                                    <div className='grid grid-cols-7 gap-4 mt-1 pb-2 text-sm'>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>1st</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2nd</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>3rd</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>4th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>5th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>6th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>7th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>8th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>9th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>10th</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>11th com.</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>12th com.</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>11th sci</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>12th sci</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-4 border border-[#001356] rounded-md lg:w-[60%]'>
                                                <div className='px-2'>
                                                    <p className='text-[#001356] text-lg'>Select college student</p>
                                                    <div className='grid grid-cols-5 gap-4 mt-1 pb-2 text-sm'>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Management</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Science & technology</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Diploma</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Computer Application</p>
                                                        <p className='px-4 py-1 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Science & Arts</p>
                                                    </div>
                                                    <div className='flex items-center gap-4 mt-2'>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Computer</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Electrical</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Civil</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>Mechanical</p>
                                                    </div>
                                                    <div className='flex items-center gap-4 my-3'>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2023</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2024</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2025</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2026</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2027</p>
                                                        <p className='px-4 text-center bg-[#E7E7E7] text-gray-500 rounded-md'>2028</p>
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