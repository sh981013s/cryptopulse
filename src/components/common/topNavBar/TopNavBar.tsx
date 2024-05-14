import { useNavigate } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import styled from "styled-components";
import logoImg from "@/assets/images/logo.png";

const NavSection = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 50px;
  padding: 0 10px;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    transform: none;
  }
`;

const LogoImg = styled.img`
  cursor: pointer;
`;

const TopNavBar = () => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };

  return (
    <NavSection>
      <LogoImg src={logoImg} alt="logo" onClick={moveToHome} />
      <div>
        <FaPerson />
        <span>seunghwan</span>
        <button>logout</button>
      </div>
    </NavSection>
  );
};

export default TopNavBar;
