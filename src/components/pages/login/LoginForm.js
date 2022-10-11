import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    // state
    const [newName, setNewName] = useState("");
        // is authorized to access the order page
        const [goToOrderPage, setGoToOrderPage] = useState(false);
        // users account
        const users = [
            {username: 'bob'},
            {username: 'claire'}
        ];
    const account = users.find((user) => user.username === newName);
    const navigate = useNavigate();

    // comportements

    // form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // redirection order page
        if(goToOrderPage) {
            navigate(`/order/${newName}`);
        } else {
            // input clear
            setNewName("");
            navigate('/');
        }
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
            onClick={() => !account ? setGoToOrderPage(false) : setGoToOrderPage(true)} 
            type="submit">
                Accédez à votre espace
        </button>
    </form>
  )
}
