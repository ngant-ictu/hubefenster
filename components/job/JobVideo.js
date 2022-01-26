import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import InViewComponent from "../common/InView";

const Member = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <WrapItem>
      <InViewComponent delay={0.3}>
        <ImageBlock onClick={togglePopup}>
          <Image
          src={item.image}
          alt={item.name}
          width={355}
          height={576}
          layout="responsive"
          />
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.65" cx="37.9705" cy="37.7514" r="37.5447" fill="white"/>
            <path d="M52.9883 37.7514L30.4615 50.7572L30.4615 24.7455L52.9883 37.7514Z" fill="white"/>
          </svg>
        </ImageBlock>
      </InViewComponent>
      <Content>
        <InViewComponent>
          <h3>{item.name}</h3>
          <p>{item.position}</p>
          <p>{item.major}</p>
        </InViewComponent>
      </Content>
      {isOpen && <Modal>
        <IframeWrapper>
        <iframe src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </IframeWrapper>
        <CloseButton onClick={togglePopup}></CloseButton>
      </Modal> }
    </WrapItem>
  )
}

export default Member;

const WrapItem = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.mobile}) {
    width: calc(50% - 10px);
    max-width: 355px;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: calc(33.33% - 10px);
  }
`

const ImageBlock = styled.div`
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: '';
    background: ${({theme}) => theme.colors.black};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.7;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 76px;
    height: 76px;
    z-index: 2;

    circle {
      transition: 0.5s ease;
    }
  }

  &:hover {
    svg {
      circle {
        fill: ${props => props.theme.colors.black};
      }
    }
  }

`

const Content = styled.div`
  padding: 45px 40px;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  bottom: 0;
  z-index: 2;

  h3 {
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 5px;

    @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
      font-size: 20px;
    }

    @media screen and (min-width: ${({theme}) => theme.breakPoints.landscape}) {
      font-size: 24px;
    }
  }
  p {
    margin-bottom: 5px;
    line-height: 20px;
  }
`

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const CloseButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.white};;
    top: 50%;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
  }
`

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`