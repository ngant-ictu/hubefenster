import styled from "styled-components";
import InViewComponent from "../../components/common/InView";
import Layout from "../../components/master/Layout";
import { getRevalidationTTL } from "../../util/common";
import InfoBox from "../../components/referenz/detail/InfoBox";
import Slider from "../../components/referenz/detail/Slider";
import Number from "../../components/referenz/detail/Number";
import Link from 'next/link';
import { useState } from "react";

const ProjektDetail = ({projectDetail}) => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const onClickGallery = (index) => {
    setActiveSliderIndex(index);
  }

  return (
    <Layout header="white">
      <Wrapper>
        <InViewComponent>
          <Number className="outside" number={projectDetail.data.number}/>
          {(projectDetail.data.images.main && projectDetail.data.images.main.length > 0) &&
            <Slider activeIndex={activeSliderIndex} listImg={projectDetail.data.images.main}/>
          }
          <Link href="/referenz" passHref>
            <AllButton>{'Alle Projekte'}</AllButton>
          </Link>
        </InViewComponent>
        <InfoBox
          projectDetail={projectDetail.data}
          onClickGallery={(index) => {onClickGallery(index)}}
        />
      </Wrapper>
    </Layout>
  )
}

export default ProjektDetail;

export async function getStaticPaths() {
  const resProjectList = await fetch(process.env.BE_HOST+`/api/project`);
  const projectList = await resProjectList.json();

  const paths = projectList.data.map(project => {
    return {
      params: { id: project.id.toString() }
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  const resprojectDetail = await fetch( process.env.BE_HOST + `/api/project/` + params.id );
  const projectDetail = await resprojectDetail.json();

  return {
    props: {
      projectDetail,
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  }
}

const Wrapper = styled.div`
  margin-top: 91px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: 82px;
  }
`

const AllButton = styled.a`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  font-size: 17px;
  padding: 2px 10px 5px;
  position: absolute;
  bottom: 65px;
  left: 35px;
  z-index: 1;
  cursor: pointer;
  display: none;

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: block;
  }
`