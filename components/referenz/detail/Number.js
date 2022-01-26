import styled from 'styled-components';

const Number = ({number, className}) => {
  return (
    <NumberComponent className={className}>{number}</NumberComponent>
  )
}

export default Number;

const NumberComponent = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  border: 1px solid currentColor;
  padding-bottom: 5px;
  top: 40px;
  right: 40px;
  background-color: ${props => props.theme.colors.white};

  &.inside {
    position: static;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      position: absolute;
    }
  }

  &.outside {
    position: absolute;
    display: none;
    z-index: 2;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      display: flex;
    }
  }
`
