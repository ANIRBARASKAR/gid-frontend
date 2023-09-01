import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
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
                    <div className="bg-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Your Basket
                                </h3>
                                <button
                                    onClick={onClose}
                                >
                                    <RxCross2 className='text-red-600' size={30} />
                                </button>
                            </div>
                            <div className="mt-2 w-full">
                                {/* All CONTENT WILL BE HERE . */}
                                {/* CART START */}
                                <div className='flex items-center gap-2 bg-white mb-2 p-2'>
                                    <div className="flex gap-2">
                                        <img className="h-16 border border-gray-300" src="https://i.ibb.co/dWLxqTt/10000150-19-fresho-onion.webp" alt="" />
                                        <div className="text-gray-600">
                                            <p className="text-xs">FRESHO</p>
                                            <p className="text-sm font-semibold">
                                                Fresho Tomato - Hybrid 1 kg</p>
                                            <p className="text-xs">1 x 40.15</p>
                                        </div>
                                    </div>
                                    {/* COUNT START */}
                                    <div className='flex gap-2 items-center'>
                                        <p><AiOutlinePlusCircle className='cursor-pointer text-gray-500' size={20} /></p>
                                        <p>1</p>
                                        <p><AiOutlineMinusCircle className='cursor-pointer text-gray-500' size={20} /></p>
                                    </div>
                                    {/* COUNT END */}
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <p className='text-center text-gray-600 text-sm'>Rs 40.15</p>
                                            <p className='text-xs text-[#84C225]'>Saved Rs.14.85</p>
                                        </div>
                                        <p className='text-gray-600 cursor-pointer'><RxCross2 size={20} /></p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 bg-white mb-2 p-2'>
                                    <div className="flex gap-2">
                                        <img className="h-16 border border-gray-300" src="https://i.ibb.co/dWLxqTt/10000150-19-fresho-onion.webp" alt="" />
                                        <div className="text-gray-600">
                                            <p className="text-xs">FRESHO</p>
                                            <p className="text-sm font-semibold">
                                                Fresho Tomato - Hybrid 1 kg</p>
                                            <p className="text-xs">1 x 40.15</p>
                                        </div>
                                    </div>
                                    {/* COUNT START */}
                                    <div className='flex gap-2 items-center'>
                                        <p><AiOutlinePlusCircle className='cursor-pointer text-gray-500' size={20} /></p>
                                        <p>1</p>
                                        <p><AiOutlineMinusCircle className='cursor-pointer text-gray-500' size={20} /></p>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <p className='text-center text-gray-600 text-sm'>Rs 40.15</p>
                                            <p className='text-xs text-[#84C225]'>Saved Rs.14.85</p>
                                        </div>
                                        <p className='text-gray-600 cursor-pointer'><RxCross2 size={20} /></p>
                                    </div>
                                </div>
                                {/* CART END */}

                                {/* SUB TOTAL START */}
                                <div className='flex gap-4 text-sm'>
                                    <div>
                                        <p className='bg-white text-xs px-2'>**Actual Delivery Charges computed at checkout </p>
                                    </div>
                                    <div className='bg-white pt-2'>
                                        <div className='flex items-center gap-2 px-2 '>
                                            <p>Sub Total :</p>
                                            <p>Rs 87.15</p>
                                        </div>
                                        <div className='flex items-center gap-2 px-2 my-1'>
                                            <p>Delivery Charge :</p>
                                            <p>**</p>
                                        </div>
                                        <button className='bg-[#84C225] hover:shadow-lg hover:bg-green-600 px-2 py-1 text-white'>View Basket & Cheakout</button>
                                    </div>
                                </div>
                                {/* SUB TOTAL END */}
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