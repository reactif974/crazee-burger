import { Link } from "react-router-dom";

export default function ErrorPage() {
    // state

    // comportements


    // affichage(render)
    return <div>
        <h1>ErrorPage</h1>
        <br/>
        <Link to="/">
            <button>Retourner à la page d'accueil</button>
        </Link>
    </div>
}