import useMobile from "../hook/useMobile";
import itemData from "../data/homecontent.json"
import dataInfo from "../data/infoblock.json"
import Section from "../components/common/Section";
import Layout from "../components/master/Layout";
import ContentText from "../components/elements/ContentText";
import ContentImage from "../components/elements/ContentImage";
import Category from "../components/elements/category/CategoryList";
import SliderList from "../components/home/slider/SliderList";
import HubothekButton from "../components/common/HubothekButton"


const Index = () => {
  const isMobile = useMobile().isMobile;
  return (
    <Layout header="transparent">
      <SliderList />
      <Section layout='grid' >
        <ContentText itemData={itemData[0]} className="section-infoblock section-infoblock-top" />
      </Section>
      <ContentImage itemData={dataInfo[0]}/>
      <Category />
      <Section layout='grid'>
        <ContentText itemData={itemData[1]} className="section-infoblock section-infoblock-bottom" />
      </Section>
      { !isMobile && <HubothekButton />}
    </Layout>
  )
}

export default Index;
