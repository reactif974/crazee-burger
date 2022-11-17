import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from '../reusable-ui/Logo';
import { theme } from '../../../theme';

export default function LoginPage() {

  const picsBurgerSize = `${parseInt(theme.fonts.P6, 12)*2}px`;

  // affichage (render)
  return (
    <LoginPageStyled>
      <Logo picsBurgerSize={picsBurgerSize} textSize="120px" picsPath="images/logo-orange.png"/>
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width:100%;
  height:100vh;
  background-image: 
  linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)
  ), url("images/burger-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

