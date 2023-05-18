import editIcon from "../assets/imagens/edit-icon.png"
import deleteIcon from "../assets/imagens/delete-icon.png"
import imgCapaPadrao from "../assets/imagens/capa.png" // importando recurso de imagem para a capa padrão 

import { useState } from "react";

import api from "../api";

function CardMusica(props) {

  const [inputTitulo, setInputTitulo] = useState(props.musica.titulo); // inicia o estado com o valor de "props.musica.titulo"
  const [inputArtista, setInputArtista] = useState(props.musica.artista); // inicia o estado com o valor de "props.musica.artista"
  const [inputGenero, setInputGenero] = useState(props.musica.genero); // inicia o estado com o valor de "props.musica.genero"
  const [inputAno, setInputAno] = useState(props.musica.ano); // inicia o estado com o valor de "props.musica.ano"

  const [estaEditando, setEstaEditando] = useState(false); // estado para verificar se o usuário está editando o card de música

  /*
    Utilizando operador ternário para definir o valor inicial da imagem de fundo
    O operador ternário funciona como um "if-else" de uma linha só: 
        
        condicao  ?  saida_se_true :  saida_se_false
    
    Abaixo, estamos criando uma constante "estilo", que é um objeto de configuração de estilo CSS, com a propriedade "backgroundImage".
    Utilizando esse objeto, podemos alterar a imagem de fundo da div da classe "card-music".
    E como imagem, estamos utilizando um operador ternário, onde como condição, usamos o "props.musica.imagem":
        props.musica.imagem ? props.musica.imagem : imgCapaPadrao
    
    Assim, validamos se "props.musica.imagem" está vazio, onde:
        Caso contenha algum valor armazenado, retornamos o próprio "props.musica.imagem" como valor.
        Caso esteja vazio, retornamos o valor do recurso "imgCapaPadrao".
  */
  const estilo = {
    backgroundImage: `url(${
      props.musica.imagem ? props.musica.imagem : imgCapaPadrao
    })`
  }

  function atualizarMusica() {
    console.log(inputTitulo);
    console.log(inputArtista);
    console.log(inputGenero);
    console.log(inputAno);

    // objeto que será o corpo da requisição
    const novaMusica = {
      titulo: inputTitulo,
      artista: inputArtista,
      genero: inputGenero,
      ano: inputAno
    }

    const id = props.musica.id;

    api
      .put(`/musicas/${id}`, novaMusica)
      .then((response) => console.log(response))
      .catch((err) => console.error(err))

    setEstaEditando(false);
  }

  return (
    <div style={estilo} className="card-music"> {/* aplicando estilização com a const "estilo" para alterar imagem de fundo */}
      <div className="icons">
        {/* utilizando recursos de imagem como fonte da tag img */}
        <img onClick={() => setEstaEditando(!estaEditando)} src={editIcon} alt="" /> {/* ao clicar na imagem de lápis, habilita/desabilita o modo de edição */}
        <img src={deleteIcon} alt="" />
      </div>
      <div className="info-music">
        <p>
          <strong className="card-title">música: </strong>
          <input
            onChange={(e) =>  setInputTitulo(e.target.value)} // atualiza o estado pegando o valor da input ao digitar
            disabled={estaEditando === false} // desabilitado se o modo de edição estiver como "false" 
            className={estaEditando ? 'input-music-enable' : 'input-music-disabled'} // desabilitado se o modo de edição estiver como "false"
            type="text"
            defaultValue={props.musica.titulo} // utilizando atributo "título" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <p>
          <strong className="card-title">artista: </strong>
          <input
            onChange={(e) =>  setInputArtista(e.target.value)} // atualiza o estado pegando o valor da input ao digitar
            disabled={estaEditando === false} // desabilitado se o modo de edição estiver como "false"
            className={estaEditando ? 'input-music-enable' : 'input-music-disabled'} // desabilitado se o modo de edição estiver como "false"
            type="text"
            defaultValue={props.musica.artista} // utilizando atributo "artista" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <p>
          <strong className="card-title">gênero: </strong>
          <input
            onChange={(e) =>  setInputGenero(e.target.value)} // atualiza o estado pegando o valor da input ao digitar
            disabled={estaEditando === false} // desabilitado se o modo de edição estiver como "false"
            className={estaEditando ? 'input-music-enable' : 'input-music-disabled'} // desabilitado se o modo de edição estiver como "false"
            type="text"
            defaultValue={props.musica.genero} // utilizando atributo "genero" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        <p>
          <strong className="card-title">ano: </strong>
          <input
            onChange={(e) =>  setInputAno(e.target.value)} // atualiza o estado pegando o valor da input ao digitar
            disabled={estaEditando === false} // desabilitado se o modo de edição estiver como "false"
            className={estaEditando ? 'input-music-enable' : 'input-music-disabled'} // desabilitado se o modo de edição estiver como "false"
            type="text"
            defaultValue={props.musica.ano} // utilizando atributo "ano" do objeto "musica" recebido como props, para exibir como valor padrão da input
          />
        </p>
        {/* ao clicar no botão, altera o estado "estaEditando" para false */}
        <button 
          onClick={() => atualizarMusica()} 
          className={estaEditando ? 'btn-salvar-enable' : 'btn-salvar-disabled'}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default CardMusica;
