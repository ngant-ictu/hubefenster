import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "../common/Section";
import SvgArrow from "./SvgArrow";

const ImageLeftEffect = {
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

const ImageRightEffect = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
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
      delay: 0.8,
      duration: 1.0,
    },
  },
};

const ButtonEffect = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.0,
    },
  },
};

const ContentImage = ({ itemData }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section layout="grid">
      <WrapInfoBlock ref={ref}>
        <InfoBlockLeft
          animate={controls}
          initial="hidden"
          variants={ImageLeftEffect}
        >
          <Image
            src={itemData.image_1[0].link}
            alt={itemData.image_1[0].title}
            width={itemData.image_1[0].width}
            height={itemData.image_1[0].height}
          />
        </InfoBlockLeft>
        <InfoBlockRight>
          <InfoBlockImage
            animate={controls}
            initial="hidden"
            variants={ImageRightEffect}
          >
            <Image
              src={itemData.image_2[0].link}
              alt={itemData.image_2[0].title}
              width={itemData.image_2[0].width}
              height={itemData.image_2[0].height}
            />
          </InfoBlockImage>
          <InfoBlockDesc
            animate={controls}
            initial="hidden"
            variants={DescEffect}
            dangerouslySetInnerHTML={{ __html: itemData.description }}
          />
          <InfoBlockViewMore
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={ButtonEffect}
            className="btn-viewmore"
          >
            <Link href={itemData.link}>
              <a>
                <SvgArrow />
                <span>{itemData.title_viewmore}</span>
              </a>
            </Link>
          </InfoBlockViewMore>
        </InfoBlockRight>
      </WrapInfoBlock>
    </Section>
  );
};

export default ContentImage;

const WrapInfoBlock = styled.div`
  max-width: 1085px;
  margin: 0 auto;
  overflow: hidden;
  padding: 70px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    align-items: flex-end;
    padding: 163px 0 255px;
  }
`;

const InfoBlockLeft = styled(motion.div)`
  padding-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 50%;
  }
`;

const InfoBlockRight = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 50%;
    padding: 0 0 0 30px;
  }
`;

const InfoBlockImage = styled(motion.div)`
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-left: 57px;
    margin-bottom: 129px;
  }
`;

const InfoBlockDesc = styled(motion.div)`
  max-width: 500px;
  font-size: 25px;
  line-height: 34px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 26px;
  }
`;

const InfoBlockViewMore = styled(motion.div)`
  &.btn-viewmore {
    padding-left: 50px;

    a svg {
      margin-right: 15px;
    }
  }
`;
