import styled from "styled-components";

export const LoaderBox = styled.div`
  position: ${(props) => props.position || "absolute"};
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
`;

export const Spinner = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  ::before,
  ::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::before,
  ::after {
    position: absolute;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 4px solid var(--blue);
    border-radius: 50%;
    animation: growth 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  ::after {
    animation-delay: -0.75s;
  }

  @keyframes growth {
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
`;

export const LoaderLabel = styled.p`
  margin: 0;
  margin-top: 1.5vw;
  text-align: center;
  color: var(--blue);
`;
