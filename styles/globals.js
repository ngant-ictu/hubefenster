import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'noigrotesk';
    src: url('/assets/fonts/NoiGrotesk-UltraLight.eot');
    src: url('/assets/fonts/NoiGrotesk-UltraLight.eot') format('embedded-opentype'),
    url('/assets/fonts/NoiGrotesk-UltraLight.woff2') format('woff2'),
    url('/assets/fonts/NoiGrotesk-UltraLight') format('woff'),
    url('/assets/fonts/NoiGrotesk-UltraLight.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'noigrotesk';
    font-size: 17px;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({theme}) => theme.colors.colorText}
  }

  .layout {
    position: relative;
  }

  h1 {
    font-size: 45px;
    line-height: 45px;
    margin: 0;

    @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
      font-size: 65px;
      line-height: 65px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 500ms ease;

    &:hover,
    &:active {
      color: ${({theme}) => theme.colors.red};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: inherit;
  }

  p {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

   /* Menu mobile */
   .open-menu-mobile {
    background-color: ${({theme}) => theme.colors.white};

    .section-menu-mobile {
      transform: translateX(0);
      overflow: scroll;
    }

    @media screen and (min-width: ${({theme}) => theme.breakPoints.landscape}) {
      overflow: unset !important;
    }
   }


  .btn-viewmore {
    font-size: 21px;
    @media screen and (min-width: ${({theme}) => theme.breakPoints.tablet}) {
      font-size: 24px;
    }

    a {
      color: ${({theme}) => theme.colors.grey2};
      line-height: 24px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 18px;
      }

      &:hover {
        color: ${({theme}) => theme.colors.red};

        svg path {
          opacity: 1;
          stroke: ${({theme}) => theme.colors.red};
        }
      }
    }
  }
`

export default GlobalStyle;
