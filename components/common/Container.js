import styled from 'styled-components';

const Container = ({children}) => {
  return (<>
    <ContainerComponent>{children}</ContainerComponent>
  </>)
}

export default Container;

const ContainerComponent = styled.div`
  max-width: 1030px;
  padding: 0 20px;
  margin: 0 auto;
`
