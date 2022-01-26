import React from 'react';
import CurrentList from "../../components/current/CurrentList";
import Layout from "../../components/master/Layout";
import MainTitle from "../../components/common/MainTitle";
import styled from "styled-components";
import Container from "../../components/common/Container";
import { getRevalidationTTL } from "../../util/common";
import useMobile from '../../hook/useMobile';
import HubothekButton from '../../components/common/HubothekButton';

const Aktuelle = ({currentListInit}) => {
  const isMobile = useMobile().isMobile;

  return (
    <Layout header="white">
      <Spacing>
        <Container>
          <MainTitle title="Aktuelle Projekte" isHeading={true}/>
        </Container>
        <CurrentList currentList={currentListInit.data}/>
      </Spacing>
      { !isMobile && <HubothekButton isTop={true} />}
    </Layout>
  )
}

export default Aktuelle;

export async function getStaticProps() {
  const resCurrentListInit = await fetch(process.env.BE_HOST+`/api/project/current`);
  const currentListInit = await resCurrentListInit.json();

  return {
    props: {
      currentListInit
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  }
}

const Spacing = styled.div`
  padding-bottom: 100px;
`