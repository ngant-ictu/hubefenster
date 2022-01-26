import styled from "styled-components";
import IconList from "../IconList";
import MenuList from "./MenuList";

const MegaMenu = () => {
  return (
    <WrapMega className="header-mega">
      <IconList />
      <MenuList />
    </WrapMega>
  );
};

export default MegaMenu;

const WrapMega = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 26px 0 32px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 0;
  position: absolute;
  left: 20px;
  right: 20px;
  transition: transform 0.3s;
  transform: translateY(-50px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
`;
