import styled from "styled-components";
import logoImg from "../../assets/images/logo.png";

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 120px);

  h1 {
    text-align: center;
  }
`;

const MainPage = () => {
  return (
    <MainPageWrapper>
      <div>
        <img src={logoImg} alt="logo" />
        <h1>Welcome to CRYPTOPULSE!</h1>
      </div>
    </MainPageWrapper>
  );
};

export default MainPage;
