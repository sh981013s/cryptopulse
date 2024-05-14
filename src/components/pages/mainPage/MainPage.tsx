import styled from "styled-components";

const MainContent = styled.div`
  width: 50%;
  background: #202636;
  padding: 0 10px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainPage = () => {
  return <MainContent>Main Page</MainContent>;
};

export default MainPage;
