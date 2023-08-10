import { useEffect, useState } from "react";
import { FaUser } from 'react-icons/fa';
import { BiCommentMinus } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import './Blogs.css'
const Blogs = () => {
    const [bloges, setBloges] = useState([])
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => {
                setBloges(data)

            })
    }, [])
    return (
        <div id='blogs' className='lg:px-24 md:px-12 px-8 py-6'>
            <div className='py-14 flex justify-center items-center flex-col'>
                <p className='font-medium text-[#005DE0]'>LATEST BLOG</p>
                <h2 className='text-4xl font-bold py-2'>From the news room</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-3 gap-2 relative">
                {
                    bloges.map((blog, index) => <div key={blog.index}>
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img className="w-full group-hover:scale-110 duration-300" src={blog.image} alt="" />
                                <p className="absolute top-[12%] left-[8%] px-4 py-3 rounded bg-gradient-to-r from-cyan-500 to-[#6B51BB] text-xl font-bold text-white">{blog.date}</p>
                            </div>
                            <div className="">
                            <div className=" py-8 px-4 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="flex items-center space-x-2"><span className="text-[#086AD8] px-2 ml-[-8px]"><FaUser></FaUser></span>{blog.post}</p>
                                    <p className="flex items-center space-x-2"><span className="mt-1 px-1 text-[#086AD8]"><BiCommentMinus></BiCommentMinus></span>comment {blog.comment}</p>
                                </div>
                                <h2 className="text-2xl font-medium py-2 hover:text-[#086AD8] duration-300">{blog.title}</h2>
                                <p className="arrow-box flex items-center space-x-2 text-[14px] font-medium cursor-pointer text-[#086AD8]">READ FULL <span className="left-arrow"><BsArrowRightShort></BsArrowRightShort></span></p>
                            </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;