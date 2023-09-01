import { FiUsers } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import RegisterModal from '../../modals/RegisterModal';
import { useState } from 'react';

const RegisterDetails = () => {
    // Register Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto mt-6">
            <div className="flex justify-center">
                <div className="flex gap-8 items-center">
                    <button onClick={handleModalOpen} className="px-6 py-2 border-2 border-[##284B80] rounded-lg text-xs text-white bg-[#284B80]">Register</button>
                    {isModalOpen && <RegisterModal onClose={handleModalClose} />}
                    <button className="px-6 py-2 border-2 border-[##284B80] rounded-lg text-xs text-white bg-[#284B80]">Join Team</button>
                </div>
            </div>
            <div className='text-[#001356] bg-[#F5F5F5] mt-12 grid grid-cols-2 gap-16 px-4 py-8 rounded-lg'>
                <div>
                    <FiUsers className='mx-auto' size={30} />
                    <div className="font-bold text-lg text-center mt-3">
                        <p>150</p>
                        <p>Registration</p>
                    </div>
                </div>
                <div>
                    <FiUsers className='mx-auto' size={30} />
                    <div className="font-bold text-lg text-center mt-3">
                        <p>3-5</p>
                        <p>Team Size</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F5F5] px-4 py-8 mt-12 rounded-lg'>
                <div className='text-[#001356] grid grid-cols-2 gap-16 rounded-lg'>
                    <div>
                        <AiOutlineCalendar className='mx-auto' size={30} />
                        <div className="font-bold text-lg text-center mt-3">
                            <p>Registartion deadline</p>
                            <p>01/08/2023  </p>
                        </div>
                    </div>
                    <div>
                        <FiUsers className='mx-auto' size={30} />
                        <div className="font-bold text-lg text-center mt-3">
                            <p>Indiavidual participation</p>
                        </div>
                    </div>
                </div>
                <div className='w-16 h-[1px] bg-gray-800 flex mx-auto mt-16'></div>
                <div  className='text-[#001356] ml-10 mt-10'>
                    <BiDollar size={30} />
                    <p className='font-bold text-lg mt-3'>Paid Registration</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterDetails;