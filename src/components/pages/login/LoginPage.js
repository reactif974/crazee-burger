import LoginForm from './LoginForm';
import styled from 'styled-components';

export default function LoginPage() {
  // affichage (render)
  return (
    <LoginPageStyled>
      <h1 className='login-title'>
        <span className='crazee-span'>crazee</span>
        <span>burger</span>
      </h1>
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
    .login-title {
      margin-top:55px;
      .crazee-span {
          &::after {
            content: "";
            width: 280px;
            height: 188px;
            display: inline-block;
            position: relative;
            top: 60px;
            left:13px;
            background-image: url('images/logo-orange.png');
            background-size: 243px 160px;
            background-repeat: no-repeat;
          }
        }
      > span{
      color: #FF9A00;
      font-size: 135px;
      }
    }
`;

