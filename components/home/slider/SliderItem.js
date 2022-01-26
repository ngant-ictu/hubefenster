import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SvgArrow from "../../elements/SvgArrow";

const ContentEffect = {
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

const SliderItem = (props) => {
  const isActive = props.active;
  return (
    <WrapItem>
      <ImageBlock>
        <Image
          src={props.itemData.image}
          alt={props.itemData.title_url}
          priority
          layout="fill"
          objectFit="cover"
        />
      </ImageBlock>
      {props.itemData.desc_twt && (
        <DescTwitter>
          {props.itemData.desc_twt}
          <ItemMore className="btn-viewmore-twt">
            <Link href={props.itemData.link_twt}>
              <a>
                <SvgArrow />
                Twitter
              </a>
            </Link>
          </ItemMore>
        </DescTwitter>
      )}
      <ItemContent
        animate={isActive ? "visible" : ""}
        initial="hidden"
        variants={ContentEffect}
      >
        <ItemTitle>{props.itemData.title}</ItemTitle>
        <ItemMore className="btn-viewmore">
          <Link href={props.itemData.link}>
            <a>
              <SvgArrow />
              <span>{props.itemData.title_url}</span>
            </a>
          </Link>
        </ItemMore>
      </ItemContent>
    </WrapItem>
  );
};

export default SliderItem;

const WrapItem = styled.div`
  height: calc(100vh - 88px);
  margin-top: 88px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    height: calc(100vh - 20px);
    margin-top: 0;
  }
`;

const ImageBlock = styled.div`
  position: relative;
  height: 100%;
`;

const DescTwitter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 17px;
  padding: 20px;
  letter-spacing: 0.01em;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 15%;
  left: 10%;
  z-index: 1;
  border-radius: 50%;
  opacity: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 18px;
    line-height: 20px;
    width: 257px;
    height: 257px;
    padding: 26px;
  }

  .btn-viewmore-twt {
    font-size: 13px;
    margin-top: 10px;
    padding-left: 0;

    a {
      color: ${({ theme }) => theme.colors.white};
      margin-right: 50px;

      svg {
        width: 16px;
        height: 7px;
        margin-right: 5px;

        path {
          stroke: ${({ theme }) => theme.colors.white};
          stroke-opacity: 1;
        }
      }
      } 
      
    }
  }

  &:hover {
    opacity: 1;
  }
`;

const ItemContent = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 45%;
  z-index: 2;
  left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    left: inherit;
    top: inherit;
    bottom: 120px;
    right: 159px;
  }
`;

const ItemTitle = styled.div`
  font-size: 30px;
  line-height: 42px;
  max-width: 200px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    max-width: 390px;
    font-size: 65px;
    line-height: 65px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ItemMore = styled.div`
  padding-left: 60px;

  &.btn-viewmore {
    font-size: 13px;

    a {
      color: ${({ theme }) => theme.colors.black};
      letter-spacing: 0.01em;
      svg {
        width: 16px;
        height: 7px;
        margin-right: 5px;

        path {
          opacity: 1;
          stroke: ${({ theme }) => theme.colors.black};
          stroke-opacity: 0.8;
        }
      }

      &:hover {
        svg path {
          opacity: 1;
          stroke: ${({ theme }) => theme.colors.red};
        }
      }
      @media screen and (min-width: ${({ theme }) =>
          theme.breakPoints.tablet}) {
        color: ${({ theme }) => theme.colors.white};

        svg {
          width: 40px;
          height: 19px;
          margin-right: 18px;

          path {
            stroke: ${({ theme }) => theme.colors.white};
          }
        }

        &:hover {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 26px;
      padding-left: 74px;
      a {
        &:hover {
          background-size: auto;
        }
      }
    }
  }
`;
