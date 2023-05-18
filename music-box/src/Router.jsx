import {
    Route,
    Routes, 
    BrowserRouter
} from "react-router-dom"

import Inicio from "./pages/Inicio";
import Musicas from "./pages/Musicas";
import NotFound from "./pages/NotFound";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio /> } />
                <Route path="/musicas" element={ <Musicas /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;