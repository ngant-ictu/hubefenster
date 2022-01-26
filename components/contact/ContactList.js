import ContactItem from "./ContactItem";
import styled from "styled-components";
import contactData from "../../data/kontakt.json";
import Section from "../../components/common/Section";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

const View360 = dynamic(
  () => import('./View360'),
  { ssr: false } 
)
SwiperCore.use([Autoplay, EffectFade, Navigation]);

const ContactList = () => {
  const data = contactData[0].data;
  const dataView = contactData[1].images;
  // dataView.map((item) => {
  //   console.log({item})
  // })
  
  return (
    <Contact>
      <Section layout="grid">
        <WrapItem>
          {data.map((item) => (
            <ContactItem key={item.id} item={item} />
          ))}
        </WrapItem>
      </Section>
      <WrapView360>
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          navigation
          centeredSlides
          // autoplay={{ delay: 5000 }}
          effect={"fade"}
          speed={500}
        >
          {dataView.map((item) => (
            console.log({item}),
            <SwiperSlide key={item.id}>
              <View360 imageView={item} />
            </SwiperSlide>
          ))}

        </Swiper>
      </WrapView360>
      <View360 />
      <Section layout="grid">
        <Bottom>
          <BottomTitle>Showroom Herisau</BottomTitle>
          <Link href={"#"}>
            <a>Termin buchen</a>
          </Link>
        </Bottom>
      </Section>
    </Contact>
  );
};

export default ContactList;

const Contact = styled.div`
  padding-top: 132px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 234px;
  }

  .contact-fullimg {
    height: 300px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      height: 500px;
    }

    @media screen and (min-width: ${({ theme }) =>
        theme.breakPoints.notebook}) {
      height: 928px;
    }
  }
`;

const WrapItem = styled.div`
  padding: 0 0 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0 45px 114px;
  }
`;

const WrapView360 = styled.div``

const Bottom = styled.div`
  padding: 23px 39px 60px;

  a {
    display: inline-block;
    padding: 0 36px;
    line-height: 34px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xlarge}) {
    padding-left: 321px;
    padding-right: 321px;
  }
`;

const BottomTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: normal;
  padding-bottom: 18px;
`;
