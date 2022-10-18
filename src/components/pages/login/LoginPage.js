import LoginForm from './LoginForm';
import '../../../styles/components/LoginPageStyled.css';

export default function LoginPage() {
  // affichage (render)
  return (
    <div className='login-form-container'>
      <h1 className='login-title'>
        <span className='crazee-span'>crazee</span> 
        <span>burger</span>
      </h1>
      <LoginForm />
    </div>
  )
}
