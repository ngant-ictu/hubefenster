import styled from 'styled-components';
import CurrentItem from './CurrentItem';

const CurrentList = ({currentList}) => {
  return (
    <List>
      {currentList.map((item, key) =>
        <CurrentItem
          key={key}
          item={item}
        />
      )}
    </List>
  )
}

export default CurrentList;

const List = styled.ul`
  max-width: 1290px;
  padding: 0 20px;
  margin: 20px auto 0;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    margin-top: 50px;
  }
`
