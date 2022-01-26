import styled from "styled-components";
import ProjectThumb from "./ProjectThumb";
import InViewComponent from "../common/InView";

const ArchitektenItem = ({ dataItem }) => {
  return (
    <Item>
      <InViewComponent delay={0.3}>
        {dataItem.key && (
          <Inner>
            <Group>{dataItem.key}</Group>
            {dataItem.item.prefix && (
              <h3>
                {dataItem.item.prefix} {dataItem.item.name}
              </h3>
            )}
            {!dataItem.item.prefix && <h3>{dataItem.item.name}</h3>}
            <p>{dataItem.item.address}</p>
            {dataItem.item.projects && (
              <Project>
                {dataItem.item.projects.map((thumb, index) => (
                  <ProjectThumb
                    key={index}
                    project={thumb.images}
                    title={thumb.title}
                    projectId={thumb.id}
                  />
                ))}
              </Project>
            )}
          </Inner>
        )}
        {!dataItem.key && (
          <Inner>
            <h3>
              {dataItem.prefix} {dataItem.name}
            </h3>
            <p>{dataItem.address}</p>

            {dataItem.projects && (
              <Project>
                {dataItem.projects.map((thumb, index) => (
                  <ProjectThumb
                    key={index}
                    project={thumb.images}
                    title={thumb.title}
                    projectId={thumb.id}
                  />
                ))}
              </Project>
            )}
          </Inner>
        )}
      </InViewComponent>
    </Item>
  );
};

export default ArchitektenItem;

const Item = styled.div`
  position: relative;

  > div {
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: calc(50% - 25px);

    &:nth-child(2n) {
      margin-left: 50px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.landscape}) {
    width: calc(33.3% - 30px);
    margin-left: 45px;

    &:nth-child(2n) {
      margin-left: 45px;
    }

    &:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
`;

const Inner = styled.div`
  padding: 36px 0 20px 72px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  height: 100%;

  h3 {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
  }

  p {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.01em;
  }
`;

const Group = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  top: 35px;
  left: 3px;
`;

const Project = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  display: flex;
`;
