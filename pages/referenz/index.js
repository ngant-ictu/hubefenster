import React, { useState } from 'react';
import ReferenzList from "../../components/referenz/ReferenzList";
import Layout from "../../components/master/Layout";
import MainTitle from "../../components/common/MainTitle";
import styled from "styled-components";
import FilterList from "../../components/common/FilterList";
import Search from "../../components/common/Search";
import Container from "../../components/common/Container";
import { getRevalidationTTL } from "../../util/common";
import axios from 'axios';
import Loading from '../../components/common/Loading';

const Referenz = ({projectListInit, filterListInit}) => {
  const [viewType, setViewType] = useState('full');
  const [projectList, setProjectList] = useState(projectListInit.data);
  const [loadingList, setLoadingList] = useState(false);

  const onChangeViewType = (type) => {
    setViewType(type);
  }

  const onSearch = (search) => {
    setLoadingList(true);
    if(search.length >= 2) {
      setTimeout(() => {
        axios.get(process.env.BE_HOST+`/api/project?search=`+search).then(res => {
          setProjectList(res.data.data);
          setLoadingList(false);
        });
      }, 500);
    } else if(search.length == 0){
      setProjectList(projectListInit.data);
      setLoadingList(false);
    } else {
      setLoadingList(false);
    }
  }

  const getFilterData = (tagID) => {
    setLoadingList(true);
    if(tagID == 'all') {
      setProjectList(projectListInit.data);
      setLoadingList(false);
    } else {
      axios.get(process.env.BE_HOST+`/api/project/filter?tag=`+tagID).then(res => {
        setProjectList(res.data.data);
        setLoadingList(false);
      });
    }
  }

  return (
    <Layout header="white">
      <Spacing>
        <Container>
          <MainTitle title="Projekte" isHeading={true}/>
          <FilterList
            filters={filterListInit.data}
            onFilter={(tagID) => {getFilterData(tagID)}}
          />
          <Search
            onSearch={(search) => {onSearch(search)}}
            onChangeViewType={(type) => {onChangeViewType(type)}}
            defaultViewType='full'
          />
        </Container>
        <Loading className={loadingList ? 'loading' : ''}>
          <ReferenzList projectList={projectList} viewType={viewType}/>
        </Loading>
      </Spacing>
    </Layout>
  )
}

export default Referenz;

export async function getStaticProps() {
  const resProjectListInit = await fetch(process.env.BE_HOST+`/api/project`);
  const projectListInit = await resProjectListInit.json();

  const resFilterListInit = await fetch(process.env.BE_HOST+`/api/project/list-tags`);
  const filterListInit = await resFilterListInit.json();

  return {
    props: {
      projectListInit,
      filterListInit
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  }
}

const Spacing = styled.div`
  padding-bottom: 100px;
`