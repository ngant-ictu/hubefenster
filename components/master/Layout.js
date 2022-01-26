import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Layout = ({ children, logo, header, layout, className }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let browser = window;
      const handleScroll = () => {
        browser.pageYOffset > 120 ? setSticky(true) : setSticky(false);
      };

      browser.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <LayoutComponent className={`${className} layout`} layout={layout}>
      <Head>
        <title>Huberfenster</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header logo={logo} layout={header} sticky={sticky} />
      <Main>
        <Inner className="inner-layout">{children}</Inner>
      </Main>
      <Footer />
    </LayoutComponent>
  );
};

export default Layout;

const Main = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: calc(100vh - 92px);
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 20px 20px 0;
  }
`;

const LayoutComponent = styled.div`
  background-color: ${(props) =>
    props.layout == "black" ? props.layout : "transparent"};
  color: ${(props) =>
    props.layout == "black"
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.colorText};

  &.architekten-page {
    background: linear-gradient(
      rgba(255, 0, 0, 0) 0%,
      rgba(255, 0, 0, 0.58) 100%
    );

    .inner-layout {
      border-bottom: 0;
    }

    .footer {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  ${Main} {
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
      padding: ${(props) => (props.layout == "black" ? "0" : "20px 20px 0")};
    }
  }
`;

const Inner = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    border: solid 1px ${({ theme }) => theme.colors.black};
    border-top: solid 0;
    min-height: calc(100vh - 193px);
  }
`;
