import { useForm } from 'react-hook-form';
import { FaPhoneVolume, FaDiscord } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const Contacts = () => {
    const { register, handleSubmit, formState } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto mt-5">
            <div className='grid grid-cols-1 md:grid-cols-2 bg-white p-2 shadow-2xl rounded-lg'>
                {/* Contact Info */}
                <div className='bg-[#001356] text-white pt-8'>
                    <div className='px-8'>
                        <h1 className='text-3xl font-bold'>Contact Information</h1>
                        <p className='text-xl mt-4'>Say something to start a live chat!</p>
                    </div>
                    <div className='mt-20'>
                        <div className='px-8'>
                            <div className="flex items-center gap-2 text-lg mt-2">
                                <FaPhoneVolume size={25} />
                                <p>+1012 3456 789</p>
                            </div>
                            <div className="flex items-center gap-2 text-lg mt-10">
                                <MdEmail size={25} />
                                <p>demo@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2 text-lg mt-10">
                                <MdLocationOn size={25} />
                                <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>
                        </div>
                        <div className='mt-16 flex justify-between items-center'>
                            <div className="text-white flex items-center gap-8 mt-5 pl-8">
                                <div className="bg-[#C8CDF9] p-2 rounded-full">
                                    <BsTwitter size={15} />
                                </div>
                                <div className="bg-white text-[#001356] p-2 rounded-full">
                                    <BsInstagram size={15} />
                                </div>
                                <div className="bg-[#C8CDF9] p-2 rounded-full">
                                    <FaDiscord size={15} />
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div>
                                    <img className='relative' src="https://i.ibb.co/Cvvkc0J/Ellipse-793.png" alt="" />
                                    <img className='absolute mt-[-200px] ml-[-30px]' src="https://i.ibb.co/gP3g2FL/Ellipse-794.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className='py-8 px-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-12'>
                            <div>
                                <label className='font-medium text-[#001356]' htmlFor="firstName">First Name</label>
                                <div>
                                    <input
                                        className='outline-none border-b border-gray-500 w-full'
                                        type="text"
                                        id="firstName"
                                        {...register('firstName', { required: true })}
                                    />
                                    {formState.errors.firstName && (
                                        <p className="error">First name is required</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className='font-medium text-[#001356]' htmlFor="lastName">Last Name</label>
                                <div>
                                    <input
                                        className='outline-none border-b border-gray-500 w-full'
                                        type="text"
                                        id="lastName"
                                        {...register('lastName', { required: true })}
                                    />
                                    {formState.errors.lastName && (
                                        <p className="error">Last name is required</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-12 mt-16'>
                            <div>
                                <label className='font-medium text-[#001356]' htmlFor="email">Email</label>
                                <div>
                                    <input
                                        className='outline-none border-b border-gray-500 w-full'
                                        type="email"
                                        id="email"
                                        {...register('email', { required: true })}
                                    />
                                    {formState.errors.email && <p className="error">Email is required</p>}
                                </div>
                            </div>

                            <div>
                                <label className='font-medium text-[#001356]' htmlFor="phone">Phone Number</label>
                                <div>
                                    <input
                                        className='outline-none border-b border-gray-500 w-full'
                                        type="tel"
                                        id="phone"
                                        {...register('phone', { required: true })}
                                    />
                                    {formState.errors.phone && (
                                        <p className="error">Phone number is required</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <p className='font-bold text-base text-[#001356]'>Selected Subject ?</p>
                            <div className='flex gap-8 mt-5'>
                                <label>
                                    <input
                                        type="radio"
                                        value="General Inquiry"
                                        {...register('inquiryType', { required: true })}
                                    />
                                    General Inquiry
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Technical Support"
                                        {...register('inquiryType', { required: true })}
                                    />
                                    General Inquiry
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Feedback"
                                        {...register('inquiryType', { required: true })}
                                    />
                                    General Inquiry
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Feedback"
                                        {...register('inquiryType', { required: true })}
                                    />
                                    General Inquiry
                                </label>
                                {formState.errors.inquiryType && (
                                    <p className="error">Inquiry type is required</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-4 mt-8">
                            <label className='font-semibold text-gray-400 ml-2' htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                {...register('message', { required: true })}
                                className="block w-full border-b-2 border-gray-300 outline-none p-2"
                                placeholder='write your message here'
                            />
                        </div>

                        <div className='flex justify-end mt-5'>
                            <button className='bg-[#001356] px-8 py-4 rounded-lg text-white' type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;