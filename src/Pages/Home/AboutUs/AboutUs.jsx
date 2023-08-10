import aboutImg01 from '../../../assets/image/about-1.jpg'
import aboutImg02 from '../../../assets/image/about-2.jpg'
import aboutImg03 from '../../../assets/image/ab-shape.png'
import authImg from '../../../assets/image/author-1.jpg'
import authSingImg from '../../../assets/image/sign.png'
import { FaPlay } from "react-icons/fa";
import './AboutUs.css'
import { BsCheckLg } from 'react-icons/bs';

const AboutUs = () => {
    return (
        <div id='about' className="lg:px-24 md:px-12 px-8 lg:py-12">
            <div className='grid lg:grid-cols-2 lg:gap-36 pb-28'>
                 <div className='relative'>
                    <div>
                    <img className=' relative rounded lg:w-auto w-full' src={aboutImg01} alt="" />
                    <img className='absolute right-0 bottom-[-5px] rounded hidden lg:block' src={aboutImg02} alt="" />
                    <img className='ml-12 mt-[-80px] hidden lg:block' src={aboutImg03} alt="" />
                    <div className='lg:right-[-60px] right-[50%] top-[40%] absolute'>
                    <div className='lg:py-12 lg:px-12 px-8 py-8 play-btn text-white font-bold text-xl rounded-full  bg-[#005DE0]'>
                        <FaPlay></FaPlay> 
                    </div>
                    </div>
                    </div>
                    
                 </div>
                 <div>
                        <p className='text-[#005DE0] font-medium'>WHO WE ARE</p>
                        <h2 className='text-4xl font-semibold py-4 leading-snug'>We specialise in helping our customers digitise their business</h2>
                        <p className='text-lg leading-snug text-[#505050]'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                        <div  className='grid lg:grid-cols-2 lg:gap-2 py-12'>
                             <div className='bg-[#F2F2F2] py-2 px-2'>
                                <div className='bg-white flex p-4'>
                                     <img src={authImg} alt="" />
                                     <div className='px-4'>
                                        <img src={authSingImg} alt="" />
                                        <h2 className='mt-2 font-medium'>Mita Walker</h2>
                                        <p>CEO, Techmax</p>
                                     </div>
                                </div>
                             </div>
                             <div>
                                <ul className='space-y-4 font-medium'>
                                    <li className='flex items-center'><span className='px-2 text-[#005DE0]'><BsCheckLg></BsCheckLg></span> Solving complex problems</li>
                                    <li className='flex items-center'><span className='px-2 text-[#005DE0]'><BsCheckLg></BsCheckLg></span>  We guarantee trusted service.</li>
                                    <li className='flex items-center'><span className='px-2 text-[#005DE0]'><BsCheckLg></BsCheckLg></span> Experts in technology fields</li>
                                    
                                </ul>
                             </div>
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default AboutUs;