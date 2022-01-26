import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import InViewComponent from "../common/InView";

const JobList = ({jobList, className, categoryName}) => {
  return (
    <List className={className}>
      <InViewComponent>
        <Heading>{categoryName}</Heading>
      </InViewComponent>
      <InViewComponent>
      {jobList.map((item) => 
        <Item key={item.id}>
          <h3>{item.name.de}</h3>
          <p>{item.description && item.description.de}</p>
          {item.file && <Download>
            <Link href={item.file.link} passHref >
              <a target="_blank">
                <svg width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87.6179 24.7517H0.369141V47.6335H87.6179V24.7517Z" fill="white" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M87.834 47.8481H0.165039V24.5367H87.834V47.8481ZM0.597987 47.4185H87.4011V24.9663H0.572515L0.597987 47.4185Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M42.7078 41.669H8.11133V11.3705L20.4881 0.365479H42.7078V41.669Z" fill="white" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M42.9239 41.8855H7.89453V11.2838L20.4114 0.164978H42.9239V41.8855ZM8.32746 41.4684H42.5037V0.581874H20.5769L8.32746 11.4732V41.4684Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M20.7046 11.5853H8.11133V11.1557H20.2717V0.365479H20.7046V11.5853Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M26.2563 11.3715H25.7979V35.5168H26.2563V11.3715Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M26.0529 35.9219L17.4834 27.4186L17.7763 27.1154L26.0529 35.328L34.2659 27.1785L34.5715 27.4818L26.0529 35.9219Z" fill="black" stroke="black" strokeWidth="0.25" strokeMiterlimit="10"/>
                  <path d="M55.5433 30.4889C58.09 30.4889 59.2614 31.7523 59.2614 33.7233C59.2614 35.6944 58.1027 36.9074 55.5433 36.9074H51.8634V41.9613H51.5068V30.5899L55.5433 30.4889ZM58.9049 33.7233C58.9049 31.8155 57.7462 30.8301 55.5815 30.8301H51.8634V36.5662H55.5815C57.7462 36.5662 58.9049 35.6059 58.9049 33.7233Z" fill="black" stroke="black" strokeWidth="0.25"/>
                  <path d="M64.7238 30.4889C68.0472 30.4889 70.1227 32.5989 70.1227 36.1872C70.1227 39.7756 68.0472 41.9109 64.7238 41.9109H61.0693V30.5395L64.7238 30.4889ZM69.8171 36.1872C69.8171 32.9906 68.0599 30.8301 64.7238 30.8301H61.4513V41.5697H64.7238C68.0599 41.5697 69.7535 39.3839 69.7535 36.1872H69.8171Z" fill="black" stroke="black" strokeWidth="0.25"/>
                  <path d="M72.8224 30.7916V35.8455H78.7943V36.1867H72.8224V41.8724H72.4531V30.501H79.622V30.8421L72.8224 30.7916Z" fill="black" stroke="black" strokeWidth="0.25"/>
                </svg>

              </a>
            </Link>
          </Download> }
        </Item>
      )}
      </InViewComponent>
      
    </List>
  )
}

export default JobList;

const List = styled.div`
`
const Heading = styled.h2`
  font-size: 30px;
  line-height: 40px;
  padding-left: 15px;
  margin-bottom: 8px;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 50px;
    line-height: 60px;
    padding-left: 25px;
  }
`

const Item = styled.div`
  position: relative;
  font-size: 20px;
  line-height: 28px;
  padding: 20px 65px 20px 15px;
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  transition: 0.5s ease;

  h3 {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 5px;
  }

  p {
    color: ${({theme}) => theme.colors.grey};
  }

  &:hover {
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.black};

    p {
      color: ${({theme}) => theme.colors.white};
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    font-size: 24px;
    line-height: 33px;
    padding: 37px 115px 24px 25px;

    h3 {
      font-size: 24px;
      line-height: 28px;
      
    }
  }
`

const Download = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;

  svg {
    width: 50px;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
    top: 42px;
    right: 15px;

    svg {
      width: 88px;
    }
  }
`
