import { useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "../reusable-ui/Toast";
import ToggleButton from "../reusable-ui/ToggleButton";
import UserProfil from "./UserProfil";
import { FaUserSecret } from "react-icons/fa";
import styled from "styled-components";
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

export default function NavBarRightSide({ userName }) {
  const { isModeAdmin, setIsModeAdmin } = useContext(GlobalContext);

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
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
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
