import styled from "styled-components";
import Link from "next/link";
// Data
import data from "../../../../data/menu.json";

const MenuList = () => {
  return (
    <Menu>
      {data.map((item, index) => (
        <MenuItem key={index} className={`col-${index + 1}`}>
          <ul>
            {item.sub.map((child) => (
              <li key={child.id}>
                <Link href={child.link}>
                  <a>{child.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MenuList;

const Menu = styled.div`
  width: 630px;
  display: flex;
  position: relative;
`;

const MenuItem = styled.div`
  width: 25%;

  a {
    padding: 25px 14px;
    display: inline-block;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.grey};

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  &.col-1 {
    a {
      padding-left: 0;
    }
  }

  &.col-2 {
    a {
      padding-left: 17;
    }
  }

  &.col-3 {
    li {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 630px;
        height: 1px;
        background: ${({ theme }) => theme.colors.colorText};
      }
      a {
        padding-left: 18px;
      }
    }
  }

  &.col-4 {
    a {
      padding-left: 54px;
    }
  }
`;
