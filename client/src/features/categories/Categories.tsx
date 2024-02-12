import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { useAppDispatch, type RootState } from '../../redux/store';
import CategoryEl from './CategoryEl';
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';

function Categories(): JSX.Element {
  const categories = useSelector((store: RootState) => store.categories.categories);
  console.log(categories);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {categories.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container">{slide.title}</div>
            <img className="slide-img" src={`${slide.img}`} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="cat-container">
        <div className="categories">
          {categories.map((category) => (
            <CategoryEl key={category.id} category={category} />
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Categories;
