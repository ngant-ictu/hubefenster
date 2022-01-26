import React from 'react';
import styled, {keyframes} from "styled-components";

const LoadingComponent = ({className, children}) => {

  return (
    <Loading className={className}>
      {children}
    </Loading>
  )
}

export default LoadingComponent;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  position: relative;
  max-width: 1250px;
  margin: 0 auto;

  &::before {
    position: absolute;
    content: '';
    border: 4px solid rgba(0, 0, 0, 0.3);
    border-top: 4px solid rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 2s linear infinite;
    z-index: 10;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    opacity: 0;
    visibility: 0;
  }

  &.loading {
    min-height: 350px;

    &::after {
      position: absolute;
      content: '';
      width: calc(100% - 10px);
      height: calc(100% + 40px);
      top: -20px;
      left: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      z-index: 9;
    }

    &::before {
      opacity: 1;
      visibility: 1;
    }
  }
`