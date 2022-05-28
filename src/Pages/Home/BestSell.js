import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../assets/images/tools/tool1.png';
import img2 from '../../assets/images/tools/tool2.png';
import img3 from '../../assets/images/tools/tool3.png';
export default () => {
    return (
        <section className='py-24 background'>
            <div className='container'>
                <h1 className="text-4xl text-center font-medium mb-14">Best Sell Tools</h1>
                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} /></SwiperSlide>
                        <SwiperSlide><img src={img2} /></SwiperSlide>
                        <SwiperSlide><img src={img3} /></SwiperSlide>
                        <SwiperSlide><img src={img1} /></SwiperSlide>
                        <SwiperSlide><img src={img1} /></SwiperSlide>
                        <SwiperSlide><img src={img2} /></SwiperSlide>
                    </Swiper>
                </>
            </div>
        </section>
    );
};