import React, {Fragment} from "react";
import CursoItem from "./curso";

const Cursos = () => {
    return (
        <Fragment>
            <CursoItem id="programacao-basica"
            title="Curso computação Básica"
            sobre="Esse vídeo faz parte do conteúdo programático do Curso de Informática Básica GRÁTIS   do portal Certificado Cursos Online. O curso é gratuito e conta com certificado de conclusão opcional."/>
            <br/>
            <CursoItem id="smartphone-dicas"
            title="Dicas da Vovó Hi-Tech"
            sobre="Playlist da serie de vídeos para ajudar quem quer aprender um pouco mais do mundo da internet. Inclusão digital voltada para idosos. Com dicas e tutoriais rápidos para aprender a mexer no seu smartphone (celular) " />
        </Fragment>
    )
}

export default Cursos