import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../theme";
import UserProfil from "../order/UserProfil";
import Logo from "./Logo";
import Toast from "./Toast";
import ToggleButton from "./ToggleButton";
import "react-toastify/dist/ReactToastify.css";
import { FaUserSecret } from "react-icons/fa";

export default function NavBar({ userName }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  useEffect(() => {
    if (!isModeAdmin) {
      toast.dismiss();
    }
  }, [isModeAdmin]);

  // Toast notify params
  const showToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        theme: "dark",
        icon: <FaUserSecret size={30} />,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavBarStyled>
      <Logo />
      <div className="user-profile-right-side">
        <ToggleButton
          isChecked={isModeAdmin}
          onToggle={showToastNotification}
          labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
          labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
        />
        <UserProfil userName={userName} />
        <Toast className={"toaster"} bodyClassName={"body-toast"} />
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
