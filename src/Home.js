import './styles/Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <p>Home</p>
        <div>
            <Link to='/Cadastro'>
                <button>Cadastrar</button>
            </Link>
            <Link to='/Classificacao'>
                <button>Classificação</button>
            </Link>
            <Link to='/MataMata'>
                <button>Mata Mata</button>
            </Link>
            <Link to='/Enviar'>
                <button>Enviar Resultados</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
