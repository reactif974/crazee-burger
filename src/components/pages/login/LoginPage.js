import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../reusable-ui/Logo";
import burgerBg from "../../../assets/burger-background.jpg";
import { theme } from "../../../theme";
import Loader from "../../../utils/loader/Loader";
import { useState } from "react";

export default function LoginPage() {
  const [loader, setLoader] = useState(false);

  return (
    <LoginPageStyled>
      {loader && <Loader />}
      <div className="logo-container">
        <Logo />
      </div>
      <LoginForm setLoader={setLoader} />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${burgerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .logo-container {
    transform: scale(3);
    margin-top: 130px;
    @media ${theme.devices.mobileM} {
      margin-top: 40px;
    }
  }
`;
