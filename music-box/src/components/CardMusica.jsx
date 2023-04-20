import editIcon from "../assets/imagens/edit-icon.png"
import deleteIcon from "../assets/imagens/delete-icon.png"
import { useState } from "react";

function CardMusica(props) {

  // exibindo objeto de "musica" recebido como props
  console.log('Objeto de "música" recebido como props: ', props.musica);

  return (
    <div className="card-music">
      <div className="icons">
        {/* utilizando recursos de imagem como fonte da tag img */}
        <img src={editIcon} alt="" />
        <img src={deleteIcon} alt="" />
      </div>
      <div className="info-music">
        <p>
          <strong className="card-title">música: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.musica.titulo} // utilizando atributo "título" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <p>
          <strong className="card-title">artista: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.musica.artista} // utilizando atributo "artista" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <p>
          <strong className="card-title">gênero: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.musica.genero} // utilizando atributo "genero" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <p>
          <strong className="card-title">ano: </strong>
          <input
            className="input-music-enable"
            type="text"
            defaultValue={props.musica.ano} // utilizando atributo "ano" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <button className="btn-salvar-enable">Salvar</button>
      </div>
    </div>
  );
}

export default CardMusica;
