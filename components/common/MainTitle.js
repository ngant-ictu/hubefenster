import styled from 'styled-components';

const MainTitle = ({title, isHeading = false}) => {
  return (<>
    {isHeading &&
      <Heading>
        <Title>{title}</Title>
      </Heading>
    }
    {!isHeading &&
      <Title>{title}</Title>
    }
  </>)
}

export default MainTitle;

const Title = styled.h2`
  font-size: 40px;
  font-weight: normal;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 65px;
  }
`

const Heading = styled.div`
  padding: 130px 0 40px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    padding: 160px 0 60px 30px;
  }
`;