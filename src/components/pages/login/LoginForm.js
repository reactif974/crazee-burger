import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkHasExistingAccount } from '../../../utils/user/User';
import { users } from '../../../utils/user/UserDataBase';
import styled from 'styled-components';
import { theme } from '../../../theme';

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
            <input 
                className="input-username"
                value={newName}
                type="text" 
                name="name" 
                id="name" 
                placeholder='Entrez votre prénom'
                onChange={handleChange}
                required 
            />
            <button type="submit" className="button_submit">
                    Accédez à votre espace
            </button>
        </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
    // background-color:green;
    width: 30%;
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
        margin-bottom:0;
        font-weight: ${theme.weights.bold};
    }
    hr {
        height: 3px;
        background-color: ${theme.colors.background_orange};
        border:none;
    }
    .submit-container {
        // background-color: red;
        width:100%;
        height:200px;
        margin:0 auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        .input-username,
        .button_submit {
            height: 70px;
            border:none;
            border-radius: 5px;
        }
        .input-username {
            text-align: left;
            padding-left: ${theme.spacing.sm};
            &::placeholder {
                font-family: 'Open Sans', sans-serif;
                font-size: ${theme.fonts.P0};
                font-weight: ${theme.weights.light};
            }
        }
        .button_submit {
            background-color: ${theme.colors.background_button_submit};
            color: ${theme.colors.white};
            font-family: 'Open Sans', sans-serif;
            font-size: ${theme.fonts.P1};
            font-weight: ${theme.weights.bold};
        }
    }
`
