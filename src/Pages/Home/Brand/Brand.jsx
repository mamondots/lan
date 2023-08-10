import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brandImg01 from '../../../assets/image/brand-1.png'
import brandImg02 from '../../../assets/image/brand-2.png'
import brandImg03 from '../../../assets/image/brand-3.png'
import brandImg04 from '../../../assets/image/brand-4.png'
import brandImg05 from '../../../assets/image/brand-5.png'

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
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
        <div className='lg:px-24 md:px-12 px-8 py-12'>
            <div className="px-12 cursor-pointer">
            <Slider {...settings}>
                  <div>
                    <img src={brandImg01} alt="" />
                  </div>
                  <div>
                    <img src={brandImg02} alt="" />
                  </div>
                  <div>
                    <img src={brandImg03} alt="" />
                  </div>
                  <div>
                    <img src={brandImg04} alt="" />
                  </div>
                  <div>
                    <img src={brandImg05} alt="" />
                  </div>
                  <div>
                    <img src={brandImg01} alt="" />
                  </div>
            </Slider>
            </div> 
        </div>
    );
};

export default Brand;