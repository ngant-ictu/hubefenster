import styled from "styled-components";
import dataListType from '../../data/category.json';
import Image from "next/image";
import Link from "next/link";

const ListType = ({onChangeActiveList, activeList}) => {
  return (
    <List>
      {dataListType[1].data.map((item, key) =>
        <Item key={key} onClick={() => onChangeActiveList(item.key)} className={`${activeList == item.key ? 'active' : ''}`}>
          <Link href={`${item.key == 'configurator' ? '/configurator' : '#'+item.key}`}>
            <a>
              <ImageWrapper>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={180}
                />
              </ImageWrapper>
              <Title>{item.title}</Title>
            </a>
          </Link>
        </Item>
      )}
    </List>
  )
}

export default ListType;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 880px;
  margin: 0 auto 55px;
`

const Title = styled.h3`
  font-size: 17px;
  position: relative;
  text-align: center;
  padding-top: 10px;
  margin-top: 25px;
  color: currentColor;

  &::before {
    position: absolute;
    content: '';
    width: 110px;
    height: 1px;
    background-color: currentColor;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Item = styled.li`
  padding: 0 20px;
  width: 50%;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: 25%;
  }

  &:hover,
  &.active {
    a {
      color: ${props => props.theme.colors.red};
    }
  }
`

const ImageWrapper = styled.div``