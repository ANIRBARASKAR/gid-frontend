
const MyProfile = () => {
    return (
        <div>
            <div className="mt-5 flex items-center gap-2 mx-4 md:mx-0">
                <h1 className="text-[#001356] text-[26px] font-semibold">My Profile</h1>
                <img src="https://i.ibb.co/6vJ6BsP/Account.png" alt="" />
            </div>
            {/* PROFILE */}
            <div className="mt-8 grid grid-cols-2">
                <div>
                    <div className="flex gap-4">
                        <img src="https://i.ibb.co/L9JXGRr/Ellipse-6.png" alt="" />
                        <div>
                            <h1 className="text-[30px] font-bold text-[#001356]">Organization Name</h1>
                            <p className="text-sm text-gray-500">www.abc.com</p>
                        </div>
                    </div>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi eu augue luctus sagittis. Nulla facilisi. Nunc luctus, ex in faucibus cursus, turpis est eleifend lorem, sit amet eleifend dui libero.</p>
                </div>
                <div>
                    <div className="flex justify-end">
                        <img src="https://i.ibb.co/1G4VYML/Rectangle-2.png" alt="" />
                    </div>
                    <img className="mt-[-380px] ml-[50px]" src="https://i.ibb.co/yh75v2P/Rectangle-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;