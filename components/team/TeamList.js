import styled from 'styled-components'
import Image from "next/image"

const TeamList = ({teamList}) => {
  return (<List>
    {teamList.map((item, key) =>
      <Item key={key}>
        <Image
          src={process.env.BE_HOST+item.avatar}
          alt={item.full_name}
          width={257}
          height={264}
        />
        <Info>
          {item.full_name &&
            <p>{item.full_name}</p>
          }
          {item.position && <>
            <p className="position">{item.position.map((positionItem, positionKey) =>
              <span key={positionKey}>{positionItem.name.en}</span>
            )}</p>
          </>}
          {(item.email || item.phone_number) &&
            <p>
              {item.email &&
                <a href={`mailto:` + item.email}>Mail</a>
              }
              {(item.email && item.phone_number) &&
                <span>&nbsp;|&nbsp;</span>
              }
              {item.phone_number &&
                item.phone_number
              }
            </p>
          }
        </Info>
      </Item>
    )}
  </List>)
}

export default TeamList;

const List = styled.ul`
  counter-reset: item;
  display: flex;
  flex-wrap: wrap;
  max-width: 1250px;
  margin: 0 auto 50px;
  padding: 0 20px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    margin-bottom: 100px;
  }
`

const Item = styled.li`
  width: calc(50% - 15px);
  margin-left: 30px;
  margin-bottom: 35px;

  &:nth-child(2n+1) {
    margin-left: 0;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    width: calc(33.33% - 27px);
    margin-left: 40px;

    &:nth-child(2n+1) {
      margin-left: 40px;
    }

    &:nth-child(3n+1) {
      margin-left: 0;
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.desktop}) {
    width: calc(25% - 45px);
    margin-left: 60px;

    &:nth-child(2n+1),
    &:nth-child(3n+1) {
      margin-left: 60px;
    }

    &:nth-child(4n+1) {
      margin-left: 0;
    }
  }
`

const Info = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.colors.black};
  border-top: 1px solid currentColor;
  font-size: 16px;
  line-height: 1.4;
  padding-top: 10px;

  .position {
    span {
      &:nth-child(n+2) {
        &::before {
          content: ' / ';
        }
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 20px;
    margin-top: 20px;
    padding-top: 15px;
  }
`
