import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const SubMenu = ({ item, index }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <NavLink className={subnav ? "show-sub" : ""}>
      <div className="item-parent">
        <Link href={item.link}>
          <a>{item.title}</a>
        </Link>
        <div
          className={` ${subnav ? "open" : ""} item-parent_dropdown`}
          onClick={showSubnav}
        >
          <span></span>
          <span></span>
        </div>
      </div>
      {item.sub && (
        <DropwDown className={` sub-${item.id} sub-child`} sidebar={subnav}>
          {item.sub.map((sub, index) => {
            return (
              <li key={index}>
                <Link href={sub.link}>
                  <a>{sub.title}</a>
                </Link>
              </li>
            );
          })}
        </DropwDown>
      )}
    </NavLink>
  );
};

export default SubMenu;

const NavLink = styled.li`
  padding: 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  overflow: hidden;

  a {
    font-size: 30px;
    line-height: 30px;
    padding: 21px 0;
  }
  .item-parent {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_dropdown {
      position: relative;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;

      span {
        background: ${({ theme }) => theme.colors.black};
        width: 25px;
        height: 1px;
        position: absolute;
        right: 0;
        transition: 350ms;

        &:last-child {
          transform: rotate(90deg);
        }
      }

      &.open {
        span {
          transform: rotate(135deg);

          &:last-child {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
`;

const DropwDown = styled.ul`
  &.sub-child {
    height: ${({ sidebar }) => (sidebar ? "213px" : "0")};
    padding-bottom: ${({ sidebar }) => (sidebar ? "21px" : "0")};
    visibility: ${({ sidebar }) => (sidebar ? "visible" : "hidden")};
    opacity: ${({ sidebar }) => (sidebar ? "1" : "0")};
    transition: ${({ sidebar }) => (sidebar ? "500ms" : "500ms")};

    &.sub-0 {
      height: ${({ sidebar }) => (sidebar ? "165px" : "0")};
    }
    &.sub-2 {
      height: ${({ sidebar }) => (sidebar ? "261px" : "0")};
    }

    a {
      color: ${({ theme }) => theme.colors.grey};
      padding: 9px 0;
      display: block;
      margin-left: auto;

      &:hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
