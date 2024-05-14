import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #4b4b4b;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const MainContent = styled.div`
  width: 50%;
  background: #202636;

  min-height: 100vh;
  box-sizing: border-box;

  padding-top: 50px;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
