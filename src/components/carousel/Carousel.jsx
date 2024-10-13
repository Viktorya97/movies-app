import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './carousel.scss';

const Carousel = ({title, items, onClick}) => {
    return (
        <div className={'carousel'}>
            <h2 className={'carousel__title'}>{title}</h2>
            <Swiper
              loop={true} 
              slidesPerView={8}
            >
              {items?.map((item) => (
                  <SwiperSlide key={item.Id} onClick={() => onClick(item)}>
                      <img src={item.CoverImage} alt={item.Title} className={'carousel__image'} />
                  </SwiperSlide>
              ))}
          </Swiper>
        </div>
    );
};

export default Carousel;
