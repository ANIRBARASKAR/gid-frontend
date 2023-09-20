import { useState } from "react";
import SubmitQuizeModal from "../../modals/SubmitQuizeModal";


const Quizes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuizeModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleQuizeClose = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="bg-[#284B80] py-4">
                <div className="container mx-auto text-white font-medium flex justify-between">
                    <p className="text-[22px]">Round 1 Quiz</p>
                    <p className="text-[20px]">Time -  00:03:26 </p>
                </div>
            </div>
            <div className="container mx-auto mt-8 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-3">
                        <div className="flex gap-4 font-medium">
                            <p>1</p>
                            <p className="text-[18px] text-[#284B80]">Lorem ipsum dolor sit amet consectetur. At feugiat duis facilisis leo ut dis id.Lorem ipsum dolor sit amet consectetur. At feugiat duis facilisis leo ut dis id.</p>
                        </div>
                        <div className="text-[18px] ml-8 mt-5">
                            <div className="flex items-center gap-2 mb-2">
                                <input className="cursor-pointer" type="radio" name="" id="" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <input className="cursor-pointer" type="radio" name="" id="" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <input className="cursor-pointer" type="radio" name="" id="" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <input className="cursor-pointer" type="radio" name="" id="" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <input className="cursor-pointer" type="radio" name="" id="" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-8 font-medium">
                            <button className="text-[#284B80] px-2 py-1 text-sm border border-[#284B80] rounded-md">SAve & Next</button>
                            <button className="text-[#284B80] px-2 py-1 text-sm border border-[#284B80] rounded-md">MAek for Review & Next</button>
                            <button className="text-[#284B80] px-2 py-1 text-sm border border-[#284B80] rounded-md">clear response</button>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-8">
                        <div className="h-full w-[2px] bg-gray-300"></div>
                        <div>
                            <div className="grid grid-cols-7 gap-4 font-medium">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                                <p>8</p>
                                <p>9</p>
                                <p>10</p>
                                <p>11</p>
                                <p>12</p>
                                <p>13</p>
                                <p>14</p>
                                <p>15</p>
                                <p>16</p>
                                <p>17</p>
                                <p>18</p>
                                <p>19</p>
                                <p>20</p>
                            </div>
                            <div className="mt-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="h-[10px] w-[10px] rounded-full bg-[#008000]"></div>
                                    <p className="text-xs font-medium">Answered</p>
                                </div>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="h-[10px] w-[10px] rounded-full bg-[#FF0000]"></div>
                                    <p className="text-xs font-medium"> Not Answered</p>
                                </div>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="h-[10px] w-[10px] rounded-full bg-[#0000FF]"></div>
                                    <p className="text-xs font-medium">Mark For Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button onClick={handleQuizeModalOpen} className="bg-[#001356] text-white px-4 py-1 rounded-md" style={{
                        boxShadow: "0px -4px 4px 0px #000D3D inset"
                    }}>Submit</button>
                    {isModalOpen && <SubmitQuizeModal onClose={handleQuizeClose} />}
                </div>
            </div>
        </>
    );
};

export default Quizes;