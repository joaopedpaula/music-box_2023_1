import Musicas from "./pages/Musicas";

// importando estilizações no arquivo central, para que todos os componentes tenham acesso
import "./assets/css/reset.css"; // serve para limpar os comportamentos padrão dos elementos HTML
import "./assets/css/style.css"; // estilizações para o music-box

function App() {
  return (
    <Musicas />
  );
}

export default App;
