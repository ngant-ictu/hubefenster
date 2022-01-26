import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import SvgArrow from "../SvgArrow";

const CategoryItem = (props) => {
  return (
    <WrapItem>
      <ItemInner>
        <ImageBlock>
          <Image
            src={props.category_image}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        </ImageBlock>
        <ItemTitle>
          <Link href={props.category_link}>
            <a>
              <SvgArrow />
              <span>{props.title}</span>
            </a>
          </Link>
        </ItemTitle>
      </ItemInner>
    </WrapItem>
  );
};

export default CategoryItem;

const WrapItem = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    width: 25%;
    display: flex;
    align-items: end;
    justify-content: center;
  }
`;

const ItemInner = styled.div`
  padding: 0 30px;
  text-align: center;
`;

const ImageBlock = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.h3`
  font-size: 22px;
  line-height: 30px;
  position: relative;
  min-width: 110px;

  a {
    line-height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
      path {
        opacity: 1;
        stroke: ${({ theme }) => theme.colors.white};
        stroke-opacity: 1;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.red};

      svg path {
        stroke: ${({ theme }) => theme.colors.red};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    font-size: 17px;
    line-height: 26px;

    a {
      padding: 0 !important;
      background: none !important;
      line-height: 34px;

      svg {
        display: none;
      }
    }

    &:before {
      content: "";
      width: 110px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      margin: auto;
    }
  }
`;
