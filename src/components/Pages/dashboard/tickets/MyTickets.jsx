const tickets = [
    {
        id: "1",
        img: "https://i.ibb.co/VJzsWtZ/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
        ref: "7c5dds52c7",
        orderDate: "Thu 15 jun 2021, 8:35 pm",
        status: "paid"
    },
    {
        id: "1",
        img: "https://i.ibb.co/VJzsWtZ/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
        ref: "7c5dds52c7",
        orderDate: "Thu 15 jun 2021, 8:35 pm",
        status: "paid"
    },
    {
        id: "1",
        img: "https://i.ibb.co/VJzsWtZ/image-47.png",
        title: "DEVOPS TRANNING & COURSE",
        des: "Oxford University campus",
        date: "01/08/2023  Thursday 02:00 pm",
        ref: "7c5dds52c7",
        orderDate: "Thu 15 jun 2021, 8:35 pm",
        status: "paid"
    }
]

const MyTickets = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className="lg:mt-16">
                <div className="mt-5 flex items-center gap-2">
                    <h1 className="text-[#001356] text-[26px] font-semibold">My Tickets</h1>
                    <img className="w-[35px] h-[35px]" src="https://i.ibb.co/vmB6SLV/clipboard-tick-1.png" alt="" />
                </div>
                <div>
                    {
                        tickets.map(item => (
                            <>
                                <div className="mt-8 bg-white rounded-lg mb-5" style={{
                                    boxShadow: "0px 4px 10px 0px #0000001A"
                                }}>
                                    <div className="md:flex items-center justify-between gap-4">
                                        <div className="p-4 rounded-xl flex gap-8">
                                            <div>
                                                <img className=" " src={item.img} alt="" />
                                                <div className="flex justify-end">
                                                    <small className="text-[#284B80] px-4 rounded-xl py-2 bg-white shadow-lg mt-[-20px] mr-8 font-semibold">20$</small>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-[#284B80] text-xl font-medium">{item.title}</h4>
                                                <div className="text-[#666666] text-base mt-1">
                                                    <p>{item.des}</p>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 md:px-0">
                                            <p className="text-xl font-medium text-[#001356]">1 ticket</p>
                                            <div className="textsm text-[#001356]">
                                                <div className="flex items-center gap-12">
                                                    <p>reference :</p>
                                                    <p>{item.ref}</p>
                                                </div>
                                                <div className="flex items-center gap-10">
                                                    <p>order date :</p>
                                                    <p>{item.orderDate}</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <p>payment status :</p>
                                                    <p>{item.status}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="mt-3 pr-6 flex justify-center pb-2">
                                            <button className="bg-[#284B80] px-4 py-1 text-white rounded-lg">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTickets;