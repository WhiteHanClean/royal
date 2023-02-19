import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper";
import slide from '../../assets/slideOne.jpg'
import slideTwo from '../../assets/slideTwo.jpg'
import slideThree from '../../assets/slideThree.jpg'
import slideFour from '../../assets/slideFour.jpg'
import Image from "next/image";


export default function LandscapingSlider() {
  return (
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        navigation={true}
        speed={900}
        loopedSlides={2}
        loop={true}
        pagination = {{
          clickable: false
        }}
        modules={[ Navigation, Pagination]}
        simulateTouch={false}
        breakpoints= {{
          0: {
            slidesPerView: 1,
            loopedSlides: 1,
            simulateTouch: true
          },
          801: {
            slidesPerView: 3,
            loopedSlides: 2,
            simulateTouch: true
          },

        }}
        className="landscaping__slider"
      >
        <SwiperSlide>
          <Image src={slide} alt='slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideTwo} alt='slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideThree} alt='slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideFour} alt='slide'/>
        </SwiperSlide>
      </Swiper>
  );
}
