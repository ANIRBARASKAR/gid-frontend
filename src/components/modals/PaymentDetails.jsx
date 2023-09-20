import { RxCross2 } from "react-icons/rx";
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const PaymentDetails = ({ onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can handle the form submission logic here
    };
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto mt-24">
            <div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-[40%] sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className='flex justify-end'>
                                <button
                                    onClick={onClose}
                                >
                                    <RxCross2 className='text-red-600' size={30} />
                                </button>
                            </div>
                            <h3 className="text-[20px] text-center leading-6 font-bold text-[#001356]" id="modal-headline">
                                Payment details
                            </h3>

                            <div className="mt-2 w-full">
                                {/* All CONTENT WILL BE HERE . */}
                                <div className='mt-5'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-4">
                                            <label htmlFor="fullName" className="text-[#001356] font-medium">Full Name</label>
                                            <input {...register('fullName')} type="text" id="fullName"
                                                className="py-1 w-full border border-gray-400 rounded-md"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="mb-6">
                                                <label htmlFor="firstName" className="text-[#001356] font-medium" >First Name</label>
                                                <input {...register('firstName')} type="text" id="firstName"
                                                    className="py-1 w-full border border-gray-400 rounded-md"
                                                />
                                            </div>

                                            <div className="mb-6">
                                                <label htmlFor="lastName" className="text-[#001356] font-medium" >Last Name</label>
                                                <input {...register('lastName')} type="text" id="lastName"
                                                    className="py-1 w-full border border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="email" className="text-[#001356] font-medium" >Email</label>
                                            <input {...register('email')} type="email" id="email"
                                                className="py-1 w-full border border-gray-400 rounded-md"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="phone" className="text-[#001356] font-medium" >Phone No</label>
                                            <input {...register('phone')} type="tel" id="phone"
                                                className="py-1 w-full border border-gray-400 rounded-md"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="date" className="text-[#001356] font-medium" >Date</label>
                                                <input {...register('date')} type="date" id="date"
                                                    className="py-1 w-full border border-gray-400 rounded-md"
                                                />
                                            </div>

                                            <div className="mb-6">
                                                <label htmlFor="postalCode" className="text-[#001356] font-medium" >Postal Code</label>
                                                <input {...register('postalCode')} type="text" id="postalCode"
                                                    className="py-1 w-full border border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="grid grid-cols-2 gap-4 text-[#001356] font-bold text-sm mb-4">
                                                <p>Subtotal</p>
                                                <p className="md:flex justify-end">$165</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-[#001356] font-bold text-sm mb-4">
                                                <p>Fee</p>
                                                <p className="md:flex justify-end">$9</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-[#001356] font-bold text-sm mb-4 mt-8">
                                                <p>Total Amount</p>
                                                <p className="md:flex justify-end">$174</p>
                                            </div>
                                        </div>

                                        <button type="submit" className="w-full py-2 text-center text-white bg-[#001356] rounded-md mb-4 mt-3">Continue to payment</button>
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
PaymentDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default PaymentDetails;