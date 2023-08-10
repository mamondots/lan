import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projects.css'
import Slider from "react-slick";
import slideImg01 from '../../../assets/image/cs-1.jpg'
import slideImg02 from '../../../assets/image/cs-2.jpg'
import slideImg03 from '../../../assets/image/cs-3.jpg'
import slideImg04 from '../../../assets/image/cs-4.jpg'
import { HiArrowSmRight } from 'react-icons/hi';



const Projects = () => {

  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    className: "center",
    slidesToShow: 2,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
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
  };
  return (
    <div id='portfolio' className="overflow-hidden py-10 relative">
      <div className="text-center py-10">
        <p className="font-medium text-[#005DE0]">WHO WE ARE</p>
        <h2 className="py-2 text-3xl font-semibold">We are proud team of great project</h2>
      </div>
      <div>
        <Slider {...settings}>
          <div className="px-2 outline-none">
            <div className="img-slide"> 
            <img  src={slideImg01} alt="" />
            </div>
            <div className="absolute top-[45%] text-white px-12 hidden lg:block">
               <h2 className="text-2xl font-semibold">FrontEnd Development</h2>
               <p className="text-lg text-[#005DE0]">IT Technology</p>
               <p className="py-2 w-[40%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a nesciunt minima tempora accusantium id veniam tempore voluptate esse rem!</p>
               <p className="px-3 py-3 w-10 cursor-pointer border border-[#005DE0] hover:bg-transparent hover:text-[#005DE0] duration-300 rounded-full bg-[#005DE0]"><HiArrowSmRight></HiArrowSmRight></p>
            </div>
          </div>
          <div className="px-2 outline-none">
            
            <div className="img-slide"> 
            <img src={slideImg02} alt="" />
            </div>
            <div className="absolute top-[45%] text-white px-12 hidden lg:block">
               <h2 className="text-2xl font-semibold">BackEnd Development</h2>
               <p className="text-lg text-[#005DE0]">IT Technology</p>
               <p className="py-2 w-[40%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a nesciunt minima tempora accusantium id veniam tempore voluptate esse rem!</p>
               <p className="px-3 py-3 w-10 cursor-pointer border border-[#005DE0] hover:bg-transparent hover:text-[#005DE0] duration-300 rounded-full bg-[#005DE0]"><HiArrowSmRight></HiArrowSmRight></p>
            </div>
          </div>


          <div className="px-2 outline-none">
          <div className="img-slide"> 
          <img src={slideImg03} alt="" />
            </div>
            <div className="absolute top-[45%] text-white px-12 hidden lg:block">
               <h2 className="text-2xl font-semibold">Computer Science</h2>
               <p className="text-lg text-[#005DE0]">IT Technology</p>
               <p className="py-2 w-[40%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a nesciunt minima tempora accusantium id veniam tempore voluptate esse rem!</p>
               <p className="px-3 py-3 w-10 cursor-pointer border border-[#005DE0] hover:bg-transparent hover:text-[#005DE0] duration-300 rounded-full bg-[#005DE0]"><HiArrowSmRight></HiArrowSmRight></p>
            </div>
            
          </div>
          <div className="px-2 outline-none">
            
            <div className="img-slide"> 
            <img src={slideImg04} alt="" />
            </div>
            <div className="absolute top-[45%] text-white px-12 hidden lg:block">
               <h2 className="text-2xl font-semibold">Product Design</h2>
               <p className="text-lg text-[#005DE0]">IT Technology</p>
               <p className="py-2 w-[40%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a nesciunt minima tempora accusantium id veniam tempore voluptate esse rem!</p>
               <p className="px-3 py-3 w-10 cursor-pointer border border-[#005DE0] hover:bg-transparent hover:text-[#005DE0] duration-300 rounded-full bg-[#005DE0]"><HiArrowSmRight></HiArrowSmRight></p>
            </div>
          </div>

        </Slider>
      </div>
      <div className="flex justify-center items-center py-12">
      <button className="text-[#005DE0] slide-btn px-8 py-2 text-lg font-medium rounded">See more project</button>
      </div>
    </div>
  );
};

export default Projects;