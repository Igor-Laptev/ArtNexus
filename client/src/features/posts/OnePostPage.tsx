import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Mousewheel } from 'swiper/modules';
import type { RootState } from '../../redux/store';
import Comments from '../comments/Comments';
import './onePostStyles.css';
import 'swiper/css';
import 'swiper/css/navigation';


function OnePostPage(): JSX.Element {
  const { postId } = useParams();
  const post = useSelector((store: RootState) => store.posts.posts).find(
    (pst) => pst.id === +postId,
  );
  console.log(post);

  const navigate = useNavigate();
  return (
    <div className="">
      <h2>{post?.title}</h2>
      <p>{post?.description}</p>       

      <Swiper
        className="post-swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        mousewheel
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {post?.Gallery &&
          post.Gallery.Arts &&
          post.Gallery.Arts.map((art) => (
            <SwiperSlide key={art.id}>
              <img className="slide-img" src={`${art.src}`} alt={art.title} />
            </SwiperSlide>
          ))}
      </Swiper>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      {post && <Comments post={post}/>}

    </div>
  );
}

export default OnePostPage;
