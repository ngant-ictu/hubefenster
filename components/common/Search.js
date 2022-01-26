import React, { useState } from 'react';
import styled from 'styled-components';

const viewTypeList = [
  {
    'type': 'full',
    'label': 'Full View'
  },
  {
    'type': 'list',
    'label': 'List View'
  }
];

const Search = ({defaultViewType, onChangeViewType, onSearch, layout}) => {
  const [viewType, setViewType] = useState(defaultViewType);

  const changeViewTypeAction = (type) => {
    onChangeViewType(type);
    setViewType(type);
  }

  const onSearchAction = (search) => {
    search.preventDefault();
    onSearch(search.target.value);
  }

  return (<>
    <SearchWrapper layout={layout}>
      <View>
        {viewTypeList.map((item, key) =>
          <ViewItem key={key} onClick={() => {changeViewTypeAction(item.type)}} className={viewType == item.type ? 'active' : ''}><span>{item.label}</span></ViewItem>
        )}
      </View>
      <form>
        <SearchLabel htmlFor="search">
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0028 6.22875C12.0028 9.07656 9.58058 11.4575 6.50142 11.4575C3.42226 11.4575 1 9.07656 1 6.22875C1 3.38094 3.42226 1 6.50142 1C9.58058 1 12.0028 3.38094 12.0028 6.22875ZM11.0693 10.661C9.89519 11.7718 8.28188 12.4575 6.50142 12.4575C2.91078 12.4575 0 9.66879 0 6.22875C0 2.78871 2.91078 0 6.50142 0C10.092 0 13.0028 2.78871 13.0028 6.22875C13.0028 7.69609 12.4732 9.04492 11.5872 10.1094L16.37 14.2352C16.5282 14.3717 16.5405 14.6058 16.3974 14.758C16.2543 14.9103 16.01 14.9231 15.8518 14.7866L11.0693 10.661Z" fill="#1A1A1A" />
          </svg>
          <SearchInput type="text" id="search" name="search" placeholder="Suche" onChange={(e) => onSearchAction(e)}/>
        </SearchLabel>
      </form>
    </SearchWrapper>
  </>)
}

export default Search;

const View = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: flex-end;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    justify-content: flex-start;
  }
`

const ViewItem = styled.li`
  font-size: 17px;
  margin-right: 2px;
  line-height: 1.1;
  padding: 2px 7px 5px;
  cursor: pointer;
  transition: 0.5s ease;

  span {
    display: inline-block;
    border-bottom: 1px solid currentColor;
  }

  &:hover,
  &.active {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`

const SearchLabel = styled.label`
  border: 1px solid currentColor;
  display: flex;
  align-items: center;
  font-size: 0;
  padding: 0 5px;
  background-color: ${props => props.theme.colors.white};
`

const SearchInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  font-size: 15px;
  line-height: 24px;
  padding: 0;
  margin-left: 10px;

  &:focus,
  &:active,
  &:hover {
    outline: none;
  }

  &::placeholder {
    font-size: 15px;
  }
`

const SearchWrapper = styled.div`
  max-width: 210px;
  margin-left: auto;
  margin-bottom: ${props => props.layout == 'hubothek' ? '10px' : '50px'};

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    margin-bottom: ${props => props.layout == 'hubothek' ? '85px' : '100px'};
  }

  ${ViewItem} {
    &:hover,
    &.active {
      background-color: ${props => props.layout == 'hubothek' ? props => props.theme.colors.white : props => props.theme.colors.black};
      color: ${props => props.layout == 'hubothek' ? props => props.theme.colors.black : props => props.theme.colors.white};
    }
  }
`