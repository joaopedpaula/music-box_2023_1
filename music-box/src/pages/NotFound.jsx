import logoVerde from "../assets/imagens/logo-verde.png";
import avatar from "../assets/imagens/avatar.png";
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="container">
          <img src={logoVerde} alt="Logo" className="logo" />
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </nav>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>404</h1>

            <p className="subtitle">se perdeu? nada para ver por aqui...</p>
            <button onClick={() => { navigate("/") }} className="btn">voltar</button>
          </div>

          <div className="img-lateral">
            <img src="../imagens/target-red.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
