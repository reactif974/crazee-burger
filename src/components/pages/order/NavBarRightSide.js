import { toast } from "react-toastify";
import Toast from "../reusable-ui/Toast";
import ToggleButton from "../reusable-ui/ToggleButton";
import UserProfil from "./UserProfil";
import { FaUserSecret } from "react-icons/fa";
import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

export default function NavBarRightSide({ userName }) {
  const { isModeAdmin, setIsModeAdmin, inputTitleRef } =
    useContext(GlobalContext);

  // Toast notify params
  const showToastNotification = () => {
    toast.info("Mode admin activé!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      theme: "dark",
      icon: <FaUserSecret size={30} />,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onToggle = async () => {
    await setIsModeAdmin(!isModeAdmin);
    !isModeAdmin && showToastNotification();
    setTimeout(() => {
      inputTitleRef.current?.focus();
    }, 310);
  };

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={onToggle}
        labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
        labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
      />
      <UserProfil userName={userName} />
      <Toast className={"toaster"} bodyClassName={"body-toast"} />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  height: 100%;
`;
