import react, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import useMobile from '../../hook/useMobile';
import MainMenu from './menu/Menu';
import MegaMenu from './menu/megamenu/MegaMenu';
import MenuMobile from './menu/mobile/MenuMobile';
import SearchGlobal from '../elements/SearchGlobal';

const Header = ({sticky, layout}) => {

  const isMobile = useMobile().isMobile;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  const handleMouseEnter = () => {
    setIsOpen(true);
  }
  const handleMouseLeave = () => {
    setIsOpen(false);
  }
  const notHandle = () => {
    return;
  }

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden') && (document.body.classList.add('open-menu-mobile'));
    !isOpen && (document.body.style.overflow = 'unset') && (document.body.classList.remove('open-menu-mobile'));
  }, [isOpen])

  return (

      <Container
        onMouseLeave={isMobile? notHandle : handleMouseLeave}
        className={`${layout} ${sticky ? 'is-sticky' : ''} ${isOpen ? 'show-mega' : ''}`}
      >
        <Inner
          onMouseOver={isMobile? notHandle : handleMouseEnter}
          className={`${layout} header-inner`}
        >
          {/* Col */}
          <Col>
          <Link href={'/'} passHref>
            <Logo layout={layout == 'white' ? 'black':'white'}>
              <Svg />
            </Logo>
          </Link>
          </Col>
          {/* End Col */}

          {/* Col */}
          <Col className='is-menu' layout={layout}>
            <MainMenu />
          </Col>
          {/* End Col */}

          {/* Col */}
          <Col className='is-hamburger'>
            <SearchGlobal />

            <HamburgerIcon onClick={handleToggle} className={isOpen? 'open' : ''}>
                <span></span>
            </HamburgerIcon>
          </Col>
          {/* End Col */}
        </Inner>
        {!isMobile && <MegaMenu /> }
        {isMobile && <MenuMobile/> }
      </Container>
  )
};

