
export default function LoginPage() {

  // state

  // comportements
  

  // affichage (render)
  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous</h2>
        <form action="submit">
            <input type="text" name="name" id="name" placeholder='Entrez votre prénom...' required />
            <button type="submit">Accédez à votre espace</button>
        </form>
    </div>
  )
}
