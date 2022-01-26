import styled from 'styled-components';
import ReferenzItem from './ReferenzItem';

const ReferenzList = ({projectList, viewType}) => {
  return (
    <List>
      {projectList.map((item, key) =>
        <ReferenzItem
          key={key}
          item={item}
          viewType={viewType}
        />
      )}
    </List>
  )
}

export default ReferenzList;

const List = styled.ul`
  counter-reset: item;
  display: flex;
  flex-wrap: wrap;
  max-width: 1290px;
  padding: 0 20px;
  margin: 0 auto;
`
