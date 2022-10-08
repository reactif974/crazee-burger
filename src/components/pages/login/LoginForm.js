import React, { useState } from 'react'

export default function LoginForm() {

    // state
    const [newName, setNewName] = useState("");

    // comportements

    // form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${newName}`);
        // input clear
        setNewName("");
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
        <button type="submit">Accédez à votre espace</button>
    </form>
  )
}
