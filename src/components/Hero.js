import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bgFirst from '../assets/bg.jpg';
import bgSecond from '../assets/about-bg.jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size': '18px',
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bgFirst} alt='bg-hero' />
                    <span>THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bgSecond} alt='bg-hero' />
                    <span>WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</span>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Hero;