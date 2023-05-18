import Router from "./Router";

// importando estilizações no arquivo central, para que todos os componentes tenham acesso
import "./assets/css/reset.css"; // serve para limpar os comportamentos padrão dos elementos HTML
import "./assets/css/style.css"; // estilizações para o music-box

function App() {
  return (
    <Router />
  );
}

export default App;
