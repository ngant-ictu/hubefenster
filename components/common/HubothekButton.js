import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const BottomEffect = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.0,
    },
  },
};

const HubothekButton = ({ isTop }) => {
  const hubothek = "hubothek";

  return (
    <Button
      animate="visible"
      initial="hidden"
      variants={BottomEffect}
      className="hubothek-btn"
      hubothek={hubothek}
      isTop={isTop}
    >
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
    </Button>
  );
};

export default HubothekButton;

const Button = styled(motion.div)`
  position: fixed;
  bottom: ${(props) => (props.isTop == true ? "auto" : "17px")};
  top: ${(props) => (props.isTop == true ? "140px" : "auto")};
  right: 45px;
  width: 70px;
  height: 70px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  padding: 8px 9px 8px 8px;
  z-index: 10;

  &:before {
    content: "${(props) => props.hubothek}";
    font-size: 15px;
    position: absolute;
    z-index: 20;
    top: -32px;
    left: 50%;
    background: #fff;
    padding: 0px 5px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 83px;
    height: 26px;
    line-height: 23px;
    text-align: center;
    text-transform: capitalize;
    opacity: 0;
    transform: translateX(-50%);
    transition: 0.5s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;
