import styled from 'styled-components';

const Section = ({layout, children}) => {
  return (
    <RowSection >
      <Inner layout={layout}>
        {children}
      </Inner>
    </RowSection>
  )
};

export default Section;

const RowSection = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${props => props.layout == 'grid' ? "1085px" : "100%"};
  margin: 0 auto;

  @media screen and (min-width: ${({theme}) => theme.breakPoints.xlarge}) {
    max-width: ${props => props.layout == 'grid' ? "1650px" : "100%"};
  }
`;
