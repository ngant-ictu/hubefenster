
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ListPost = ({listPost, title, listSub, viewType}) => {
  const postPerPage = 14;
  const [postLoadMore, setPostLoadMore] = useState(listPost.slice(0, postPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(listPost.length/postPerPage);

  const LoadMore = (page) => {
    setCurrentPage(page);
    setPostLoadMore([...postLoadMore, ...listPost.slice(currentPage*postPerPage, currentPage*postPerPage + postPerPage)]);
  }

  return (
    <>
      <MainTitle>
        <TypeTitle>{title}</TypeTitle>
        <TypeSub>
          {listSub.map((item, key) =>
            <span key={key}>{item}</span>
          )}
        </TypeSub>
      </MainTitle>
      <List>
        {postLoadMore.map((item, key) => {
            return (
              <Item key={key} className={viewType}>
                <Link href="#">
                  <a>
                    {viewType == 'full' &&
                      <ImageWrapper>
                        <Image
                          src={item.images.thumbnail[0].link}
                          alt={item.title}
                          width={213}
                          height={213}
                        />
                      </ImageWrapper>
                    }
                    <PostTitle>{item.name.de}</PostTitle>
                  </a>
                </Link>
              </Item>
            )
          }
        )}
        {currentPage < maxPage &&
          <Item className={`${viewType} loadmore`} onClick={() => LoadMore(currentPage+1)}>
            <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.6839 16.7926L18.5144 0.161469C18.3505 1.60423e-06 18.1867 1.58991e-06 18.0229 1.57559e-06C17.859 1.56126e-06 17.5313 0.161469 17.3675 0.322936C17.2036 0.484403 17.2036 0.807338 17.2036 0.968806C17.2036 1.13027 17.3675 1.29174 17.5313 1.45321L36.3731 17.7614L0.819452 17.7614C0.327926 17.7614 0.00024256 18.0843 0.000242517 18.5687C0.000242475 19.0531 0.327926 19.3761 0.819452 19.3761L36.3731 19.3761L17.3675 35.6843C17.0398 36.0072 17.0398 36.4916 17.3675 36.8146C17.5313 36.976 17.859 37.1375 18.0228 37.1375C18.1867 37.1375 18.3505 37.1375 18.5144 36.976L37.6839 20.3449C37.6839 20.3449 38.5031 19.699 38.5031 18.5687C38.5031 17.4385 37.6839 16.7926 37.6839 16.7926Z" fill="white" />
            </svg>
          </Item>
        }
      </List>
    </>
  )
}

export default ListPost;

const MainTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`

const ImageWrapper = styled.div`
  font-size: 0;
`

const TypeTitle = styled.h3`
  font-size: 24px;
  line-height: 30px;
`

const TypeSub = styled.div`
  font-size: 17px;
  line-height: 25px;
  margin-left: 40px;
  margin-top: 5px;

  span {
    &:not(:first-child) {
      &:before {
        content: ', ';
      }
    }
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  width: calc(50% - 10px);
  text-align: center;
  margin-bottom: 30px;

  &:nth-child(2n) {
    margin-left: 20px;
  }

  &.loadmore {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;

    svg {
      path {
        transition: 0.5s ease;
      }
    }

    &:hover {
      svg {
        path {
          fill: ${props => props.theme.colors.red};
        }
      }
    }
  }

  &.list {
    &:not(.loadmore) {
      border-bottom: 1px solid currentColor;
      padding-bottom: 10px;
    }

    &.loadmore {
      svg {
        width: 20px;
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: calc(20% - 20px);

    &:nth-child(2n) {
      margin-left: 0;
    }

    &:not(:nth-child(5n + 1)) {
      margin-left: 25px;
    }
  }
`

const PostTitle = styled.h3`
  font-size: 15px;
  position: relative;
  padding: 10px 10px 0;
  text-align: left;
`