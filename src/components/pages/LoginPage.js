import {useState} from 'react';


export default function LoginPage() {

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

  // affichage (render)
  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
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
    </div>
  )
}
