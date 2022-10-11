import { useParams } from "react-router-dom";

export default function OrderPage() {
    // state
        // get name param in url
        const {name} = useParams();
    // comportements


    // affichage(render)
    return <div>
        <h1>Bonjour {name}</h1>
        <br />
        <button>Déconnexion</button>
    </div>
}