import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

SwiperCore.use([Autoplay, EffectFade, Navigation]);

const Slider = ({ listImg }) => {
  return (
    <WrapSlider>
      <Swiper
        navigation={true}
        centeredSlides
        autoplay={{ delay: 5000 }}
        effect={'fade'}
        speed={500}
        loop
      >
        {listImg.map((item, key) => (
          <SwiperSlide key={key}>
            <Image
              src={item.link}
              layout="fill"
              priority={true}
              alt="huber"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </WrapSlider>
  )
}

export default Slider;

const WrapSlider = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: calc(71% + 55px);
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  .swiper {
    &-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      justify-content: center;
    }

    &-wrapper {
      order: 0;
      height: calc(100% - 55px);
    }

    &-button {
      &-next,
      &-prev {
        left: 35px;
        bottom: 0;
        width: 32px;
        height: 32px;
        border: 1px solid ${props => props.theme.colors.black};
        border-radius: 50%;
        top: auto;
        background-color: ${props => props.theme.colors.white};
        position: static;
        margin: 20px 5px 0;
        color: ${props => props.theme.colors.black};
        transition: 0.5s ease;
        order: 1;

        &:before {
          content: '';
          position: absolute;
          width: 15px;
          height: 1px;
          background: currentColor;
        }

        &:after {
          content: '';
          width: 11px;
          height: 11px;
          border-top: 1px solid currentColor;
          border-left: 1px solid currentColor;
          background: transparent;
          transform: rotate(-45deg);
        }

        &:hover {
          color: ${props => props.theme.colors.white};
          background-color: ${props => props.theme.colors.black};
        }
      }

      &-next {
        transform: rotate(180deg);
        left: 80px;
      }
    }
  }
`