import styled from "styled-components";
import Layout from "../../components/master/Layout";
import Section from "../../components/common/Section";
import { getRevalidationTTL } from "../../util/common";
import ArchitektenList from "../../components/architekten/ArchitektenList";
import InViewComponent from "../../components/common/InView";
import HubothekButton from "../../components/common/HubothekButton";
import useMobile from "../../hook/useMobile";
import MainTitle from "../../components/common/MainTitle";
import Container from "../../components/common/Container";

const Index = ({ architektenListInit }) => {
  const isMobile = useMobile().isMobile;

  return (
    <Layout header="white" className="architekten-page">
      <Section>
        <Container>
          <InViewComponent>
            <MainTitle title="Architekten" isHeading={true} />
          </InViewComponent>
        </Container>
        <Wrapper>
          <ArchitektenList data={architektenListInit.data} />
        </Wrapper>
      </Section>
      {!isMobile && <HubothekButton isTop={true} />}
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const resArchitektenListInit = await fetch(
    process.env.BE_HOST + `/api/architect`
  );
  const architektenListInit = await resArchitektenListInit.json();

  if (!architektenListInit) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      architektenListInit,
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  };
}

const Wrapper = styled.div`
  max-width: 1247px;
  margin: 0 auto;
`;
