import { Fragment } from "react/cjs/react.production.min";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";

const Swiperr = () => {
  return (
    <Fragment>
      <div className="Swip background py-5">
        <Swiper
          spaceBetween={1}
          slidesPerView={5.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="text-center"
        >
          <SwiperSlide>
            <button>Bakery</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Trending</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Fruits</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Baverage</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Bakery</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Trending</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Fruits</button>
          </SwiperSlide>
          <SwiperSlide>
            <button>Baverage</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Swiperr;
