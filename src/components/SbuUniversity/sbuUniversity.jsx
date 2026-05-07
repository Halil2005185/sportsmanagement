import logoIcon from "/images/logoIcon.png"
import sbu from "/images/sbu.png"
import mans from "/images/mans.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/effect-coverflow";

function SbuUniversity({ title, description, button }) {
    const images = [mans, mans, mans, mans, mans];

    return (
        <section className="bg-[#1C1C1C] w-full h-fit rounded-[20px] lg:rounded-[40px] mt-10 py-6 lg:py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:gap-8 overflow-hidden">

            {/* Header Content */}
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full xl:w-[90%] mx-auto gap-6 xl:gap-0">
                <div className="flex flex-col gap-4 lg:gap-6 w-full xl:w-[60%]">
                    <h4 className="italic font-bold leading-tight text-white text-[22px] sm:text-[26px] lg:text-[32px] font-['Platypi']">
                        {title.before} <span className="text-[#D2FF00]">{title.highlight}</span>
                    </h4>
                    <p className="text-[#FFFFFF] leading-relaxed text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] font-['Chakra_Petch']">
                        {description}
                    </p>
                    <div className="bg-[#D2FF00] w-full sm:w-[220px] lg:w-[284px] flex justify-center items-center py-3 lg:py-[18px] px-5 lg:px-[24px] rounded-[8px] shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] cursor-pointer hover:brightness-110 transition-all duration-200">
                        <p className="font-bold font-['Chakra_Petch'] text-[16px] lg:text-[20px] leading-[100%]">
                            {button}
                        </p>
                    </div>
                </div>

                <div className="flex xl:hidden items-center gap-3 mt-1">
                    <img src={logoIcon} alt="logoIcon" className="w-[80px] sm:w-[100px] md:w-[130px]" />
                    <img src={sbu} alt="sbu" className="w-[50px] sm:w-[60px] md:w-[80px]" />
                </div>
                <div className="hidden xl:flex items-center gap-4">
                    <img src={logoIcon} alt="logoIcon" className="w-[400px]" />
                    <img src={sbu} alt="sbu" className="w-[200px]" />
                </div>
            </div>

            {/* ✅ Coverflow on desktop */}
            <div className="hidden md:block">
                <Swiper
                    modules={[EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    slidesPerView={3}
                    spaceBetween={24}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 120,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    className="w-full px-8"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-[240px] lg:h-[280px] object-cover rounded-[16px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* ✅ Normal slider on mobile — 1 image, swipe naturally */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    grabCursor={true}
                    slidesPerView={1}
                    spaceBetween={16}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full px-2 pb-8"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-[220px] object-cover rounded-[12px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
}

export default SbuUniversity;