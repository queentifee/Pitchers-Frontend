import React from "react";
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import mockupOne from '../assets/mockups/mockup1.png'
import mockupTwo from '../assets/mockups/mockup2.png'
import mockupThree from '../assets/mockups/mockup3.png'
import mockupFour from '../assets/mockups/mockup4.png'
import mockupFive from '../assets/mockups/mockup5.png'
import mockupSix from '../assets/mockups/mockup6.png'
import mockupSeven from '../assets/mockups/mockup7.png'
import mockupEight from '../assets/mockups/mockup8.png'
import mockupNine from '../assets/mockups/mockup9.png'


const images = [
  { src: mockupOne },
  { src: mockupTwo },
  { src: mockupThree },
  { src: mockupFour },
  { src: mockupFive },
  { src: mockupSix },
  { src: mockupSeven },
  { src: mockupEight },
  { src: mockupNine },
];
    
    const Carousel = () => {
      return (
        <div className="relative mx-auto px-6 lg:px-20 py-2 min-h-[500px]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full ">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
                className="w-full"
              >
                {images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img
                        src={item.src}
                        alt={`image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
          </div>
        </div>
      );
    };
    
    export default Carousel;