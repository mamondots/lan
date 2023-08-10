import './Testinomal.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import upImg from '../../../assets/image/counter-4.png'
const Testinomal = () => {

    const [items,setItems] = useState([])
    useEffect(() =>{
        fetch('testimonal.json')
        .then(res => res.json())
        .then(data =>{
            setItems(data)
        })
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div id='testimonial' className='lg:px-24 md:px-12 px-8 py-6'>
             <div className='py-12 flex justify-center items-center flex-col'>
                <p className='font-medium text-[#005DE0]'>TESTIMONIAL</p>
                <h2 className='text-4xl font-bold py-2'>20k+ satisfied clients worldwide</h2>
            </div>
            <div className='lg:px-60'>
                <Slider {...settings}>
                  
                    {
                        items.map((item,index) => <div key={item.index}>
                            <div className='bg-[#F2F2F2] flex'>
                                 <div className=' hidden lg:block w-full'>
                                 <img className='' src={item.image} alt="" />
                                 </div>
                                 <div className='px-8 py-8'>
                                      <img className='lg:w-[20%] md:w-[10%] w-[20%] py-2' src={upImg} alt="" />
                                      <p className='lg:text-lg text-base text-[#52535B]'>{item.description}</p>
                                      <div className='flex py-2'>
                                         <p className='lg:text-lg'>{item.name} </p>
                                         <p className='px-2'>/ {item.postion}</p>
                                      </div>
                                 </div>
                            </div>
                        </div>)
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Testinomal;