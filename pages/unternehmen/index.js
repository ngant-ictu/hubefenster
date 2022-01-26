import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import useMobile from "../../hook/useMobile";
import { motion } from "framer-motion";
import { Parallax, Background } from "react-parallax";
import ContentText from "../../components/elements/ContentText";
import ImageFullScreen from "../../components/common/FullImage";
import Section from "../../components/common/Section";
import Layout from "../../components/master/Layout";

import data from "../../data/about.json";

const ImageEffect = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1.0,
    },
  },
};
const TitleEffect = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.0,
    },
  },
};

const DescEffect = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 1.0,
    },
  },
};
const Index = () => {
  const checkMobile = useMobile();
  const isMobile = checkMobile.isMobile;

  const [width, setWidth] = useState(0);
  const [heightParallax, setHeight] = useState(887);

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width < 1280) {
      setHeight(600);
    } else {
      setHeight(887);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const wWidth = window.addEventListener("resize", handleResize);
    console.log(wWidth);
    return () => {
      wWidth;
    };
  }, []);

  return (
    <Layout header="white">
      <About>
        <Section layout="grid">
          <ItemTop>
            <ItemTopImg
              animate="visible"
              initial="hidden"
              variants={ImageEffect}
            >
              <Image
                src={data[0].image}
                alt={data[0].title}
                width={643}
                height={431}
              />
              <Title
                animate="visible"
                initial="hidden"
                variants={TitleEffect}
                dangerouslySetInnerHTML={{ __html: data[0].title }}
              />
            </ItemTopImg>
            <ItemTopDesc
              animate="visible"
              initial="hidden"
              variants={DescEffect}
            >
              {data[0].description}
            </ItemTopDesc>
          </ItemTop>
        </Section>
        {!isMobile && (
          <Parallax
            className="image"
            blur={0}
            bgImage={data[1].image}
            strength={heightParallax}
            bgImageStyle={{ minHeight: heightParallax }}
          />
        )}
        {isMobile && (
          <ImageFullScreen src={data[1].image} className="contact-fullimg" />
        )}
        <Section layout="grid">
          <ContentText
            itemData={data[2]}
            className="about-description about-description-first"
          />
          <ContentText
            itemData={data[3]}
            className="about-description about-description-second"
          />
        </Section>
      </About>
    </Layout>
  );
};

export default Index;

const About = styled.div`
  padding-top: 160px;

  .image {
    min-height: 200px;
    position: relative;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      min-height: 887px;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 253px;
  }

  .about-description {
    padding-top: 40px;
    max-width: 870px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      padding-top: 110px;

      &.about-description-first {
        padding-top: 147px;

        h3 {
          margin-bottom: 47px;
        }
      }
    }

    h3 {
      font-size: 30px;
      line-height: 35px;
      letter-spacing: 0.01em;
      margin-bottom: 15px;

      @media screen and (min-width: ${({ theme }) =>
          theme.breakPoints.tablet}) {
        font-size: 36px;
        line-height: 49px;
        margin-bottom: 45px;
      }
    }

    .intro-text {
      font-size: 20px;
      line-height: 34px;
      letter-spacing: 0.01em;
      max-width: 860px;

      @media screen and (min-width: ${({ theme }) =>
          theme.breakPoints.tablet}) {
        font-size: 26px;
      }
    }

    &.about-description-second {
      padding-top: 0;
      padding-bottom: 60px;

      h3 {
        max-width: 450px;
      }
      p {
        margin-bottom: 20px;
      }

      @media screen and (min-width: ${({ theme }) =>
          theme.breakPoints.tablet}) {
        padding-top: 66px;

        p {
          margin-bottom: 33px;
        }
      }
    }
  }
`;

const ItemTop = styled(motion.div)`
  max-width: 1085px;
  margin: 0 auto;
  padding-bottom: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-bottom: 150px;
  }
`;

const ItemTopImg = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    align-items: center;
    flex-direction: row;
  }
`;

const ItemTopDesc = styled(motion.div)`
  font-size: 20px;
  line-height: 34px;
  max-width: 709px;
  letter-spacing: 0.01em;
  padding-top: 15px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 26px;
    padding-top: 122px;
  }
`;

const Title = styled(motion.h3)`
  font-size: 30px;
  line-height: 35px;
  font-weight: normal;
  padding-top: 30px;

  span {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 39px;
    line-height: 45px;
    margin-left: 56px;
    width: 65%;
    padding-top: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.large}) {
    width: auto;
  }
`;
