import Layout from "../../components/master/Layout";
import styled from "styled-components";
import MainTitle from "../../components/common/MainTitle";
import TeamList from "../../components/team/TeamList";
import FilterList from "../../components/common/FilterList";
import React, { useState } from "react";
import axios from "axios";
import { getRevalidationTTL } from "../../util/common";
import Loading from "../../components/common/Loading";
import Container from "../../components/common/Container";

const Index = ({teamListInit, filterListInit}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [teamList, setTeamList] = useState(teamListInit.data);
  const [loadingList, setLoadingList] = useState(false);

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  }

  const getFilterData = (positionID) => {
    setLoadingList(true);
    if(positionID == 'all') {
      setTeamList(teamListInit.data);
      setLoadingList(false);
    } else {
      axios.get(process.env.BE_HOST+`/api/team-member/filter-by-position?position=`+positionID).then(res => {
        setTeamList(res.data.data);
        setLoadingList(false);
      });
    }
  }

  return (
    <Layout header="white">
      <Container>
        <Heading>
          <MainTitle title="Unser Team" />
        </Heading>
        <Filter>
          <FilterButton className={openFilter ? 'active' : ''} onClick={toggleFilter}>Ansprechspersonen</FilterButton>
          {openFilter &&
            <FilterList
              filters={filterListInit.data}
              layout="team"
              onFilter={(positionID) => {getFilterData(positionID)}}
            />
          }
        </Filter>
      </Container>
      <Loading className={loadingList ? 'loading' : ''}>
        <TeamList teamList={teamList}/>
      </Loading>
    </Layout>
  )
}

export default Index;

export async function getStaticProps() {
  const resTeamListInit = await fetch(process.env.BE_HOST+`/api/team-member`);
  const teamListInit = await resTeamListInit.json();

  const resFilterListInit = await fetch(process.env.BE_HOST+`/api/team-member/list-position`);
  const filterListInit = await resFilterListInit.json();

  if (!teamListInit) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      teamListInit,
      filterListInit
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  }
}

const Heading = styled.div`
  padding: 130px 0 40px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    padding: 160px 0 60px 30px;
  }
`;

const FilterButton = styled.div`
  font-size: 17px;
  border: 1px solid ${props => props.theme.colors.black};
  margin-bottom: 20px;
  padding: 2px 10px 5px;
  cursor: pointer;
  transition: 0.5s ease;
  display: inline-block;

  &:hover,
  &.active {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`

const Filter = styled.div`
  margin-bottom: 50px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    margin-bottom: 100px;
  }
`