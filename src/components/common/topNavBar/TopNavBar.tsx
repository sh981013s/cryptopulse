import { useNavigate } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import styled from "styled-components";
import logoImg from "@/assets/images/logo.png";
import useSignInOutWithGoogle from "@/hooks/auth/useSingInOutWithGoogle.ts";
import useUserStore from "@/stores/useUserStore.ts";

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
  background: #202636;

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
  width: 8%;
  cursor: pointer;
`;

const TopNavBar = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { signOutWithGoogle } = useSignInOutWithGoogle();

  const moveToHome = () => {
    navigate("/");
  };

  const moveToSignInPage = () => {
    navigate("login");
  };

  return (
    <NavSection>
      <LogoImg src={logoImg} alt="logo" onClick={moveToHome} />
      {user && (
        <div>
          <FaPerson />
          <span>{user.displayName}</span>
          <button onClick={signOutWithGoogle}>signOut</button>
        </div>
      )}
      {!user && (
        <div>
          <button onClick={moveToSignInPage}>SignIn</button>
        </div>
      )}
    </NavSection>
  );
};

export default TopNavBar;
