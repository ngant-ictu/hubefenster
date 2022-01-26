import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import CurrentSlider from './CurrentSlider';
import InViewComponent from '../common/InView';

const CurrentItem = ({item}) => {
  return (
    <CurrentItemComponent>
        <InViewComponent>
        {item.construction_year &&
          <Date>{item.construction_year}</Date>
        }
        <Wrapper>
          <ImageWrapper>
            {(item.images.thumbnail && item.images.thumbnail.length > 0
              && (!item.images.main || item.images.main.length == 0 )) &&
              <Image
                src={item.images.thumbnail[0].link}
                alt={item.name.en}
                width={627}
                height={444}
              />
            }
            {(item.images.main && item.images.main.length > 0 ) &&
              <CurrentSlider listImg={item.images.main}/>
            }
          </ImageWrapper>
          <Info>
            <Title>{item.name.en}</Title>
            <Desc>{item.description.en}</Desc>
            <RealProject>
              <strong>Links</strong>
              {JSON.parse(item.links).map((item, key) =>
                <div key={key}>
                  <Link href={item.link} key={key}>
                    <a href={item.link}>{item.name}</a>
                  </Link>
                </div>
              )}
            </RealProject>
          </Info>
        </Wrapper>
      </InViewComponent>
    </CurrentItemComponent>
  )
}

export default CurrentItem;

const CurrentItemComponent = styled.div`
  width: 100%;
  padding: 20px 0 30px;
  border-bottom: 1px solid currentColor;

  &:first-child {
    border-top: 1px solid currentColor;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    padding-bottom: 70px;
  }
`

const Wrapper = styled.div`
  max-width: 1130px;
  display: flex;
  align-items: center;
  margin: 35px auto 0;
  flex-wrap: wrap;
`

const Title = styled.h3`
  margin: 0;
  font-weight: normal;
  position: relative;
  word-break: break-word;
  font-size: 30px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: 55%;
    margin-bottom: 0;
  }
`

const Info = styled.div`
  width: 100%;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: 45%;
    padding-left: 65px;
  }
`

const Desc = styled.div`
  font-size: 20px;
`

const RealProject = styled.div`
  font-size: 17px;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid currentColor;
`

const Date = styled.div`
  font-size: 17px;
`