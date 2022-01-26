import Layout from "../../components/master/Layout";
import Container from "../../components/common/Container";
import MainTitle from "../../components/common/MainTitle";
import Search from "../../components/common/Search";
import { useEffect, useState } from "react";
import ListType from "../../components/hubothek/ListType";
import ListPost from "../../components/hubothek/ListPost";
import { getRevalidationTTL } from "../../util/common";
import styled from "styled-components";

const Index = ({materialListInit, productListInit, gadgetListInit}) => {
  const [hash, setHash] = useState('');
	const [viewType, setViewType] = useState('full');
  const [activeList, setActiveList] = useState('');

  useEffect(() => {
    setHash(window.location.hash.replace('#', ''))
  })

  useEffect(() => {
    setActiveList(hash);
  }, [hash])

  const onChangeViewType = (type) => {
    setViewType(type);
  }

  const onChangeActiveList = (list) => {
    if(list == activeList) {
      setActiveList('');
    } else {
      setActiveList(list);
    }
  }

	return (
		<Layout header="black" layout="black">
			<Container>
				<MainTitle title="Hubothek" isHeading={true}/>
				<Search
            onSearch={(search) => {onSearch(search)}}
            onChangeViewType={(type) => {onChangeViewType(type)}}
            defaultViewType='full'
            layout='hubothek'
          />
      </Container>

      <ListType onChangeActiveList={(list) => onChangeActiveList(list)} activeList={activeList}/>

      <GroupList>
        {materialListInit.data.length > 0 && (activeList == 'material' || activeList == false) &&
          <ListItem>
            <ListPost
              listPost={materialListInit.data}
              title={'Materialien'} listSub={['Holz', 'Metall', 'Baubronze', 'Sägerau', 'Altholz']}
              viewType={viewType}
            />
          </ListItem>
        }

        {productListInit.data.length > 0 && (activeList == 'product' || activeList == false) &&
          <ListItem>
            <ListPost
              type="product"
              listPost={productListInit.data}
              title={'Produkte'} listSub={['Hebeschiebetüren', 'Denkmalpflege', 'Aussentüren', 'Pfostenriegelfassaden']}
              viewType={viewType}
            />
          </ListItem>
        }

        {gadgetListInit.data.length > 0 && (activeList == 'gadget' || activeList == false) &&
          <ListItem>
            <ListPost
              listPost={gadgetListInit.data}
              title={'Gadget'} listSub={['Hebeschiebetüren', 'Denkmalpflege', 'Aussentüren', 'Pfostenriegelfassaden']}
              viewType={viewType}
            />
          </ListItem>
        }
      </GroupList>
		</Layout>
	)
}

export default Index;

export async function getStaticProps() {
  const resMateiralListInit = await fetch(process.env.BE_HOST+`/api/material`);
  const materialListInit = await resMateiralListInit.json();

  const resProductListInit = await fetch(process.env.BE_HOST+`/api/product`);
  const productListInit = await resProductListInit.json();

  const resGadgetListInit = await fetch(process.env.BE_HOST+`/api/gadget`);
  const gadgetListInit = await resGadgetListInit.json();

  return {
    props: {
      materialListInit,
      productListInit,
      gadgetListInit
    }, // will be passed to the page component as props
    revalidate: getRevalidationTTL(),
  }
}

const GroupList = styled.div`
  max-width: 1205px;
  margin: 0 auto;
  padding: 0 20px;
`

const ListItem = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid currentColor;
  }
`