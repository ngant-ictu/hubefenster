import styled from "styled-components";
import useMobile from "../../hook/useMobile";
import { useState } from "react";

const SearchGlobal = () => {
  const isMobile = useMobile().isMobile;

  const [openSearch, setOpenSearch] = useState(false);

  const handleOpen = () => setOpenSearch(!openSearch);

  return (
    <>
      {isMobile && (
        <IconMobile onClick={handleOpen}>
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0307 17.1112C15.2243 18.8973 12.7409 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 12.3534 19.187 14.5169 17.8266 16.2251L25.1785 22.8448C25.4223 23.0642 25.4414 23.4403 25.2213 23.6847C25.0012 23.9292 24.6252 23.9494 24.3815 23.73L17.0307 17.1112ZM18.8267 10C18.8267 14.8253 14.9058 18.7937 10 18.7937C5.09424 18.7937 1.17326 14.8253 1.17326 10C1.17326 5.17466 5.09424 1.20626 10 1.20626C14.9058 1.20626 18.8267 5.17466 18.8267 10Z"
              fill="#1A1A1A"
            />
          </svg>
        </IconMobile>
      )}
      <Form className={isMobile ? "form-search-mobile" : ""} show={openSearch}>
        <SearchLabel htmlFor="search" className="hihi">
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0028 6.22875C12.0028 9.07656 9.58058 11.4575 6.50142 11.4575C3.42226 11.4575 1 9.07656 1 6.22875C1 3.38094 3.42226 1 6.50142 1C9.58058 1 12.0028 3.38094 12.0028 6.22875ZM11.0693 10.661C9.89519 11.7718 8.28188 12.4575 6.50142 12.4575C2.91078 12.4575 0 9.66879 0 6.22875C0 2.78871 2.91078 0 6.50142 0C10.092 0 13.0028 2.78871 13.0028 6.22875C13.0028 7.69609 12.4732 9.04492 11.5872 10.1094L16.37 14.2352C16.5282 14.3717 16.5405 14.6058 16.3974 14.758C16.2543 14.9103 16.01 14.9231 15.8518 14.7866L11.0693 10.661Z"
              fill="#1A1A1A"
            />
          </svg>
          <SearchInput
            type="text"
            id="search"
            name="search"
            placeholder="Suche"
            className="search-input"
          />
        </SearchLabel>
      </Form>
    </>
  );
};

export default SearchGlobal;

const Form = styled.form`
  &.form-search-mobile {
    position: absolute;
    right: 20px;
    left: 20px;
    bottom: -17px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 12;
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(5px)")};
    opacity: ${({ show }) => (show ? "1" : "0")};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transition: 350ms ease-in;
  }
`;

const IconMobile = styled.div`
  margin-right: 10px;
`;

const SearchLabel = styled.label`
  width: 100%;
  border: 1px solid currentColor;
  display: flex;
  align-items: center;
  font-size: 0;
  padding: 0 5px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    width: 178px;
  }
`;

const SearchInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  font-size: 15px;
  line-height: 30px;
  margin-left: 10px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    font-size: 12px;
    line-height: 24px;
    width: 140px;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
  }

  &::placeholder {
    font-size: 15px;

    @media screen and (min-width: ${({ theme }) =>
        theme.breakPoints.landscape}) {
      font-size: 12px;
    }
  }
`;
