import './Experenc.css'
import textImg from '../../../assets/image/texnilogi02.png'

const Experenc = () => {
    return (
        <div className="">
            <div className='grid lg:grid-cols-2 lg:gap-12 relative'>
                 <div className='bg-[#F2F2F2]'>
                 <div className='lg:px-24 md:px-12 px-8 lg:py-16 relative '>
                    <h2 className='lg:text-[160px] text-8xl lg:py-auto py-12 font-bold text-[#005DE0]'>25+</h2>
                    <p className='text-xl font-medium mt-[-40px]'>Years of experience</p>
                    <h2 className='text-4xl font-semibold  lg:pt-8 pt-4'>We run all kinds of <span className=' text-[#005DE0]'>IT services</span> that vow your success</h2>
                    
                 </div>
                 <div className='absolute top-[20%] left-0'>
                        <img className='nt-5 opacity-10' src={textImg} alt="" />
                    </div>
                 </div>
                 <div className='lg:px-20 md:px-12 px-8 lg:py-16 lg:mt-20 py-10 mt-8'>
                    <h2 className='text-2xl font-base leading-snug'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote technology</h2>
                    <div className='py-8 space-y-8'>
                         <div>
                             <div className='flex justify-between items-center py-1 font-medium'>
                                 <p>IT Managment</p>
                                 <p>80%</p>
                             </div>
                             <div className='line w-full py-[2px] px-2'>
                                <div className='fill bg-[#005DE0] w-[80%] py-1'>

                                </div>
                             </div>
                         </div>

                         <div>
                             <div className='flex justify-between items-center py-1 font-medium'>
                                 <p>Data Security</p>
                                 <p>90%</p>
                             </div>
                             <div className='line w-full py-[2px] px-2'>
                                <div className='fill bg-[#005DE0] w-[90%] py-1'>

                                </div>
                             </div>
                         </div>

                         <div>
                             <div className='flex justify-between items-center py-1 font-medium'>
                                 <p>Solution</p>
                                 <p>92%</p>
                             </div>
                             <div className='line w-full py-[2px] px-2'>
                                <div className='fill bg-[#005DE0] w-[92%] py-1'>

                                </div>
                             </div>
                         </div>

                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Experenc;