import { useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "../reusable-ui/Toast";
import ToggleButton from "../reusable-ui/ToggleButton";
import UserProfil from "./UserProfil";
import { FaUserSecret } from "react-icons/fa";
import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../../context/AdminContext";

export default function NavBarRightSide({ userName }) {
  const contextValue = useContext(AdminContext);

  useEffect(() => {
    console.log(contextValue.isModeAdmin);
    if (!contextValue.isModeAdmin) {
      toast.dismiss();
    }
  }, [contextValue.isModeAdmin]);

  // Toast notify params
  const showToastNotification = () => {
    if (!contextValue.isModeAdmin) {
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
    contextValue.updateIsModeAdmin(!contextValue.isModeAdmin);
  };
  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={contextValue.isModeAdmin}
        onToggle={showToastNotification}
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
