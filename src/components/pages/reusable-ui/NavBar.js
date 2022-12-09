import styled from "styled-components";
import { theme } from "../../../theme";
import UserProfil from "../order/UserProfil";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";

export default function NavBar({ userName }) {
  return (
    <NavBarStyled>
      <Logo />
      <div className="user-profile-right-side">
        <ToggleButton />
        <UserProfil userName={userName} />
      </div>
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
  background-color: ${theme.colors.white};
  padding: 0 ${theme.spacing.md} 0 ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
  h1 {
    margin-top: 0;
  }
  .user-profile-right-side {
    display: flex;
    align-items: center;
    padding-right: 50px;
    height: 100%;
  }
`;
