// root.innerHTML = "<h1>Meu primeiro título com JS</h1>"
// root.innerHTML += "<h2> Meu segundo título com JS </h2>"

// const titulo = document.createElement("h1");
// titulo.innerHTML = "TÍTULO MONTADO COM CONSTANTE";
// root.appendChild(titulo);

const root = window.document.getElementById("root");

function Titulo(props) {
  return (
    <div>
      <h1> {props.bananinha} </h1>;
    </div>
  );
}

function Titulos() {
  return (
    <div>
      <Titulo teste="123" texto="Meu primeiro título com PROPS" />
      <Titulo texto="Olá, mundo!" />
      <Titulo texto="Primeira aula de React!" />
    </div>
  );
}

function Titulos2() {
  return (
    <div>
      <Titulo teste="123" texto="Meu primeiro título com PROPS" />
      <Titulo texto="Olá, mundo!" />
      <Titulo texto="Primeira aula de React!" />
    </div>
  );
}

ReactDOM.createRoot(root).render(<Titulos />);