const Svg = () => {
  return(
    <svg width="107" height="48" viewBox="0 0 107 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M92.7013 5.52736H98.9138C100.382 5.52736 101.42 6.51986 101.42 7.6526C101.42 9.19168 100.396 9.94684 98.9138 9.94684H92.7013V5.52736ZM92.7013 14.4706H99.3578C103.042 14.4706 105.91 11.2342 105.91 7.68496C105.91 4.18965 103.046 1 99.3901 1H88.1968V25.6793H92.7013V21.4289L104.786 25.9203L104.818 21.1556L92.7013 16.6642V14.4706ZM84.8453 5.52736V5.4914H84.899V1H67.7798V25.6793H84.899V21.1556H72.2843V15.6033H83.6171V11.0796H72.2843V5.52736H84.8453ZM59.1718 21.3965H51.7311V18.5521H59.1718C59.8879 18.5521 60.7079 18.962 60.7079 19.9581C60.7084 20.1561 60.6683 20.3521 60.5899 20.5338C60.5115 20.7154 60.3966 20.8789 60.2524 21.0139C60.1082 21.1489 59.9378 21.2526 59.7519 21.3185C59.5659 21.3843 59.3684 21.4109 59.1718 21.3965V21.3965ZM58.6956 5.28643C59.4475 5.28643 60.1959 5.69637 60.1959 6.69246C60.1959 7.68856 59.4117 8.06254 58.6956 8.06254H51.7311V5.28643H58.6956ZM58.9677 14.3699H51.7311V12.2447H58.6275C62.2082 12.2447 64.6682 9.9828 64.6682 6.69246C64.6682 3.50281 62.1617 1 58.5595 1H47.2266V25.6793H58.9677C62.5484 25.6793 65.2124 23.2125 65.2124 19.9257C65.2124 16.4628 62.62 14.3735 58.9677 14.3735V14.3699ZM44.0112 1H39.5067V16.2219C39.5067 17.5857 38.9672 18.8936 38.007 19.858C37.0467 20.8224 35.7443 21.3641 34.3863 21.3641C33.0283 21.3641 31.7259 20.8224 30.7657 19.858C29.8054 18.8936 29.2659 17.5857 29.2659 16.2219V1H24.7614V16.2219C24.7614 17.4912 25.0104 18.7482 25.4941 19.9209C25.9778 21.0936 26.6867 22.1592 27.5805 23.0568C28.4742 23.9544 29.5353 24.6664 30.703 25.1521C31.8708 25.6379 33.1223 25.8879 34.3863 25.8879C35.6503 25.8879 36.9018 25.6379 38.0696 25.1521C39.2373 24.6664 40.2984 23.9544 41.1921 23.0568C42.0859 22.1592 42.7948 21.0936 43.2785 19.9209C43.7622 18.7482 44.0112 17.4912 44.0112 16.2219V1ZM21.5209 1H17.0057V11.0688H5.5045V1H1V25.6793H5.5045V15.6105H17.0057V25.6793H21.5209V1Z" fill="white" stroke="white" strokeWidth="0.25" />
    <path d="M76.2481 35.3792L76.2732 34.2357C76.0021 34.204 75.7296 34.1872 75.4568 34.1854C73.183 34.1854 71.9692 35.0556 71.3748 36.645L71.2029 36.6199C71.2929 36.1459 71.3337 35.6639 71.3247 35.1815V34.2105H70.2505V46.6347H71.3247V39.529C71.3247 36.7457 72.6388 35.2786 74.8409 35.2786C75.312 35.2718 75.7827 35.3054 76.2481 35.3792V35.3792ZM57.5641 39.4032C57.7861 36.886 59.2685 34.883 61.9934 34.883H62.0901C64.8365 34.883 66.3475 36.9687 66.4442 39.4032H57.5641ZM62.065 33.9373C58.6275 33.9373 56.4756 36.5228 56.4756 40.3489C56.4756 44.1751 58.4306 46.908 62.065 46.908C65.3306 46.908 67.3608 44.7216 67.7941 42.1613H66.7199C66.5429 43.2431 65.982 44.224 65.1408 44.9227C64.2996 45.6214 63.235 45.9907 62.1438 45.9623H62.0686C59.2506 45.9623 57.5677 43.7256 57.5426 40.597V40.3489L67.5363 40.3237V40.0504C67.5363 36.5228 65.5096 33.9373 62.0686 33.9373H62.065ZM55.3226 45.4912C54.8577 45.6759 54.3616 45.7687 53.8617 45.7645C52.5511 45.7645 52.3041 44.9446 52.3041 43.6069V35.1311H54.9001V34.2105H52.3148V30.7332H51.2406V34.2105H49.2855V35.1311H51.2406V43.5026C51.2406 45.466 51.7347 46.739 53.7148 46.739C54.2638 46.7328 54.8077 46.6319 55.3226 46.4405V45.4912ZM39.7215 42.1469H38.6079C38.7082 44.905 40.3983 46.8936 43.4812 46.8936C46.2026 46.8936 48.0108 45.5523 48.0108 43.2976C48.0108 41.4097 46.5248 40.3417 44.5948 39.8922L42.74 39.4463C40.6597 38.9501 40.2336 38.0547 40.2336 37.0837C40.2336 35.7424 41.4474 34.8506 43.3523 34.8506C45.1069 34.8506 46.7898 35.9294 46.933 38.2776H48.018C47.8962 35.4008 45.7693 33.9049 43.3917 33.9049C40.8853 33.9049 39.0949 35.1707 39.0949 37.1413C39.0949 38.5797 39.8862 39.752 42.2388 40.3237L44.0685 40.7696C45.7514 41.1904 46.8901 41.9383 46.8901 43.3552C46.8901 44.8439 45.601 45.9119 43.449 45.9119C41.297 45.9119 39.811 44.5203 39.6893 42.111L39.7215 42.1469ZM26.3154 34.2105V46.6347H27.3896V39.0831C27.3896 36.6486 29.001 34.8866 31.4752 34.8866H31.5468C33.4517 34.8866 35.1597 35.8791 35.1597 38.5617V46.6383H36.2339V38.4826C36.2339 35.0304 34.0318 33.9373 31.8046 33.9373C29.2337 33.9373 27.8981 35.3756 27.4505 36.5947L27.2786 36.5695C27.3853 36.0978 27.4346 35.6148 27.4255 35.1311V34.2105H26.3154ZM13.6183 39.4032C13.8403 36.886 15.3263 34.883 18.0476 34.883H18.1443C20.8907 34.883 22.4018 36.9687 22.4984 39.4032H13.6183ZM18.1193 33.9373C14.6818 33.9373 12.5298 36.5228 12.5298 40.3489C12.5298 44.1751 14.4849 46.908 18.1193 46.908C21.3848 46.908 23.4151 44.7216 23.8484 42.1613H22.7741C22.5972 43.2431 22.0363 44.224 21.1951 44.9227C20.3539 45.6214 19.2893 45.9907 18.198 45.9623H18.1193C15.3013 45.9623 13.6183 43.7256 13.5933 40.597V40.3489L23.587 40.3237V40.0504C23.587 36.5228 21.5603 33.9373 18.1193 33.9373ZM11.495 31.0533V30.0859H1V46.6275H2.07421V38.6588H10.4494V37.6879H2.08853V31.0533H11.495Z" fill="white" stroke="white" strokeWidth="0.25" />
  </svg>
  )
}

