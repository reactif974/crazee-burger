import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkHasExistingAccount } from "../../../utils/user/user";
import { users } from "../../../utils/user/userDataBase";
import styled from "styled-components";
import { theme } from "../../../theme";
import Input from "../reusable-ui/Input";
import Button from "../reusable-ui/Button";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function LoginForm() {
  // state
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  // form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // check if user is authorized or not to access orderPage
    const hasAccount = checkHasExistingAccount(users, newName);

    // input clear
    setNewName("");
    navigate(`/order/${newName}`);

    if (!hasAccount) navigate("/");
  };

  // registration of the new name from the input form
  const onChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h2>Bienvenue chez nous !</h2>
      <br />
      <hr />
      <h3>Connectez-vous</h3>
      <div className="submit-container">
        <Input
          value={newName}
          onChange={onChange}
          placeholder="Entrez votre prénom"
          type="text"
          Icon={<BsPersonCircle />}
          required
        />
        <Button
          text="Accéder à mon espace"
          type="submit"
          Icon={<MdOutlineKeyboardArrowRight />}
          variant="normal"
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  h2,
  h3 {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.white};
    text-align: center;
  }
  h2 {
    font-size: ${theme.fonts.P6};
    margin: 100px 0 20px 0;
    font-weight: ${theme.weights.heavy};

    @media ${theme.devices.mobileL} {
      font-size: ${theme.fonts.P5};
      margin-top: 100px;
    }
    @media ${theme.devices.mobileM} {
      font-size: ${theme.fonts.P4};
      margin-top: 80px;
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
      font-size: ${theme.fonts.P5};
      margin-top: 100px;
    }
  }
  h3 {
    font-size: ${theme.fonts.P5};
    margin-bottom: 20px;
    font-weight: ${theme.weights.light};
    @media ${theme.devices.mobileL} {
      font-size: ${theme.fonts.P3};
    }
    @media ${theme.devices.mobileM} {
      font-size: ${theme.fonts.P3};
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
      font-size: ${theme.fonts.P3};
    }
  }
  hr {
    height: 3px;
    background-color: ${theme.colors.background_orange};
    border: none;
  }
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
