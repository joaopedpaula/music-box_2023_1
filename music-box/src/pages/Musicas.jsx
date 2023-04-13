import { useState } from "react";
import api from "../api";

function Musicas () {

    const [musicas, setMusicas] = useState([])

    function getMusicas () {
        api.get("/musicas")
            .then((response) => {
                console.log("RESPONSE: ", response)
                console.log("MÚSICAS: ", response.data)
                setMusicas(response.data)
            }).catch((err) => {
                if (err.response.status == 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    return (
        <div>
            <h1>Lista de Músicas!</h1>
            <button onClick={getMusicas}>
                Listar Músicas
            </button>
            <div>
                {
                    musicas.map((musica) => {
                        return (
                            <div key={musica.id}> 
                                {musica.id} - {musica.titulo} 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Musicas;