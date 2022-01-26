import React, { useEffect } from "react";
import styled from "styled-components";
import useMobile from "../../../hook/useMobile";
import Section from "../../common/Section";
import categoryData from "../../../data/category.json";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import InViewComponent from "../../common/InView";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

const CategoryList = () => {
  SwiperCore.use([Pagination, Autoplay]);

  const cateDesc = categoryData[0].cate_desc;
  const productsData = categoryData[1].data;
  const checkMobile = useMobile();
  const isMobile = checkMobile.isMobile;

  return (
    <WrapCategoryContainer>
      <Section layout="grid">
        <CategoryInner>
          <InViewComponent delay={0.5}>
            <CategoryDesc dangerouslySetInnerHTML={{ __html: cateDesc }} />
          </InViewComponent>
          {!isMobile && (
            <CategoryListItem>
              <InViewComponent delay={0.8}>
                {productsData.map((item) => (
                  <CategoryItem
                    key={item.id}
                    title={item.title}
                    category_link={item.link}
                    category_image={item.image}
                  />
                ))}
              </InViewComponent>
            </CategoryListItem>
          )}
          {isMobile && (
            <CategoryListItem>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                centeredSlides
                loop
              >
                {productsData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CategoryItem
                      key={item.id}
                      title={item.title}
                      category_link={item.link}
                      category_image={item.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </CategoryListItem>
          )}
        </CategoryInner>
      </Section>
    </WrapCategoryContainer>
  );
};

export default CategoryList;

const WrapCategoryContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 70px 0;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    padding: 220px 0 239px 0;
  }
`;

const CategoryInner = styled.div`
  max-width: 950px;
  margin: 0 auto;

  div.swiper-container {
    padding: 50px 0 85px;
  }
`;

const CategoryDesc = styled.div`
  max-width: 772px;
  font-size: 26px;
  line-height: 34px;
  margin-bottom 50px;

  a {
    text-decoration: underline;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    margin-bottom: 118px;
  }
`;

const CategoryListItem = styled.div`
  .swiper {
    &-container {
      padding: 50px 0;
    }

    &-pagination-bullet {
      width: 14px;
      height: 14px;
      background: #c4c4c4;
      opacity: 1;

      &-active {
        background: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    > div {
      display: flex;
      max-width: 950px;
      margin: auto;
    }
  }
`;
