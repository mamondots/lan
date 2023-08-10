import './Choose.css'
import chooseImg01 from '../../../assets/image/choose-us1.jpg'
import chooseImg02 from '../../../assets/image/choose-us2.jpg'
import chooseImg03 from '../../../assets/image/choose-us3.jpg'

const Choose = () => {
    return (
        <div id='services' className='lg:px-24 md:px-12 px-8 bg-[#F2F2F2] relative'>
            <div className='py-12 flex justify-center items-center flex-col'>
                <p className='font-medium text-[#005DE0]'>REASON TO CHOOSE US</p>
                <h2 className='text-4xl font-bold py-2'>We provide truly prominent IT solutions.</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-2 pb-2'>
                <div className='relative overflow-hidden chose-total-box cursor-default'>
                    <div className='choose-box'>
                        <img className='rounded w-full' src={chooseImg01} alt="" />
                    </div>
                    <div className='text-white lg:px-12 md:px-12 px-8 absolute lg:top-[48%] md:top-[40%] top-[40%] chose-info'>
                        <h2 className='text-2xl font-bold side-line px-4'>Information managemnet system</h2>
                        <p className='text-[15px] py-4 chose-details'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                    </div>
                </div>

                <div className='relative overflow-hidden chose-total-box cursor-default'>
                    <div className='choose-box'>
                        <img className='rounded w-full' src={chooseImg02} alt="" />
                    </div>
                    <div className='text-white lg:px-12 md:px-12 px-8 absolute lg:top-[48%] md:top-[40%] top-[40%] chose-info'>
                        <h2 className='text-2xl font-bold side-line px-4'>Information Database Security</h2>
                        <p className='text-[15px] py-4 chose-details'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                    </div>
                </div>

                <div className='relative overflow-hidden chose-total-box cursor-default'>
                    <div className='choose-box'>
                        <img className='rounded w-full' src={chooseImg03} alt="" />
                    </div>
                    <div className='text-white lg:px-12 md:px-12 px-8 absolute lg:top-[48%] md:top-[40%] top-[40%] chose-info'>
                        <h2 className='text-2xl font-bold side-line px-4'>Multifunctional Technology</h2>
                        <p className='text-[15px] py-4 chose-details'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center py-8">
                <button className="text-[#005DE0] slide-btn px-8 py-2 text-lg font-medium rounded">See more project</button>
            </div>
        </div>
    );
};

export default Choose;