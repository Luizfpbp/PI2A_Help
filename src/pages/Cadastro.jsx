import "./styles/Cadastro.css"
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div>
           <p>Cadastro</p>
           <div>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
            </div>
        </div>
    );
}

export default Cadastro;