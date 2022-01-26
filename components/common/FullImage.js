import styled from "styled-components";
import Image from "next/image";

const ImageFullScreen = (props) => {
  return (
    <ImageBlock className={props.className}>
      <Image src={props.src} alt={props.alt} objectFit="cover" layout="fill" />
    </ImageBlock>
  );
};

export default ImageFullScreen;

const ImageBlock = styled.div`
  height: 250px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 500px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.notebook}) {
    height: 887px;
  }
`;
