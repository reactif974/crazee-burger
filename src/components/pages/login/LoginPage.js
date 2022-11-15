import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from '../reusable-ui/Logo';

export default function LoginPage() {
  // affichage (render)
  return (
    <LoginPageStyled>
      <Logo />
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
  ), url("images/burger background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