export default Header;

const Container = styled.div`
  padding: 15px 20px;
  border-top: solid 6px ${({theme}) => theme.colors.black};
  border-bottom: solid 1px ${({theme}) => theme.colors.black};
  background-color: ${({theme}) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  transition: all 500ms ease;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.desktop}) {
    border-top: solid 0;
    border-bottom: solid 0;
    background-color: transparent;
    width: 100%;
    padding: 0 20px;
    
    &.is-sticky {
      &.white {
        background-color: ${({theme}) => theme.colors.white};
      }

      &.transparent {
        .header-inner {
          background-color: ${({theme}) => theme.colors.white};
          border: solid 1px ${({theme}) => theme.colors.black};


          .is-menu {
            li,
            a {
              color: ${({theme}) => theme.colors.black};

              &:hover {
                color: ${({theme}) => theme.colors.red};
              }
            }
          }

          svg {
            path {
              fill: ${({theme}) => theme.colors.black};
              stroke: ${({theme}) => theme.colors.black};
            }
          }
        }
      }
    }

    &.white {
      border-top: solid 20px ${({theme}) => theme.colors.white};
      background-color: ${({theme}) => theme.colors.white};

      .header-inner {
        border: solid 1px ${({theme}) => theme.colors.black};
      }
    }

    &.black {
      background-color: ${({theme}) => theme.colors.black};
      border-bottom: solid 1px ${({theme}) => theme.colors.white};
      border-top: solid 20px ${({theme}) => theme.colors.black};
    }

    &.transparent {
      border-top: solid 20px ${({theme}) => theme.colors.white};

      .header-inner {
        background-color: transparent;
        border-top: solid 1px ${({theme}) => theme.colors.black};
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.landscape}) {
    &.show-mega {
      background-color: ${({theme}) => theme.colors.white};

      .header-inner {
        border: 1px solid ${({theme}) => theme.colors.black} !important;
        border-bottom-color: ${({theme}) => theme.colors.white}  !important;

        a {
          color: ${({theme}) => theme.colors.black};

          &:hover {
            color: ${({theme}) => theme.colors.red};
          }
        }

        svg {
          path {
            fill: ${({theme}) => theme.colors.black};
            stroke: ${({theme}) => theme.colors.black};
          }
        }
      }
      .header-mega {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        pointer-events: unset;
      }
    }
  }


`;

const Inner =styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 500ms ease;
  border: solid 1px transparent;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.desktop}) {
    padding: 14px 36px;
  }
`;

const Col = styled.div`
  &.is-menu {
    display: none;

    > ul {
      display: flex;

      li {
        padding: 0 20px;
      }
    }

    li,
    a {
      font-size: 22px;
      line-height: 26px;
      color: ${props => props.layout == 'white' ? "#000" : "#fff"};

      &:hover {
        color: ${({theme}) => theme.colors.red}
      }
    }
  }

  &.is-hamburger {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.landscape}) {
    &.is-hamburger {
      display: none;
    }

    &.is-menu {
      display: block;
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.notebook}) {
    ul {
      li {
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.landscape}) {
    &.is-menu {
      ul {
        li {
          padding: 0 34px;

          &:last-child {
            padding-right: 25px;
          }
        }
      }
    }
  }

`;

const Logo =styled.a`
  display: block;

  svg {
    path {
      fill: ${({theme}) => theme.colors.black};
      stroke: ${({theme}) => theme.colors.black};
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakPoints.desktop}) {
    svg {
      path {
        fill: ${props => props.layout == 'black' ? "#000" : "#fff"};
        stroke: ${props => props.layout == 'black' ? "#000" : "#fff"};
      }
    }
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;

  span {
    background: ${({theme}) => theme.colors.black};
    width: 24px;
    height: 1px;
    position: relative;
    right: 0;
    margin-bottom: 4px;
    transition: .3s ease;

    &::before,
    &::after {
      content: '';
      background: ${({theme}) => theme.colors.black};
      position: absolute;
      width: 24px;
      height: inherit;
      transition: .3s ease;
    }
    &::before {
      transform: translateY(-10px);
    }

    &::after {
      transform: translateY(9px);
    }
  }

  &.open {
    span {
      transform: translateX(-40px);
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(32px, -32px);
      }

      &::after {
        transform: rotate(-45deg) translate(31px, 31px)
      }
    }
  }

`