import "./styles/Classificacao.css"
import { Link } from "react-router-dom";

function Classificacao() {
    return (
        <div>
           <p>Classificacao</p>
           <div>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
            </div>
        </div>
    );
}

export default Classificacao
