import { useState } from "react";
import api from "../api";

// importando recursos de imagem para utilizar no componente
import logoVerde from "../assets/imagens/logo-verde.png";
import avatar from "../assets/imagens/avatar.png";

// importando componente "CardMusica", que recebe as propriedades da música
import CardMusica from "../components/CardMusica";

function Musicas() {
  const [musicas, setMusicas] = useState([]);

  function getMusicas() {
    api
      .get("/musicas")
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("LISTA DE MÚSICAS: ", response.data);
        setMusicas(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }

  return (
    <div>
      <nav>
        <div className="container">
          {/* utilizando recursos de imagem como fonte da tag img */}
          <img src={logoVerde} alt="Logo" className="logo" />
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </nav>

      <div className="container">
        <div className="filter">
          <button onClick={getMusicas} className="btn">
            Adicionar
          </button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {
            musicas.map((musica) => {
              return <CardMusica musica={musica} key={musica.id} />;
            })
            // retornará um componente "CardMusica" para cada música no estado de "musicas"
            // o componente recebe como props o objeto com as informações da música iterada
          }
        </div>
      </div>
    </div>
  );
}

export default Musicas;
