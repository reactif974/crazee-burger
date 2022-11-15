import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkHasExistingAccount } from '../../../utils/user/User';
import { users } from '../../../utils/user/UserDataBase';
import styled from 'styled-components';

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
        <h3>Connectez-vous</h3>
        <input 
            value={newName}
            type="text" 
            name="name" 
            id="name" 
            placeholder='Entrez votre prénom...'
            onChange={handleChange}
            required 
        />
        <button 
            type="submit">
                Accédez à votre espace
        </button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  
`
