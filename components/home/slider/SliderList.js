import React from "react";
import styled from "styled-components";
import dataSlider from "../../../data/homeslider.json";
import SliderItem from "./SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

const SliderList = () => {
  SwiperCore.use([Autoplay, EffectFade, Navigation]);

  return (
    <WrapSlider>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        navigation
        centeredSlides
        autoplay={{ delay: 5000 }}
        effect={"fade"}
        speed={500}
        loop
      >
        {dataSlider.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <SliderItem active={isActive} key={item.id} itemData={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapSlider>
  );
};

export default SliderList;

const WrapSlider = styled.div`
  .swiper-button {
    &-next,
    &-prev {
      right: 27px;
      display: none;
      &:after {
        font-family: inherit;
        content: "";
        width: 24px;
        height: 23px;
        background: url("/assets/img/icons/icon-slide-arrow-right.svg")
          no-repeat;
      }

      @media screen and (min-width: ${({ theme }) =>
          theme.breakPoints.tablet}) {
        display: flex;
      }
    }

    &-prev {
      left: 27px;
      transform: rotate(180deg);
    }
  }
`;
