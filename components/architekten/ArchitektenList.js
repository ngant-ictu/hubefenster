import styled from "styled-components";
import { useState, useEffect } from "react";
import ArchitektenItem from "./ArchitektenItem";

const ArchitektenList = ({ data }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let dataInit = [];
    for (const [key, value] of Object.entries(data)) {
      value.map((item, index) => {
        if (index == 0) {
          dataInit = [...dataInit, { key, item }];
        } else {
          dataInit = [...dataInit, item];
        }
      });
    }
    setDataList(dataInit);
  }, []);

  return (
    <List>
      {dataList.map((item, index) => (
        <ArchitektenItem key={index} dataItem={item} />
      ))}
    </List>
  );
};

export default ArchitektenList;

const List = styled.div`
  position: relative;
  padding-bottom: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 200px;
  }
`;
