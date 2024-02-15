import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { useAppDispatch, type RootState } from '../../redux/store';
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import type { CategoryId } from './types';
import { filterIsAdult, filterPosts, filterToModerate } from '../posts/postsSlice';

function Categories(): JSX.Element {
  const categories = useSelector((store: RootState) => store.categories.categories);
  const dispatch = useAppDispatch();

  const sortFunctions = (catId: CategoryId): void => {
    dispatch(filterPosts(catId));
  };
  const sortForAdults = (): void => {
    dispatch(filterIsAdult(true));
  };
  const sortForModerate = (): void => {
    dispatch(filterToModerate(false));
  };

  const admin = useSelector((store: RootState) => store.auth.auth)?.isAdmin;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {categories.map((slide) => (
        <SwiperSlide key={slide.id}>
          <button type="button" onClick={() => sortFunctions(slide.id)}>
            <img className="slide-img" src={`${slide.img}`} alt={slide.title} />
            <div className="slide-title">{slide.title}</div>
          </button>
        </SwiperSlide>
      ))}
      {admin && (
        <SwiperSlide>
          <button type="button" onClick={sortForAdults}>
            isAdult
          </button>
          <button type="button" onClick={sortForModerate}>
            Moderate
          </button>
        </SwiperSlide>
      )}
    </Swiper>
  );
}

export default Categories;
