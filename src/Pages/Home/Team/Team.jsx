import './Team.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { BiLogoFacebook,BiLogoTwitter,BiLogoBehance,BiLogoLinkedin } from 'react-icons/bi';

const Team = () => {
    const [items,setItems] = useState([])
    useEffect(() =>{
        fetch('Team.json')
        .then(res => res.json())
        .then(data =>{
            setItems(data)
            
        })
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <div id='team' className='lg:px-24 md:px-12 px-8 py-6'>
            <div className='py-14 flex justify-center items-center flex-col'>
                <p className='font-medium text-[#005DE0]'>OUR EXPERT TEAM</p>
                <h2 className='text-4xl font-bold py-2'>We have world expert team</h2>
            </div>
            <div>
            <div className=''>
                <Slider {...settings}>
                  
                    {
                        items.map((item,index) => <div key={item.index}>
                            <div className='team-box cursor-pointer'>
                                 <div className='box-img'>
                                 <img className='w-full' src={item.image} alt="" />
                                 </div>
                                 <div className='px-12 absolute top-[60%] text-white  z-10'>
                                     <h2 className='text-2xl font-semibold lg:w-[65%] sub-box px-4'>{item.name}</h2>
                                     <p className='text-[12px] lg:px-4 py-1'>{item.postion}</p>
                                     <div className='flex space-x-2 py-4 px-4 text-xl cursor-pointer icon-box'>
                                         <p className='icon'><BiLogoFacebook></BiLogoFacebook></p>
                                         <p className='icon'><BiLogoTwitter></BiLogoTwitter></p>
                                         <p className='icon'><BiLogoBehance></BiLogoBehance></p>
                                         <p className='icon'><BiLogoLinkedin></BiLogoLinkedin></p>
                                     </div>
                                 </div>
                            </div>
                        </div>)
                    }

                </Slider>
            </div>
            </div>
        </div>
    );
};

export default Team;