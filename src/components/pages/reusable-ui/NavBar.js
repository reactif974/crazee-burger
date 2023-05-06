import styled from "styled-components";
import { theme } from "../../../theme";
import Logo from "./Logo";
import "react-toastify/dist/ReactToastify.css";
import NavBarRightSide from "../order/NavBarRightSide";

export default function NavBar({ userName }) {
  return (
    <NavBarStyled>
      <Logo />
      <NavBarRightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1400px;
  max-width: 1400px;
  height: 93px;
  z-index: 1;
  background-color: ${theme.colors.white};
  padding: 0 ${theme.spacing.md} 0 ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
  h1 {
    margin-top: 0;
  }
`;
