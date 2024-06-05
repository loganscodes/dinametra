import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useApod } from '../hooks/useApod';


const Carousel = () => {


  const { apod } = useApod()

  return (
    <>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={apod?.hdurl} alt="" className='object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apod?.url} alt="" className='object-cover' />
        </SwiperSlide>

      </Swiper>


    </>
  )
}

export default Carousel