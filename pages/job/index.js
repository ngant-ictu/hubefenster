import React, { useState } from "react";
import { getRevalidationTTL } from "../../util/common";
import styled from "styled-components";
import Layout from "../../components/master/Layout";
import Section from "../../components/common/Section";
import InViewComponent from "../../components/common/InView";
import Member from "../../components/job/JobVideo";
import JobList from "../../components/job/JobList";
import JobText from "../../components/job/JobText";

import data from "../../data/job.json";

const Index = ({ jobListInit }) => {
  const jobList = jobListInit.data;
  const description = data[0];
  const member = data[1].members;
  const dataList2 = data[2];

  return (
    <Layout header="white">
      <Section>
        <Container>
          <InViewComponent>
            <Heading>Jobs</Heading>
          </InViewComponent>
          <InViewComponent>
            <Desc>{description.desc}</Desc>
          </InViewComponent>
        </Container>
        <MemberList>
          {member.map((item, index) => (
            <Member key={index} item={item} />
          ))}
        </MemberList>
        <Wrapper>
          <JobList jobList={jobList} categoryName="Offene Stellen"></JobList>
          <Contact>
            <InViewComponent>
              Bewerbungen bitte schicken an: Huber Fenster AG, Jacqueline
              Nossack, St.Gallerstrasse 57, 9100 Herisau. Bei Fragen stehen wir
              Ihnen gerne unter 071 354 88 11 zur Verfügung.
            </InViewComponent>
          </Contact>
          <JobText item={data[3]} className="block-jobtext_top"></JobText>
          <JobList
            jobList={dataList2.data}
            categoryName={dataList2.category}
            className="offene-lehrstellen"
          ></JobList>
          <JobText item={data[4]} className="block-jobtext_bottom"></JobText>
        </Wrapper>
      </Section>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const resJobListInit = await fetch(process.env.BE_HOST + `/api/job`);
  const jobListInit = await resJobListInit.json();

  if (!jobListInit) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      jobListInit,
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  };
}

const Container = styled.div`
  max-width: 875px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  padding: 130px 0 57px;
  font-weight: 300;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 147px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 26px;
    line-height: 34px;
    margin-bottom: 120px;
  }
`;

const MemberList = styled.div`
  max-width: 1105px;
  margin: 0 auto;
  margin-bottom: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 160px;
  }
`;
const Wrapper = styled.div`
  max-width: 1227px;
  margin: 0 auto;
`;

const Contact = styled.div`
  max-width: 870px;
  padding: 20px 15px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.01em;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 30px 0 30px 40px;
  }
`;
