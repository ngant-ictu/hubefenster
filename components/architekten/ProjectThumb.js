import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ProjectThumb = ({ project, title, projectId }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <Item>
      <Link href={"/projekt/" + projectId}>
        <a
          className="dot"
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></a>
      </Link>
      <Thumb show={show}>
        <Inner>
          <Image
            src={project.thumbnail[0].link}
            alt={title.de}
            layout="fill"
            objectFit="contain"
          />
        </Inner>
      </Thumb>
    </Item>
  );
};

export default ProjectThumb;

const Item = styled.div`
  margin: 0 5px;
  transition: transform 0.3s;
  width: 16px;
  position: relative;

  a.dot {
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    display: inline-block;
  }
`;

const Thumb = styled.div`
  position: absolute;
  z-index: 10;
  top: 25px;
  right: 0;
  transition: 0.5s;
  transform: ${(props) => (props.show == true ? "scale(1)" : "scale(0.95)")};
  opacity: ${(props) => (props.show == true ? "1" : "0")};
`;

const Inner = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
`;
