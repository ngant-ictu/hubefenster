import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useMobile from "../../../hook/useMobile";
import SearchGlobal from "../../elements/SearchGlobal";

// Data

const IconList = () => {
  const isMobile = useMobile().isMobile;

  return (
    <Items>
      <Hubothek>
        <Link href={"#"}>
          <a>
            <Image
              src="/assets/img/icons/icon-hubothek.png"
              width={52}
              height={52}
              alt="hubothek"
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </Link>
      </Hubothek>
      <Social>
        <li>
          <Link href={"#"}>
            <a>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.594 14.4668C24.8303 15.0645 23.8674 15.7949 20.4807 18.252C19.8166 18.75 18.5881 19.8457 17.426 19.8457C16.2307 19.8457 15.0354 18.75 14.3381 18.252C10.9514 15.7949 9.98849 15.0645 9.22482 14.4668C9.09201 14.3672 8.92599 14.4668 8.92599 14.6328V21.4062C8.92599 22.3027 9.62326 23 10.5197 23H24.3322C25.1955 23 25.926 22.3027 25.926 21.4062V14.6328C25.926 14.4668 25.7268 14.3672 25.594 14.4668ZM17.426 18.75C18.1897 18.7832 19.2854 17.7871 19.8498 17.3887C24.2658 14.2012 24.5979 13.9023 25.594 13.1055C25.7932 12.9727 25.926 12.7402 25.926 12.4746V11.8437C25.926 10.9805 25.1955 10.25 24.3322 10.25L10.5197 10.25C9.62326 10.25 8.92599 10.9805 8.92599 11.8438V12.4746C8.92599 12.7402 9.0256 12.9727 9.22482 13.1055C10.2209 13.9023 10.5529 14.2012 14.969 17.3887C15.5334 17.7871 16.6291 18.7832 17.426 18.75Z"
                  fill="black"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <a>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.46447 16L4.46447 5.48828H1.19493L1.19493 16H4.46447ZM2.81212 4.08203C3.86681 4.08203 4.71056 3.20312 4.71056 2.14844C4.71056 1.12891 3.86681 0.285156 2.81212 0.285156C1.79259 0.285156 0.948841 1.12891 0.948841 2.14844C0.948841 3.20312 1.79259 4.08203 2.81212 4.08203ZM16.6637 16H16.6988V10.2344C16.6988 7.42187 16.066 5.24219 12.7613 5.24219C11.1793 5.24219 10.1246 6.12109 9.66759 6.92969H9.63243V5.48828L6.50353 5.48828L6.50353 16H9.77306V10.7969C9.77306 9.42578 10.0192 8.125 11.7067 8.125C13.3942 8.125 13.4293 9.67188 13.4293 10.9023V16H16.6637Z"
                  fill="black"
                />
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <a>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 0C1.34315 0 0 1.34315 0 3L0 14.14C0 15.7968 1.34314 17.14 3 17.14H13.8677C15.5246 17.14 16.8677 15.7968 16.8677 14.14V3C16.8677 1.34315 15.5246 0 13.8677 0L3 0ZM12.1836 1.90637C12.7012 1.90637 13.1207 2.33269 13.1207 2.85858C13.1207 3.38447 12.7012 3.81079 12.1836 3.81079C11.6661 3.81079 11.2465 3.38447 11.2465 2.85858C11.2465 2.33269 11.6661 1.90637 12.1836 1.90637ZM3.74862 8.57111C3.74862 5.94162 5.84637 3.81 8.43408 3.81C11.0218 3.81 13.1195 5.94162 13.1195 8.57111C13.1195 11.2006 11.0218 13.3322 8.43408 13.3322C5.84637 13.3322 3.74862 11.2006 3.74862 8.57111ZM8.43276 5.71548C6.88014 5.71548 5.62148 6.99446 5.62148 8.57216C5.62148 10.1499 6.88014 11.4288 8.43276 11.4288C9.98539 11.4288 11.244 10.1499 11.244 8.57216C11.244 6.99446 9.98539 5.71548 8.43276 5.71548Z"
                  fill="black"
                />
              </svg>
            </a>
          </Link>
        </li>
      </Social>
      <Bottom>
        {isMobile && (
          <Link href={"#"}>
            <a className="divario">Divario</a>
          </Link>
        )}
        <ul className="language">
          <li className="active">
            <Link href={"#"}>
              <a>DE</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>EN</a>
            </Link>
          </li>
        </ul>
        {!isMobile && <SearchGlobal />}
      </Bottom>
    </Items>
  );
};

export default IconList;

const Items = styled.div`
  padding-bottom: 23px;
`;
const Hubothek = styled.div`
  width: 70px;
  height: 70px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  padding: 8px 9px 8px 8px;
  margin-bottom: 20px;
`;

const Social = styled.ul`
  display: flex;
  margin-bottom: 14px;

  li a {
    width: 34px;
    height: 34px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;

    path {
      transition: all 0.3s ease;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.red};

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;

const Bottom = styled.div`
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    display: flex;
    align-items: center;
  }

  .divario {
    font-size: 20px;
    text-decoration: underline;
  }

  ul.language {
    text-align: right;

    @media screen and (min-width: ${({ theme }) =>
        theme.breakPoints.landscape}) {
      text-align: none;
    }

    li {
      display: inline-block;
      a {
        display: block;
        width: 33px;
        height: 33px;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.colors.black};
        border-radius: 50%;
        margin-right: 15px;
      }

      &.active a,
      &:hover a {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const SearchLabel = styled.label`
  width: 178px;
  border: 1px solid currentColor;
  display: flex;
  align-items: center;
  font-size: 0;
  padding: 0 5px;
`;

const SearchInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  font-size: 12px;
  line-height: 24px;
  padding: 0;
  margin-left: 10px;
  width: 140px;

  &:focus,
  &:active,
  &:hover {
    outline: none;
  }

  &::placeholder {
    font-size: 12px;
  }
`;
