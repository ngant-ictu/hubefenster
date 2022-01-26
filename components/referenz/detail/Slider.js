import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

SwiperCore.use([Autoplay, EffectFade, Navigation]);

const Slider = ({ activeIndex, listImg }) => {
  const [thisSlider, setThisSlider] = useState(null);

  useEffect(() => {
    if(thisSlider) {
      thisSlider.slideTo(activeIndex+1)
    }
  }, [activeIndex, thisSlider])

  return (
    <WrapSlider>
      <StyledSwiper
        navigation={true}
        centeredSlides
        autoplay={{ delay: 5000 }}
        effect={'fade'}
        speed={500}
        loop
        onSwiper = {setThisSlider}
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
      </StyledSwiper>
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
    padding-top: 72.5%;
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  .swiper-button {
    &-next,
    &-prev {
      left: 35px;
      bottom: 15px;
      width: 32px;
      height: 32px;
      border: 1px solid ${props => props.theme.colors.black};
      border-radius: 50%;
      top: auto;
      background-color: ${props => props.theme.colors.white};
      display: none;
      color: ${props => props.theme.colors.black};
      transition: 0.5s ease;

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

      @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
        display: flex;
      }
    }

    &-next {
      transform: rotate(180deg);
      left: 80px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    position: absolute;
    width: 100%;
    height: 100%;

    &::before {
      display: none;
    }
  }
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`