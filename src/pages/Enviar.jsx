import "./styles/Enviar.css"
import { Link } from "react-router-dom";

function Enviar() {
    return (
        <div>
           <p>Enviar</p>
           <div>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
            </div>
        </div>
    );
}

export default Enviar