import { FaHeart } from 'react-icons/fa';
import { BsBoxArrowInDown } from 'react-icons/bs';

const blog = [
    {
        id: "1",
        title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
        img: "https://i.ibb.co/7X2Hgyg/image-46.png",
        description: "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
        time: "2 hours ago",
        author: "By Lucy Hiddleston",
        min: "4min read"
    },
    {
        id: "2",
        title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
        img: "https://i.ibb.co/7X2Hgyg/image-46.png",
        description: "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
        time: "2 hours ago",
        author: "By Lucy Hiddleston",
        min: "4min read"
    },
    {
        id: "3",
        title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
        img: "https://i.ibb.co/7X2Hgyg/image-46.png",
        description: "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
        time: "2 hours ago",
        author: "By Lucy Hiddleston",
        min: "4min read"
    },
    {
        id: "4",
        title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
        img: "https://i.ibb.co/7X2Hgyg/image-46.png",
        description: "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
        time: "2 hours ago",
        author: "By Lucy Hiddleston",
        min: "4min read"
    }
]
const Blogs = () => {
    return (
        <div className="lg:ml-[300px]">
            <div className="flex items-center gap-2 mt-8">
                <h1 className="text-[#001356] text-[26px] font-semibold">Blogs</h1>
                <img src="https://i.ibb.co/svqRn1R/edit.png" alt="" />
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-4 md:mx-0'>
                    {blog.map(item => (
                        <>
                            <div className="pb-8">
                                <div className="shadow-xl py-4">
                                    <img className="w-full" src={item.img} alt="" />
                                    <div className="">
                                        <h4 className="text-base font-medium px-1">{item.title}</h4>
                                        <p className="text-sm px-2">{item.description}</p>
                                        <p className="mt-4 text-sm mb-4 px-2"><span className="font-bold">{item.time}</span> {item.author}  |  {item.min}</p>
                                        <hr />
                                        <div className="mt-2 ml-[25%]">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <FaHeart className="text-red-600" />
                                                    <small>39</small>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <BsBoxArrowInDown />
                                                    <small>72</small>
                                                </div>
                                                <div>
                                                    <img src="https://i.ibb.co/vkNfGWz/Vector.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Blogs;