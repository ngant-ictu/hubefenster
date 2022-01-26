import styled from "styled-components";
import Link from "next/link";
import InViewComponent from "../common/InView";
import SvgArrow from "./SvgArrow";

const ContentText = (props) => {
  return (
    <WrapItem className={props.className}>
      <InViewComponent>
        <ItemTitle>{props.itemData.title}</ItemTitle>
        <ItemIntroText
          className="intro-text"
          dangerouslySetInnerHTML={{ __html: props.itemData.description }}
        ></ItemIntroText>
        {props.itemData.link && (
          <ItemViewMore className="btn-viewmore">
            <Link href={props.itemData.link}>
              <a>
                <SvgArrow />
                <span>{props.itemData.title_viewmore}</span>
              </a>
            </Link>
          </ItemViewMore>
        )}
      </InViewComponent>
    </WrapItem>
  );
};

export default ContentText;

const WrapItem = styled.div`
  margin: 0 auto;

  &.section-infoblock {
    padding-top: 50px;
    max-width: 824px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      padding-top: 150px;
    }

    @media screen and (min-width: ${({ theme }) =>
        theme.breakPoints.landscape}) {
      padding-top: 190px;
    }

    &-bottom {
      padding-bottom: 100px;
      .intro-text {
        margin-bottom: 51px;
      }

      .btn-viewmore {
        padding-left: 13%;
      }
      @media screen and (min-width: ${({ theme }) =>
          theme.breakPoints.tablet}) {
        padding-bottom: 282px;
      }
    }
  }
`;

const ItemTitle = styled.h3`
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 50px;
    line-height: 60px;
  }
`;

const ItemIntroText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 25px;
  line-height: 36px;
  max-width: 824px;
  margin-bottom: 33px;

  p {
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 39px;
    line-height: 49px;
    letter-spacing: 0.01em;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.red};

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;

const ItemViewMore = styled.div`
  padding-left: 18%;
`;
