
const HowToParticipate = () => {
    return (
        <div className="container mx-auto bg-[#E9F2FF] shadow-2xl mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
                <div>
                    <img src="https://i.ibb.co/1n0nhN5/Image.png" alt="" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-2xl font-bold mb-4 text-[#001356]">How to Participate ?</h1>
                        </div>
                        <div className="flex gap-2 font-semibold">
                            <div><button className="bg-[#001356] text-white px-4 py-1 rounded-full text-sm">organizer</button></div>
                            <div><button>student</button></div>
                        </div>
                    </div>
                    <div className="w-full h-[1.5px] bg-gray-300 mt-4"></div>
                    <div className="mt-3 text-[#284B80]">
                        <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi eu augue luctus sagittis. Nulla facilisi. Nunc luctus, ex in faucibus cursus, turpis est eleifend lorem, sit amet eleifend dui libero nec felis. Pellentesque volutpat erat ac libero tincidunt, et efficitur purus efficitur. Duis gravida diam eget nisi sollicitudin, eu luctus nulla egestas.
                        </p>

                        <p className="mb-3">Curabitur eget mauris in quam pellentesque placerat. Suspendisse eget felis sit amet libero dictum malesuada vel eget ipsum. Maecenas ac neque odio.
                            Nulla facilisi. Nam eget ultricies tellus. Proin et efficitur libero.</p>

                        <p>Sed mollis eget odio in ultrices. Curabitur in mauris eu elit volutpat euismod. Suspendisse eget felis ac nibh semper scelerisque ac ut libero. Suspendisse in elit eget tortor hendrerit elementum in vel dui. Nullam eu elit nec tortor volutpat congue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToParticipate;