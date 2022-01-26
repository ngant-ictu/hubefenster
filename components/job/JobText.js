import styled from "styled-components";
import InViewComponent from "../common/InView";

const JobText = ({ item, className }) => {
  return (
    <Item className={className}>
      <InViewComponent>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
      </InViewComponent>
    </Item>
  )
}

export default JobText;

const Item = styled.div`
  font-size: 18px;
  line-height: 22px;

  h3 {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 10px;
  }

  &.block-jobtext {
    &_top {
      max-width: 887px;
      margin: 30px 0 50px;

      @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
        padding-left: 109px;
        margin: 130px 0 136px;

        h3 {
          font-size: 50px;
          line-height: 60px;
          margin-bottom: 44px;
        }
      }
    }

    &_bottom {
      max-width: 938px;
      margin: 50px 0;

      @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
        padding-left: 107px;
        margin: 150px 0 80px;

        h3 {
          margin-bottom: 33px;
        }
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 26px;
    line-height: 34px;

    h3 {
      font-size: 37px;
      line-height: 45px;
    }
  }
`

const Title = styled.h3``;

const Desc = styled.div``