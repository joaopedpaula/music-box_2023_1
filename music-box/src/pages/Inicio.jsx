import logoVerde from "../assets/imagens/logo-verde.png";
import avatar from "../assets/imagens/avatar.png";

import { useNavigate } from "react-router-dom";

function Inicio () {

    const navigate = useNavigate();

    return (
        <div>
            <nav>
                <div className="container">
                    <img src={logoVerde} alt="Logo" className="logo"/>
                    <img src={avatar} alt="Avatar" className="avatar" />
                </div>
            </nav>
            <div className="container index">
                <div className="index-content">
                    <div className="box-text-index">
                        <div className="info-index">
                            <p className="display">a música certa para o seu mood</p>
                            <p className="subtitle">organize suas músicas preferidas por categorias e aproveite cada batida</p>
                        </div>
                        <div className="img-index"></div>
                        <button onClick={() => { navigate("/musicas") }} className="btn">começar</button>
                    </div>
                    <img src="../imagens/sound-waves-pink.png" alt="" className="index-img"/>
                </div>
            </div>
        </div>
    )
}

export default Inicio;