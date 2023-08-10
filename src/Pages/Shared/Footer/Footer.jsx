import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-[#010717] cursor-pointer">
            <div className='lg:px-24 md:px-12 px-8 py-6'>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 md:gap-3 gap-2 text-white py-12">
                    <div>
                        <h2 className='text-xl font-semibold'>Mamondots</h2>
                        <p className='py-2'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
                        <div className='flex space-x-4 py-2 font-xl cursor-pointer'>
                            <p className='px-2 py-2 rounded-full bg-white text-[#262626]'><BiLogoFacebook></BiLogoFacebook></p>
                            <p className='px-2 py-2 rounded-full bg-white text-[#262626]'><AiOutlineInstagram></AiOutlineInstagram></p>
                            <p className='px-2 py-2 rounded-full bg-white text-[#262626]'><AiOutlineTwitter></AiOutlineTwitter></p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Useful Links</h2>
                        <ul className='py-2 space-y-2'>
                            <li>Terms & Conditions</li>
                            <li>About Company</li>
                            <li>Payment Gatway</li>
                            <li>Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Our Services</h2>
                        <ul  className='py-2 space-y-2'>
                            <li>Data Security</li>
                            <li>IT Managment</li>
                            <li>Outsourcing</li>
                            <li>Networking</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Contact Information</h2>
                        <ul  className='py-2 space-y-2'>
                            <li>+91 458 654 528

                            </li>
                            <li>
                                info@example.com
                                </li>
                            <li>
                                60 East 65th Street, NY
                                </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;