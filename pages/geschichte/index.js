import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/master/Layout";
import Section from "../../components/common/Section";
import MainTitle from "../../components/common/MainTitle";
import InViewComponent from "../../components/common/InView";
import StoryItem from "../../components/story/StoryItem";

import data from "../../data/geschichte.json";

const Index = () => {
  return (
    <Layout header="white">
      <Section>
        <Container>
          <InViewComponent>
            <Heading>Geschichte</Heading>
          </InViewComponent>
          <InViewComponent>
            <Image
              src="/assets/img/geschichte/geschichte.jpg"
              alt="geschichte"
              width={1036}
              height={735}
            />
          </InViewComponent>
        </Container>
        <Timeline>
          <TimelineBody>
            {data.map((item, index) => (
              <StoryItem item={item} key={index} />
            ))}
          </TimelineBody>
        </Timeline>
      </Section>
    </Layout>
  );
};

export default Index;

const Container = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  padding: 130px 0 40px;
  font-weight: 300;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 142px 0 102px 46px;
  }
`;

const Timeline = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding-bottom: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    padding-bottom: 100px;
    padding-left: 70px;
  }
`;
const TimelineBody = styled.div`
  position: relative;
  margin-top: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    margin-top: 140px;
  }
`;
