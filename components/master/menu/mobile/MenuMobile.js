import styled from "styled-components";
import Link from "next/link";
import IconList from "../IconList";
import SubMenu from "./SubMenu";

// Data
import data from "../../../../data/menu.json";

const MenuMobile = () => {
  return (
    <Menu className="section-menu-mobile">
      <Nav>
        {data.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </Nav>
      <IconList />
    </Menu>
  );
};

export default MenuMobile;

const Menu = styled.div`
  position: fixed;
  max-height: 100vh;
  height: 100%;
  width: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 16px;
  padding: 0 20px 110px 20px;
  transform: translateX(100%);
  transition: 350ms;
  z-index: 9;
`;

const Nav = styled.ul`
  margin-bottom: 50px;
  padding-top: 18px;
`;
