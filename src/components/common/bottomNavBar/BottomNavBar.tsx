import { Link } from "react-router-dom";
import { FaBitcoin, FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import styled from "styled-components";

const BottomNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 50px;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  border-radius: 0 0 10px 10px;
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

const NavButton = styled(Link)`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const BottomNavBar = () => {
  return (
    <BottomNav>
      <NavButton to="/">
        <IoMdHome />
        Home
      </NavButton>
      <NavButton to="/markets">
        <FaBitcoin />
        Markets
      </NavButton>
      <NavButton to="/my-coins">
        <FaShoppingCart />
        MyCoins
      </NavButton>
    </BottomNav>
  );
};

export default BottomNavBar;
