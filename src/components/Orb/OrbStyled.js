import styled, { keyframes } from "styled-components";

const moveOrb = keyframes`
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100%, 0);
  }
  50% {
    transform: translate(100%, 100%);
  }
  75% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
  `;

export const OrbStyled = styled.div`
  width: 100vh;
  height: 100vh;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(233, 246, 255, 0.5) 0%,
    rgba(54, 82, 173, 0.5) 100%
  );

  filter: blur(400px);
  animation: ${moveOrb} 15s alternate linear infinite;
`;
