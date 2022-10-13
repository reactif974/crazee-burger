import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    // state
    const [newName, setNewName] = useState("");
        // is authorized to access the order page
        const [isAuthorisedUser, setIsAuthorisedUser] = useState(false);
        // users account
        const users = [
            {username: 'bob'},
            {username: 'claire'}
        ];

    const hasAccount = users.find((user) => user.username === newName);
    const navigate = useNavigate();

    // comportements

    // form submission
    const handleSubmit = (event) => {

        event.preventDefault();
        // input clear
        setNewName("");
        navigate(`/order/${newName}`);
        
        // redirection loginPage if user no authorized
        if(!isAuthorisedUser)
            navigate('/');
    }

    // registration of the new name from the input form
    const handleChange = (event) => {
        setNewName(event.target.value);
    }


  return (
    <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
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
            onClick={() => hasAccount && setIsAuthorisedUser(true)}
            type="submit">
                Accédez à votre espace
        </button>
    </form>
  )
}
