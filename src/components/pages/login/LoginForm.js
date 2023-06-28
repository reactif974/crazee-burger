import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import TextInput from "../reusable-ui/TextInput";
import Button from "../reusable-ui/Button";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { createUser, getUser } from "../../../api/users";
import Toast from "../reusable-ui/Toast";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import Welcome from "./Welcome";

export default function LoginForm({ setLoader }) {
  // state
  const [newName, setNewName] = useState("patrick");
  const { signIn } = useContext(AuthContext);

  // Toast notify - registration success
  const showToastNotification = () => {
    toast.success(
      `Bravo ! vous êtes inscrit, vous pouvez vous connecter en tant que - ${newName}`,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        theme: "light",
        icon: <AiOutlineCheck size={30} />,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );
  };

  // authenticate user
  const authenticateUser = async (name) => {
    const existingUser = await getUser(name);
    if (!existingUser) {
      createUser(name);
      showToastNotification();
      setLoader(false);
      return;
    }
    signIn(name);
    setNewName("");
    setLoader(false);
  };

  // form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      authenticateUser(newName);
    } catch (error) {
      console.log("Erreur lors de la soummission du formulaire :", error);
    }
  };

  // registration of the new name from the input form
  const onChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <Welcome />
        <div className="submit-container">
          <TextInput
            value={newName}
            onChange={onChange}
            placeholder="Entrez votre prénom"
            type="text"
            Icon={<BsPersonCircle />}
            //required
          />
          <Button
            text="Accéder à mon espace"
            type="submit"
            Icon={<MdOutlineKeyboardArrowRight />}
          />
        </div>
        <Toast className={"toaster"} bodyClassName={"body-toast"} />
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  .submit-container {
    width: 480px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    button {
      &:hover {
        background-color: ${theme.colors.background_white};
        color: ${theme.colors.background_orange};
      }
      svg {
        margin-left: 5px;
        margin-top: 3px;
        font-size: 23px;
      }
    }
    input {
      border-radius: ${theme.borderRadius.round};
    }
    @media ${theme.devices.mobileL} {
      width: 100%;
    }
    @media ${theme.devices.mobileM} {
      width: 100%;
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
      width: 100%;
    }
  }
`;
