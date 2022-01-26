import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const ReferenzItem = ({item, viewType}) => {
  return (<>
    {viewType == 'full' &&
      <Item className="full">
        <Link href={'/projekt/'+item.id}>
          <a>
            {item.images.thumbnail.length > 0 &&
              <Image
                src={item.images.thumbnail[0].link}
                alt={item.name.en}
                width={400}
                height={330}
              />
            }
            <Title><span>{item.name.en}</span></Title>
          </a>
        </Link>
      </Item>
    }
    {viewType == 'list' &&
      <Item className="list">
        <Link href="#">
          <a>
            <Title><span>{item.name.en}</span></Title>
            {(item.construction_year && item.architects.length > 0) &&
              <Info><span>{item.construction_year}{(item.construction_year && item.architects.length > 0) &&  ' - '}{item.architects.length > 0 && item.architects[0].name}</span></Info>
            }
          </a>
        </Link>
      </Item>
    }
  </>)
}

export default ReferenzItem;

const Title = styled.h3`
  margin: 0;
  font-weight: normal;
  position: relative;
  padding-left: 65px;
  word-break: break-word;

  &::before {
    content: counter(item);
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    left: 0;
    width: 45px;
    height: 45px;
    padding-bottom: 3px;
    color: currentColor;
  }

  span {
    display: inline-block;
    padding: 0 10px;
  }
`;

const Info = styled.div`
  padding: 0 0 0 65px;
  font-size: 18px;

  span {
    display: inline-block;
    padding: 0 10px;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 20px;
  }
`

const Item = styled.li`
  counter-increment: item;
  font-size: 0;
  width: 100%;

  a {
    display: inline-block;
    color: ${props => props.theme.colors.black};
    transition: 0.5s ease;

    &:hover {
      color: currentColor;
    }
  }

  img {
    max-width: 100%;
  }

  &.full {
    ${Title} {
      font-size: 24px;
      padding-top: 22px;
      padding-bottom: 25px;

      &::before {
        transition: background 0.5s ease;
      }

      span {
        transition: background 0.5s ease;
        padding-bottom: 5px;
      }
    }
  }

  &.list {
    border-bottom: 1px solid currentColor;

    a {
      display: block;
      padding: 30px 0;
    }

    ${Title} {
      margin-bottom: 5px;
      font-size: 24px;

      &::before {
        top: 2px;
        border-color: currentColor;
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: calc(33.33% - 20px);
    margin-left: 30px;
    margin-bottom: 30px;

    a {
      &:hover {
        color: ${props => props.theme.colors.white};
      }
    }

    &:nth-child(3n+1) {
      margin-left: 0;
    }

    &.full {
      ${Title} {
        padding-right: 35px;
      }

      a {
        &:hover {
          ${Title} {
            span {
              background-color: ${props => props.theme.colors.black};
            }

            &::before {
              background-color: ${props => props.theme.colors.black};
            }
          }
        }
      }
    }

    &.list {
      padding-bottom: 0;
      transition: 0.5s ease;

      &:hover {
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
      }

      ${Title} {
        font-size: 24px;

        &::before {
          top: -6px;
        }
      }

      a {
        padding: 30px 20px;
      }
    }
  }
`
