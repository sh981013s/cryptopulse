import styled from "styled-components";
import logoImg from "@/assets/images/logo.png";

const NavSection = styled.nav`
  display: flex;
  justify-content: center;

  width: 50%;
  height: 50px;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    transform: none;
  }
`;

const TopNavBar = () => {
  return (
    <NavSection>
      <img src={logoImg} alt="logo" />
    </NavSection>
  );
};

export default TopNavBar;
