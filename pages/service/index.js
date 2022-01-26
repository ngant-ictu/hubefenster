import Layout from "../../components/master/Layout";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Section from "../../components/common/Section";
import ContentText from "../../components/elements/ContentText";
import MainTitle from "../../components/common/MainTitle";
import InViewComponent from "../../components/common/InView";

// Data
import data from "../../data/service.json";

const Index = () => {
  return (
    <Layout header="white">
      <Section>
        <Container>
          <Heading>
            <InViewComponent delay={0.3}>
              <MainTitle title="Service" />
            </InViewComponent>
          </Heading>
          <Service>
            {data[0].list.map((data) => (
              <ServiceItem key={data.id}>
                <InViewComponent delay={0.4}>
                  <ImageBlock>
                    <Image
                      src={data.icon}
                      alt={data.title}
                      width={100}
                      height={100}
                      quality={100}
                      layout="responsive"
                    />
                  </ImageBlock>
                  <h4>
                    <Link href={"#"}>
                      <a>{data.title}</a>
                    </Link>
                  </h4>
                  <p>{data.description}</p>
                </InViewComponent>
              </ServiceItem>
            ))}
          </Service>
          <IframeVideo>
            <InViewComponent>
              <iframe
                width="902"
                height="543"
                src="https://www.youtube.com/embed/2fShmXkMhiQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </InViewComponent>
          </IframeVideo>

          <ContentText itemData={data[1]} className="desc desc-exzellenter" />
          <ContentText itemData={data[2]} className="desc desc-wartung" />
          <Desc className="desc desc-wartungsarbeiten">
            <InViewComponent delay={0.3}>
              <p>{data[3].description}</p>
              <ul>
                {data[3].list.map((item) => (
                  <li key={item.id}>{item.content}</li>
                ))}
              </ul>
            </InViewComponent>
          </Desc>
          <ContentText itemData={data[4]} className="desc desc-grosse" />
        </Container>
      </Section>
    </Layout>
  );
};

export default Index;

const Heading = styled.h1`
  padding: 130px 0 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 163px 0 60px 52px;
  }
`;

const Service = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding-top: 110px;
  }
`;

const Container = styled.div`
  max-width: 1112px;
  margin: 0 auto;

  .desc {
    max-width: 902px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 28px;
    padding-top: 30px;

    h3 {
      font-size: 30px;
      line-height: 38px;
      margin-bottom: 20px;
    }

    .intro-text {
      font-size: 20px;
      line-height: 34px;
      letter-spacing: normal;
      max-width: none;
      margin-bottom: 0;
    }

    ul {
      padding-top: 33px;
      padding-left: 38px;

      li {
        list-style: disc;
      }
    }

    &-grosse {
      margin-bottom: 50px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      padding-top: 30px;
      font-size: 26px;
      line-height: 34px;
      padding-right: 56px;

      h3 {
        font-size: 39px;
        line-height: 47px;
        margin-bottom: 43px;
      }

      .intro-text {
        font-size: 26px;
      }

      &-exzellenter {
        margin-bottom: 34px;
        padding-top: 175px;
      }

      &-wartung {
        padding-top: 45px;

        h3 {
          margin-bottom: 25px;
        }
      }

      &-wartungsarbeiten {
        padding-top: 33px;
      }

      &-grosse {
        padding-top: 100px;
        margin-bottom: 100px;

        h3 {
          margin-bottom: 33px;
        }
      }
    }
  }
`;

const ServiceItem = styled.div`
  padding-bottom: 60px;

  h4 {
    font-size: 20px;
    line-height: 29px;
    font-weight: 300;
    margin: 0;
    padding: 15px 0 0;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: calc(33.33% - 20px);
    max-width: 298px;

    h4 {
      margin-top: 20px;
      font-size: 24px;
    }
    p {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

const ImageBlock = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.colors.black};
  padding: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    max-width: 280px;
  }
`;

const IframeVideo = styled.div`
  text-align: center;

  iframe {
    width: 100%;
    height: 300px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 177px;
    iframe {
      height: 543px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    iframe {
      width: 902px;
    }
  }
`;

const Desc = styled.div``;
