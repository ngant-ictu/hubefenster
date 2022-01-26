import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import CustomContainer from "../common/Section";
import { useInView } from "react-intersection-observer";

// Data
import data from "../../data/footer.json";

const Footer = () => {
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      if (document.querySelector(".hubothek-btn")) {
        document.querySelector(".hubothek-btn").style.display = "none";
      }
    } else {
      if (document.querySelector(".hubothek-btn")) {
        document.querySelector(".hubothek-btn").style.display = "block";
      }
    }
  }, [inView]);

  return (
    <FooterWrapper ref={ref} className="footer">
      <CustomContainer layout="grip" borderTop>
        <Menu>
          {data.map((data) => (
            <li key={data.id}>
              <Link href={data.link}>
                <a>{data.title}</a>
              </Link>
            </li>
          ))}
        </Menu>
      </CustomContainer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div``;

const Menu = styled.ul`
  list-style-type: none;
  padding: 30px 0;
  margin: 0;

  li {
    padding: 5px 0;
  }

  li,
  a {
    font-size: 16px;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    justify-content: flex-end;
    padding: 35px 0;

    li {
      padding: 0 25px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.large}) {
    padding: 35px 40px;

    li {
      padding: 0 25px;
    }
  }
`;
