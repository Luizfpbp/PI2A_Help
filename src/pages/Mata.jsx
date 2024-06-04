import "./styles/Mata.css"

import { Link } from "react-router-dom";

function Mata() {
    return (
        <div>
           <p>Mata</p>
           <div>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
            </div>
        </div>
    );
}

export default Mata