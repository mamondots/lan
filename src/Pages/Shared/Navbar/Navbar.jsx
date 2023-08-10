import { BiSearch, BiMenu } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';

import './Navbar.css'
import { useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <Headroom>
            <div className='z-20 bg-white'>
                <div className='lg:px-24 md:px-12 px-8 py-6 flex items-center justify-between'>
                    <div className='bg-white w-full flex justify-between items-center'>
                        <div>
                           <Link to="home" smooth={true} duration={1000}>
                           <h2 className='text-2xl  font-bold cursor-pointer'>Mamon<span className='text-[#005DE0]'>dots</span></h2>
                           </Link>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex nav-list list-none space-x-8 font-medium'>
                                <li><Link to="home" smooth={true} duration={1000}>
                                <a href="">Home</a>
                                </Link>
                                </li>
                                <li>
                                <Link to="about" smooth={true} duration={1000}><a href="">About us</a>
                                </Link>
                                </li>

                                <li>
                                <Link to="services" smooth={true} duration={1000}><a href="">Services</a>
                                </Link>
                                </li>

                                <li >
                                <Link to="portfolio" smooth={true} duration={1000}><a href="">Portfolio</a>
                                </Link>
                                </li>

                                <li>
                                <Link to="testimonial" smooth={true} duration={1000}><a href="">Testimonial</a>
                                </Link>
                                </li>

                                <li>
                                <Link to="team" smooth={true} duration={1000}><a href="">Team</a>
                                </Link>
                                </li>

                                <li>
                                <Link to="blogs" smooth={true} duration={1000}><a href="">Blogs</a>
                                </Link>
                                </li>
                                
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex space-x-2 cursor-pointer text-xl'>
                                <p className='px-2 py-2 rounded-full border hover:bg-[#005DE0] hover:text-white duration-300'><BiSearch></BiSearch></p>
                                <p className='px-2 py-2 rounded-full border hover:bg-[#005DE0] hover:text-white relative duration-300'><AiOutlineShoppingCart></AiOutlineShoppingCart><span className='mt-5 absolute top-[-30px] right-[-10px] px-1 text-sm bg-[#005DE0] rounded-full text-white'>0</span></p>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleOpen} className='lg:hidden'>
                        <h2 className='text-2xl font-bold mt-1 text-[#005DE0]'><BiMenu></BiMenu></h2>
                    </div>

                </div>
                

            </div>
        </Headroom>

    );
};

export default Navbar;