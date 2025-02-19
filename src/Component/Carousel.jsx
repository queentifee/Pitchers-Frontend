import React from "react";
import { Swiper , SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"
import seven from "../assets/seven.png"
import eight from "../assets/eight.png"
import nine from "../assets/nine.png"








const images = [
    {
        src: one,
        // text: "Start your day right with a hearty breakfast to fuel your day ahead.",
      },
      {
        src: two,
        // text: "Experiment with new recipes to spice up your mealtime routine.",
      },
      {
        src: three,
        
        // text: "A balanced meal is the key to feeling healthy, satisfied and energized.",
      },
      {
        src: four,
        // text: "Portion control is important. Listen to your body's fullness cues.",
      },
      {
        src: five,
        // text: "Slow down and savor each bite for an enjoyable dining experience.",
      },
      {
        src: six,
      },
      {
        src: seven,
      },
      {
        src: eight,
      },
      {
        src: nine,
      },
    ];
    
    const Carousel = () => {
      return (
        <div className="relative mx-auto px-6 lg:px-20 py-2 min-h-[500px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - 60% */}
            <div className="w-full ">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
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