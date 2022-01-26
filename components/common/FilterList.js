import React, { useState } from 'react';
import styled from 'styled-components';

const FilterList = ({filters, layout, onFilter}) => {
  const [activePosition, setActivePosition] = useState();

  const filterAction = (positionID) => {
    onFilter(positionID);
    setActivePosition(positionID);
  }

  return (<>
    <List layout={layout}>
      <Item onClick={() => filterAction('all')} className={activePosition == 'all' ? 'active' : ''}>Alle</Item>
      {filters.map((item, key) =>
        <Item key={key} onClick={() => filterAction(item.id)} className={activePosition == item.id ? 'active' : ''}>{item.name.en}</Item>
      )}
    </List>
  </>)
}

export default FilterList;

const List = styled.ul`
  display: flex;
  max-width: ${props => props.layout == "team" ? "600px" : "500px"};
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: auto;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    margin-bottom: 0;
    flex-wrap: wrap;
  }
`

const Item = styled.li`
  font-size: 17px;
  border: 1px solid ${props => props.theme.colors.black};
  margin-right: 0;
  margin-bottom: 10px;
  padding: 2px 10px 5px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover,
  &.active {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }

  &:last-child {
    margin-right: 0;
  }

  &:not(:first-child) {
    border-left-width: 0;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    margin-right: 10px;

    &:not(:first-child) {
      border-left-width: 1px;
    }
  }
`
