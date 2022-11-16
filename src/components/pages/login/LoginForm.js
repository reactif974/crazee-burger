import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkHasExistingAccount } from '../../../utils/user/User';
import { users } from '../../../utils/user/UserDataBase';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Input from '../reusable-ui/Input';
import {BsPersonCircle} from 'react-icons/bs';
import Button from '../reusable-ui/Button';

export default function LoginForm() {

    // state
    const [newName, setNewName] = useState("");
    const navigate = useNavigate();

    // comportements

    // form submission
    const handleSubmit = (event) => {

        event.preventDefault();

        // check if user is authorized or not to access orderPage
        const hasAccount = checkHasExistingAccount(users,newName);

        // input clear
        setNewName("");
        navigate(`/order/${newName}`);
        
        if(!hasAccount)
            navigate('/');
    }

    // registration of the new name from the input form
    const handleChange = (event) => {
        setNewName(event.target.value);
    }


  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h2>Bienvenue chez nous !</h2>
        <br/>
        <hr />
        <h3>Connectez-vous</h3>
        <div className="submit-container">
            <Input 
                value={newName} 
                placeholder="Entrez votre prénom" 
                handleChange={handleChange}
                icon={<BsPersonCircle />}
                />
            <Button text="Accéder à mon espace" type="submit"/>
        </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
    // background-color:green;
    h2,
    h3 {
        font-family: 'Amatic SC', cursive;
        font-weight: ${theme.weights.regular};
        color:${theme.colors.white};
        text-align:center;
    }
    h2 {
        font-size:${theme.fonts.P6};
        margin-bottom: 20px;
        font-weight: ${theme.weights.heavy};
    }
    h3 {
        font-size:${theme.fonts.P5};
        margin-bottom:20px;
        font-weight: ${theme.weights.light};
    }
    hr {
        height: 3px;
        background-color: ${theme.colors.background_orange};
        border:none;
    }
    .submit-container {
        // background-color: red;
        width:480px;
        height:200px;
        margin:0 auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        @media ${theme.devices.mobileL} {
            width:100%;
        }
    }
`
