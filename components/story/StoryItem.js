import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import InViewComponent from "../common/InView";

const StoryItem = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const imgData = item.images;
  return (
    <WrapItem key={item.id} ref={ref}>
      <InViewComponent>
        <Time className="time">{item.time}</Time>
        <ItemContent className={`${item.className}`} inView={inView}>
          <Title
            className={`description ${item.title.className}`}
            dangerouslySetInnerHTML={{ __html: item.title.text }}
          />
          {item.desc_download && (
            <Link href={item.desc_download.link}>
              <a className="desc-download">
                <svg
                  width="40"
                  height="19"
                  viewBox="0 0 40 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M0 9.5H39M39 9.5L30.5 1M39 9.5L30.5 18"
                    stroke="black"
                    strokeOpacity="0.4"
                    strokeWidth="1.25"
                  />
                </svg>
                <div
                  dangerouslySetInnerHTML={{ __html: item.desc_download.text }}
                />
              </a>
            </Link>
          )}
          {imgData &&
            imgData.map((item) => (
              <ImageBlock key={item.id} className={` ${item.className}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </ImageBlock>
            ))}
        </ItemContent>
      </InViewComponent>
    </WrapItem>
  );
};

export default StoryItem;

const WrapItem = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    margin-bottom: 0;

    .right {
      float: right;
    }

    .mt-10 {
      margin-top: 10px;
    }

    .flex {
      display: flex;
    }

    .align-end {
      align-items: flex-end;
    }

    .justify-between {
      justify-content: space-between;
    }

    .h-252 {
      height: 252px;
    }

    .h-138 {
      height: 138px;
    }

    .w-487 {
      width: 487px;
    }

    .w-525 {
      width: 525px;
    }

    .w-480 {
      width: 480px;
    }

    .box-pl-4 {
      padding-left: 57px;
    }

    .box-pl-1 {
      padding-left: 138px;
    }

    .box-pl-2 {
      padding-left: 132px;
    }

    .box-pl-3 {
      padding-left: 100px;
    }

    .box-pb {
      padding-bottom: 40px;
    }

    .box-pb-1 {
      padding-bottom: 50px;
    }

    .box-pb-2 {
      padding-bottom: 84px;
    }

    .space-nowrap {
      white-space: nowrap;
    }

    .text-left {
      padding-left: 40px;
    }

    .box-mr-1 {
      margin-right: 40px;
    }

    .box-mr-2 {
      margin-right: 20px;
    }

    .box-mt_1 {
      margin-top: -140px;
    }

    .box-mt_2 {
      margin-top: -120px;
    }

    .box-mt-1 {
      margin-top: 74px;
    }

    .mt-showroom {
      margin-top: -400px;
    }

    .image-ab {
      position: absolute;
      right: 26px;
      width: 30%;
      z-index: -1;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    .box-pl-3 {
      padding-left: 150px;
    }

    .box-mr-1 {
      margin-right: 100px;
    }

    .text-left {
      padding-left: 72px;
    }

    .mt-showroom {
      margin-top: -460px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.ipadpro}) {
    .box-pl-3 {
      padding-left: 270px;
    }

    .image-ab {
      width: auto;
    }
  }
`;

const Time = styled.div`
  font-size: 50px;
  letter-spacing: 0.01em;
  padding-bottom: 15px;
  margin-left: -10px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    font-size: 60px;
    line-height: 72px;
    margin-left: -70px;
    padding: 15px 0 25px;
  }
`;

const ItemContent = styled.div`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  position: relative;
  padding-left: 30px;

  &:before {
    content: "";
    width: 1px;
    height: ${({ inView }) => (inView ? "100%" : "0")};
    transition: 950ms;
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .desc-download {
    color: ${({ theme }) => theme.colors.grey};

    @media screen and (min-width: ${({ theme }) =>
        theme.breakPoints.landscape}) {
      svg {
        position: absolute;
        left: -40px;
        margin-top: -19px;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.red};

      svg {
        path {
          stroke: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 26px;
    line-height: 34px;

    span {
      display: block;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    padding-left: 20px;

    &.time-2007 {
      .description {
        white-space: nowrap;
        position: relative;
        left: 33px;
        bottom: 126px;
        z-index: 1;
        padding-left: 150px;

        @media screen and (min-width: ${({ theme }) =>
            theme.breakPoints.ipadpro}) {
          padding-left: 212px;
        }
      }
    }

    &.time-2008 {
      .description {
        padding-bottom: 122px;
      }

      .image-right {
        position: absolute;
        right: 0;
        bottom: 130px;

        @media screen and (min-width: ${({ theme }) =>
            theme.breakPoints.notebook}) {
          right: 140px;
        }

        @media screen and (min-width: ${({ theme }) =>
            theme.breakPoints.ipadpro}) {
          right: 184px;
        }
      }
    }

    &.time-2012 {
      padding-bottom: 145px;
    }

    &.time-2018 {
      padding-bottom: 160px;

      .description {
        padding-bottom: 100px;

        @media screen and (min-width: ${({ theme }) =>
            theme.breakPoints.ipadpro}) {
          padding-bottom: 150px;
        }
      }
    }
  }
`;

const Title = styled.div`
  padding: 15px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    padding: 0 0 0 120px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.ipadpro}) {
    padding: 0 0 0 200px;
  }
`;

const ImageBlock = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    &.image-left {
      padding-left: 212px;
    }
  }
`;
