import React from "react";
import { InfosUsuario } from "./InfosUsuario";

export const CardVideo = () => {
    const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("Seu vídeo será reproduzido em instante!");
    }

    return (<>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuario />
            <h4>{titulo}</h4>
        </div>
    </>)
}