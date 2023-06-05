import React, {Fragment} from "react";
import CursoItem from "./curso";

const Cursos = () => {
    return (
        <Fragment>
            <CursoItem id="informatica-basica"
            title="Curso de informática Básica"
            sobre="Esse vídeo faz parte do conteúdo programático do Curso de Informática Básica GRÁTIS   do portal Certificado Cursos Online. O curso é gratuito e conta com certificado de conclusão opcional."/>
            <CursoItem id="smartphone-dicas"
            title="Dicas da Vovó Hi-Tech"
            sobre="Playlist da serie de vídeos para ajudar quem quer aprender um pouco mais do mundo da internet. Inclusão digital voltada para idosos. Com dicas e tutoriais rápidos para aprender a mexer no seu smartphone (celular) " />
            <CursoItem id="informatica-para-iniciantes"
            title="Informática para a Melhor idade e iniciantes"
            sobre="Apresentação das aulas e tira dúvidas para pessoas da melhor idade e iniciantes, que não sabem trabalhar com computadores e smartphone ou que ainda tem dificuldades." />
            <CursoItem id="matematica-basica"
            title="Matemática Básica - 2023 (Curso Completo)"
            sobre="Olá pessoal, beleza?! Essa é a mais recente playlist de Matemática Básica aqui do Canal. Os vídeos estão todos atualizados, com novidades e tudo o que você precisa saber para dar aquela revisada, ou até mesmo aprender muito, sobre matemática básica. Aqui, o foco é a escola, o ENEM, vestibulares, concursos públicos e até mesmo a faculdade. Assista as aulas na sequência. Bons estudos aí e sucesso!" />
        </Fragment>
    )
}

export default Cursos