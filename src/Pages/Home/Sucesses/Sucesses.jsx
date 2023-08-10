import backImg from '../../../assets/image/succees.jpg'
import './Sucesses.css'

import counterImg01 from '../../../assets/image/counter-1.png'
import counterImg02 from '../../../assets/image/counter-2.png'
import counterImg03 from '../../../assets/image/counter-3.png'
import counterImg04 from '../../../assets/image/counter-4.png'

const Sucesses = () => {
    return (
        <div className='lg:px-24 md:px-12 px-8 py-6 bg-[#F2F2F2]'>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 ms:gap-6 gap-2 lg:py-12'>
                <div className='bg-white py-2 px-2 flex items-center space-x-2'>
                    <img className='px-1' src={counterImg01} alt="" />
                    <div className='px-2'>
                         <h2 className='text-5xl font-bold'>354+</h2>
                         <p className='py-1'>Completed Projects</p>
                    </div>
                </div>
                <div className='bg-white py-2 px-2 flex items-center space-x-2'>
                <img src={counterImg02} alt="" />
                    <div className='px-2'>
                         <h2 className='text-5xl font-bold'>119+</h2>
                         <p>Satisfied Clients</p>
                         
                    </div>
                </div>
                <div className='bg-white py-2 px-2 flex items-center space-x-2'>
                <img src={counterImg03} alt="" />
                    <div className='px-2'>
                         <h2 className='text-5xl font-bold'>99%</h2>
                         <p>Web Site Analyse</p>
                    </div>
                </div>
                <div className='bg-white py-6 px-2 flex items-center space-x-2'>
                <img className='' src={counterImg04} alt="" />
                    <div className='px-2'>
                         <h2 className='text-5xl font-bold'>321+</h2>
                         <p>Clients Supoort Done</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Sucesses;